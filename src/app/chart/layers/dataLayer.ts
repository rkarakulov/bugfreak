import {Svg} from 'app/_helpers/svg';
import {Layer} from 'app/chart/layers/layer';
import {getPathPoints} from 'app/_helpers/getPathPoints';
import {DOWN_CHART_COLOR, UP_CHART_COLOR} from 'app/_helpers/pallete';

export class DataLayer extends Layer {
    public appendTo(container: HTMLElement): void {
        const color = this.data[0].close > this.data[this.data.length - 1].close
            ? DOWN_CHART_COLOR
            : UP_CHART_COLOR;

        const line = new Svg('path');
        line.setAttribute('d', getPathPoints(this.coordinates));
        line.setAttribute('fill', 'none');
        line.setAttribute('stroke', color);
        line.setAttribute('stroke-width', '1');

        line.appendTo(container);
    }
}
