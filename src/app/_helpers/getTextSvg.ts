import { Svg } from 'app/_helpers/svg';

export function getTextSvg(text: string): Svg {
    const textSvg = new Svg('text');
    textSvg.setAttribute('x', 50);
    textSvg.setAttribute('y', 50);
    textSvg.setAttribute('fill', 'grey');
    textSvg.setAttribute('font-size', '16');

    const helloTxt = document.createTextNode('Hello World!');
    textSvg.appendChild(helloTxt);

    return textSvg;
}
