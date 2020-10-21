import { interval, Observable, of } from 'rxjs';
import { first, map, take } from 'rxjs/operators';



export class ObservableDemo {

    static demo() {
        console.log('demo');
        const observable = new Observable<number>(subscriber => {
            subscriber.next(1);
            subscriber.next(2);
            subscriber.next(3);

            setTimeout(() => {
                subscriber.next(4);
                subscriber.complete();
            }, 1000);
        });

        setTimeout(() => { }, 100);

        console.log('just before subscribe1-----------');
        observable.subscribe({
            next(x) { console.log('got1 value ' + x); },
            error(err) { console.error('something wrong occurred: ' + err); },
            complete() { console.log('done'); }
        });
        console.log('just after subscribe1----------');

        console.log('just before subscribe2----------');
        observable.pipe(
            map(x => x * x) // with a piped map operator
        ).subscribe({
            next(x) { console.log('got2 value ' + x); }
        });
        console.log('just after subscribe2-----------');
    }

    static demo2() {
        first()(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

        const numbers = interval(200);
        const takeFourNumbers = numbers.pipe(take(4));        
        const subscription = takeFourNumbers.subscribe(x => console.log('Next: ', x));

        setTimeout(() => {
            // Unsubscribe subscription after 1000 ms.
            subscription.unsubscribe();
          }, 1000);

    }

}