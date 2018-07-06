import {DateFilter} from 'app/header/dateFilter';
import {Chart} from 'app/chart/chart';
import 'app/header/header.scss';

export class Header {
    private element: HTMLElement;

    constructor(elementId: string) {
        const element = document.getElementById(elementId);
        if (!element) {
            throw Error('Incorrect header element id');
        }

        this.element = element;
    }

    public bindEvents(chart: Chart): void {
        const buttons = this.element.getElementsByClassName('header_filter-button');
        for (let index = 0; index < buttons.length; index++) {
            const button = buttons[index];
            const period = button.getAttribute('data-period');

            button.addEventListener('click', () => {
                for (let j = 0; j < buttons.length; j++) {
                    buttons[j].classList.remove('header_filter-button__active');
                }
                button.classList.add('header_filter-button__active');

                chart.loadData(period as DateFilter);
            });
        }
    }
}
