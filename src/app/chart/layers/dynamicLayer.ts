import {Svg} from 'app/_helpers/svg';
import {IChartDataItem, ICoordinate} from 'app/chart/chart.interface';
import {Layer} from 'app/chart/layers/layer';
import { getTextSvg } from 'app/_helpers/getTextSvg';

export class DynamicLayer extends Layer {
    private readonly infoWindowHeight = 30;
    private readonly infoWindowWidth = 200;
    private readonly hoverAreaWidth: number = 10;

    private height: number;
    private width: number;

    constructor(coordinates: ICoordinate[], data: IChartDataItem[], height: number, width: number) {
        super(coordinates, data);

        this.height = height;
        this.width = width;
    }

    public appendTo(container: HTMLElement): void {
        this.coordinates
            .map(coordinate => {
                const rect = new Svg('rect');
                rect.setAttribute('width', 1);
                rect.setAttribute('height', this.height - this.infoWindowHeight);
                rect.setAttribute('x', coordinate.x);
                rect.setAttribute('y', this.infoWindowHeight);
                rect.setAttribute('fill', 'black');
                rect.setAttribute('clip-path', 'url(#graphClipPath)');
                rect.setAttribute('class', 'selectionForeground');
                rect.hide();

                rect.appendTo(container);
            });

        this.coordinates
            .map(coordinate => {
                const rect = new Svg('rect');
                rect.setAttribute('width', this.infoWindowWidth);
                rect.setAttribute('height', this.infoWindowHeight);

                let x = coordinate.x - this.infoWindowWidth / 2;
                x = Math.max(x, 0);
                x = Math.min(x, this.width - this.infoWindowWidth);

                rect.setAttribute('x', x);
                rect.setAttribute('y', 0);
                rect.setAttribute('fill', 'white');
                rect.setAttribute('class', 'selectionBackground');

                const infoText = getTextSvg('TEst text');
                rect.appendChild(infoText.getElement());

                rect.hide();

                rect.appendTo(container);
            });

        this.coordinates
            .map((coordinate: ICoordinate) => {
                const rect = this.getHoverArea(coordinate);
                rect.appendTo(container);
            });

        this.bindEvents();
    }

    private bindEvents() {
        const hoverAreas = document.getElementsByClassName('hoverArea');

        for (let index = 0; index < hoverAreas.length; index++) {
            const hoverArea = hoverAreas[index];

            hoverArea
                .addEventListener('mouseover', event => {
                    if (event.target) {
                        this.setSelection(this.indexInClass(event.target, hoverAreas));
                    }
                });

            hoverArea
                .addEventListener('mouseout', event => {
                    if (event.target) {
                        this.removeSelection(this.indexInClass(event.target, hoverAreas));
                    }
                });
        }
    }

    private getHoverArea(coordinate: ICoordinate): Svg {
        const rect = new Svg('rect');
        rect.setAttribute('width', this.hoverAreaWidth);
        rect.setAttribute('height', this.height);
        rect.setAttribute('x', coordinate.x);
        rect.setAttribute('y', '0');
        rect.setAttribute('fill', 'transparent');
        rect.setAttribute('class', 'hoverArea');

        return rect;
    }

    private removeSelection(index: number): void {
        const selectionBackgrounds = document.getElementsByClassName('selectionBackground');
        const selectionForegrounds = document.getElementsByClassName('selectionForeground');
        (selectionBackgrounds[index] as HTMLElement).style.display = 'none';
        (selectionForegrounds[index] as HTMLElement).style.display = 'none';
    }

    private setSelection(index: number): void {
        const selectionBackgrounds = document.getElementsByClassName('selectionBackground');
        const selectionForegrounds = document.getElementsByClassName('selectionForeground');
        (selectionBackgrounds[index] as HTMLElement).style.display = 'block';
        (selectionForegrounds[index] as HTMLElement).style.display = 'block';
    }

    private indexInClass(node: EventTarget, elements: HTMLCollectionOf<Element>): number {
        let num = 0;
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] === node) {
                return num;
            }
            num++;
        }

        return -1;
    }
}
