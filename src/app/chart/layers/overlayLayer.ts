import {Svg} from 'app/_helpers/svg';
import {Layer} from 'app/chart/layers/layer';
import {DOWN_POINT_COLOR, UP_POINT_COLOR} from 'app/_helpers/pallete';

export class OverlayLayer extends Layer {
    public appendTo(container: HTMLElement): void {
        if (this.coordinates.length > 0) {
            const color = this.data[0].close > this.data[this.data.length - 1].close
                ? DOWN_POINT_COLOR
                : UP_POINT_COLOR;

            this.coordinates
                .map(coordinates => {
                    const point = new Svg('circle');
                    point.setAttribute('cx', coordinates.x);
                    point.setAttribute('cy', coordinates.y);
                    point.setAttribute('r', '2');
                    point.setAttribute('fill', color);

                    point.appendTo(container);
                });
        }
    }
}
