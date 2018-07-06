import {Chart} from 'app/chart/chart';
import {Header} from 'app/header/header';
import 'app/app.scss';

export class App {
    public static start() {
        const container = document.getElementById('container');

        if (container) {
            const chart = new Chart('svgChart');
            chart.loadData();

            const header = new Header('header');
            header.bindEvents(chart);
        }
    }
}
