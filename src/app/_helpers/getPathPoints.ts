import {ICoordinate} from 'app/chart/chart.interface';

export function getPathPoints(coordinates: ICoordinate[]): string {
    let lineData = '';
    coordinates.map((coordinate, index) => {
        const command = index === 0
            ? 'M'
            : 'L';
        lineData = lineData
            + ' '
            + command
            + ' '
            + coordinate.x
            + ','
            + coordinate.y;
    });

    return lineData;
}
