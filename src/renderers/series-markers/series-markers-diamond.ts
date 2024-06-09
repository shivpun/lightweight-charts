import { Coordinate } from '../model/coordinate';

import { shapeSize } from './series-markers-utils';

export function drawDiamond(
	ctx: CanvasRenderingContext2D,
	centerX: Coordinate,
	centerY: Coordinate,
	size: number
): void {
	// http://www.java2s.com/ref/javascript/canvas-shape-index.html
	const squareSize = shapeSize('diamond', size);
	const halfSize = (squareSize) / 2;
	const left = centerX;
	const top = centerY - halfSize;
	ctx.beginPath();
	ctx.moveTo(left, top);
	ctx.lineTo(left - squareSize / 2, top + squareSize / 2);
	ctx.lineTo(left, top + squareSize);
	ctx.lineTo(left + squareSize / 2, top + squareSize / 2);
	ctx.closePath();
	ctx.fill();
}

export function hitTestDiamond(
	centerX: Coordinate,
	centerY: Coordinate,
	size: number,
	x: Coordinate,
	y: Coordinate
): boolean {
	const squareSize = shapeSize('diamond', size);
	const halfSize = (squareSize - 1) / 2;
	const left = centerX - halfSize;
	const top = centerY - halfSize;

	return x >= left && x <= left + squareSize &&
		y >= top && y <= top + squareSize;
}
