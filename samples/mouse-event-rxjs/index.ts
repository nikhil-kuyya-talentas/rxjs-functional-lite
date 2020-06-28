import {fromEvent } from 'rxjs';
import { filter, tap, takeUntil, map, concatMap, take, concatAll } from 'rxjs/operators';

// const click = fromEvent(document,'click').pipe(tap(console.log)).subscribe()
const mouseDown$ = fromEvent<MouseEvent>(document,'mousedown');
const mouseUp$ = fromEvent<MouseEvent>(document,'mouseup');
const mouseMoveTillMouseUp$ = fromEvent<MouseEvent>(document,'mousemove').pipe(takeUntil(mouseUp$));

const documentBody = document.getElementsByTagName('body')[0];

mouseMoveTillMouseUp$.pipe(tap(console.log)).subscribe();

mouseDown$.pipe(
        map(() => {
            return  mouseMoveTillMouseUp$;
        }),
        concatAll()
).forEach(mouseEventHandler);


function mouseEventHandler(evt: MouseEvent) : void {
    const element = document.createElement('div');
    const x = evt.clientX;
    const y = evt.clientY;
    element.innerText = `x : ${x}, y : ${y} - ${evt.type}`;
    documentBody.append(element);
    // const colorValue = color(`rgb(${x % 255},${(y % 255)},${(x * y) % 255})`);
    // const hex = colorValue.hex();
    const backgroundColor = `background-color  : red`;
    documentBody.setAttribute('style', backgroundColor);
}

