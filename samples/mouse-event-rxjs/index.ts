import {fromEvent } from 'rxjs';
import { filter, tap, takeUntil, map, concatMap } from 'rxjs/operators';
import * as ColorPk from 'color';

const click = fromEvent(document,'click').pipe(tap(console.log)).subscribe()
const Color = ColorPk.default;

const mouseDown = fromEvent(document,'mousedown');
const mouseUp = fromEvent(document,'mouseup');
const mouseMove = fromEvent(document,'mousemove');
const documentBody = document.getElementsByTagName('body')[0];

const mouseMoveSubscription = mouseDown.pipe(
    concatMap(event => {
       return  mouseMove.pipe(takeUntil(mouseUp));
    }),tap((evt : MouseEvent) => {
        const element = document.createElement('div');
        const x = evt.clientX;
        const y = evt.clientY;
        element.innerText = `x : ${x}, y : ${y}`;
        documentBody.append(element);
        const colorValue = Color(`rgb(${x%255},${(y%255)},${(x*y)%255})`);
        const hex = colorValue.hex();
        const backgroundColor = `background-color  : ${hex}`;
        documentBody.setAttribute('style',backgroundColor);
    })
).subscribe();


