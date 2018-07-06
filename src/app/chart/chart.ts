import {IChartDataItem, ICoordinate} from 'app/chart/chart.interface';
import {DataLayer} from 'app/chart/layers/dataLayer';
import {DynamicLayer} from 'app/chart/layers/dynamicLayer';
import {OverlayLayer} from 'app/chart/layers/overlayLayer';
import {DateFilter} from 'app/header/dateFilter';
import {DAY_IN_MILLISECONDS, MONTH_IN_MILLISECONDS, WEEK_IN_MILLISECONDS} from 'app/_helpers/time';
import {chartData} from 'app/chart/chartData';
import 'app/chart/chart.scss';
import { AxisX } from 'app/chart/axisX';
import { AxisY } from 'app/chart/axisY';

export class Chart {
    private width: number = 800;
    private height: number = 300;

    private element: HTMLElement;

    constructor(elementId: string) {
        const element = document.getElementById(elementId);
        if (!element) {
            throw Error('Incorrect chart element id');
        }

        this.element = element;
        this.element.setAttribute('width', this.width.toString());
        this.element.setAttribute('height', this.height.toString());
    }

    public loadData(dateFilter: DateFilter = DateFilter.AllTime): void {
        const filteredData = this.filterData(chartData, dateFilter);

        this.draw(filteredData);
    }

    private filterData(data: IChartDataItem[], dateFilter: DateFilter) {
        const currentDate = new Date().getTime();
        let step = currentDate;
        switch (dateFilter) {
            case DateFilter.Last3Days: {
                step = 3 * DAY_IN_MILLISECONDS;
                break;
            }
            case DateFilter.LastWeek: {
                step = WEEK_IN_MILLISECONDS;
                break;
            }
            case DateFilter.LastMonth: {
                step = MONTH_IN_MILLISECONDS;
                break;
            }
            case DateFilter.Last3Months: {
                step = 3 * MONTH_IN_MILLISECONDS;
                break;
            }
            default:
                break;
        }

        return data.filter(item => new Date(item.date).getTime() > currentDate - step);
    }

    private draw(data: IChartDataItem[]): void {
        this.clear();

        const coordinates = this.getCoordinates(data);
        if (coordinates.length === 0) {
            this.setInfoMessage('No data for display');
        }
        else {
            this.setInfoMessage('');

            const axisX = new AxisX(this.width, this.height);
            axisX.appendTo(this.element);

            const axisY = new AxisY(this.height);
            axisY.appendTo(this.element);

            const dataLayer = new DataLayer(coordinates, data);
            dataLayer.appendTo(this.element);

            const overlayLayer = new OverlayLayer(coordinates, data);
            overlayLayer.appendTo(this.element);

            const dynamicLayer = new DynamicLayer(coordinates, data, this.height, this.width);
            dynamicLayer.appendTo(this.element);
        }
    }

    private clear() {
        this.element.innerHTML = '';
    }

    private setInfoMessage(message: string): void {
        const messageBlock = document.getElementsByClassName('chart_message')[0] as HTMLElement;
        messageBlock.innerHTML = message;
        messageBlock.style.display = !message
            ? 'none'
            : 'flex';
    }

    private getCoordinates(data: IChartDataItem[]): ICoordinate[] {
        const values = data.map(item => item.close);

        const min = Math.min.apply(null, values);
        const max = Math.max.apply(null, values);

        const yRatio = (max - min) / this.height;
        const xRatio = this.width / (values.length - 2);

        return values.map((value, index) => {
            const y = this.height - ((value - min) / yRatio);
            let x = (xRatio * index) - (xRatio / 2);
            x = Math.max(x, 0);
            x = Math.min(x, this.width);

            return {x, y};
        });
    }
}
