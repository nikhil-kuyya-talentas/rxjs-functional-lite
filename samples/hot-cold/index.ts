import { Observable, interval } from "rxjs";
import { publish, refCount } from "rxjs/operators";

const obs = interval(1000).pipe(publish(), refCount());
// const obs = Observable.create((obs) => obs.next(Date.now())).pipe(publish());
obs.subscribe((d) => console.log("first observer", d));

setTimeout(() => {
  obs.subscribe((d) => console.log("second observer", d));
}, 1000);
