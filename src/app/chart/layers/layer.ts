import {IChartDataItem, ICoordinate} from 'app/chart/chart.interface';

export abstract class Layer {
    protected coordinates: ICoordinate[];
    protected data: IChartDataItem[];

    constructor(coordinates: ICoordinate[], data: IChartDataItem[]) {
        this.coordinates = coordinates;
        this.data = data;
    }

    public abstract appendTo(container: HTMLElement): void;
}

