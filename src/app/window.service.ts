import { Injectable } from '@angular/core';
import { fromEvent, merge, timer } from 'rxjs';
import { map, switchMap, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  // private readonly inactivityTime = 60000;
  // private readonly inactivityTime = 90000;
  private readonly inactivityTime = 10000;

  constructor() { }

  getInactivity() {
    const inactivityTimer$ = timer(this.inactivityTime);

    const keydown$ = fromEvent(document, 'keydown');
    const click$ = fromEvent(document, 'click');
    const mouseMove$ = fromEvent(document, 'mousemove');

    return merge(keydown$, click$, mouseMove$).pipe(
      startWith(null),
      switchMap(() => inactivityTimer$),
      map(() => true)
    );
  }

}
