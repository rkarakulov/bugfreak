import { Svg } from 'app/_helpers/svg';
import { getPathPoints } from 'app/_helpers/getPathPoints';

export class AxisY {
    private svg: Svg;
    private height: number;

    constructor(height: number) {
        this.height = height;
        this.svg = new Svg('path');
    }

    public appendTo(container: HTMLElement): void {
        const coordinates = [
            {
                x: 0,
                y: 0
            },
            {
                x: 0,
                y: this.height
            }
        ];

        this.svg = new Svg('path');
        this.svg.setAttribute('d', getPathPoints(coordinates));
        this.svg.setAttribute('fill', 'none');
        this.svg.setAttribute('stroke', 'black');
        this.svg.setAttribute('stroke-width', '1');

        this.svg.appendTo(container);
    }
}
