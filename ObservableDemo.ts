import { Observable } from 'rxjs';


export class ObservableDemo {

    static demo() {
        console.log('demo');
        const observable = new Observable(subscriber => {
            subscriber.next(1);
            subscriber.next(2);
            subscriber.next(3);

            setTimeout(() => {
                subscriber.next(4);
                subscriber.complete();
            }, 1000);
        });

        setTimeout(() => {}, 100);

        console.log('just before subscribe1-----------');       
        observable.subscribe({
            next(x) { console.log('got1 value ' + x); },
            error(err) { console.error('something wrong occurred: ' + err); },
            complete() { console.log('done'); }
        });
        console.log('just after subscribe1----------');

        console.log('just before subscribe2----------');       
        observable.subscribe({
            next(x) { console.log('got2 value ' + x); }
        });
        console.log('just after subscribe2-----------');
    }

}