import {fromEvent } from 'rxjs';
import { filter, tap, takeUntil, map, concatMap } from 'rxjs/operators';

const click = fromEvent(document,'click').pipe(tap(console.log)).subscribe()

const mouseDown = fromEvent(document,'mousedown');
const mouseUp = fromEvent(document,'mouseup');
const mouseMove = fromEvent(document,'mousemove');

const mouseMoveSubscription = mouseDown.pipe(
    concatMap(event => {
       return  mouseMove.pipe(takeUntil(mouseUp));
    }),tap((evt : MouseEvent) => {
        console.log('event',evt.clientX,evt.clientY);
    })
).subscribe();


