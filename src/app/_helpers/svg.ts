export class Svg {
    private readonly namespace = 'http://www.w3.org/2000/svg';

    private elementType: string;
    private element: SVGElement;

    constructor(elementType: string) {
        this.elementType = elementType;
        this.element = document.createElementNS(this.namespace, this.elementType);
    }

    public setAttribute(key: string, value: string | number): void {
        const normalizedValue = typeof(value) === 'number'
            ? value.toString()
            : value;
        this.element.setAttribute(key, normalizedValue);
    }

    public hide() {
        this.element.style.display = 'none';
    }

    public appendTo(container: HTMLElement): void {
        container.appendChild(this.element);
    }

    public appendChild(child: HTMLElement | SVGElement | Text): void {
        this.element.appendChild(child);
    }

    public getElement(): SVGElement {
        return this.element;
    }
}

