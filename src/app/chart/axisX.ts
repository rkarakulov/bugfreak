import { Svg } from 'app/_helpers/svg';
import { getPathPoints } from 'app/_helpers/getPathPoints';

export class AxisX {
    private svg: Svg;
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.svg = new Svg('path');
    }

    public appendTo(container: HTMLElement): void {
        const coordinates = [
            {
                x: 0,
                y: this.height
            },
            {
                x: this.width,
                y: this.height
            }
        ];

        this.svg.setAttribute('d', getPathPoints(coordinates));
        this.svg.setAttribute('fill', 'none');
        this.svg.setAttribute('stroke', 'black');
        this.svg.setAttribute('stroke-width', '1');

        this.svg.appendTo(container);
    }
}
