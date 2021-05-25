export class BrokenThis {
    name: string = 'Bram';

    doSomething = (s: string) => {
        return s + this.name;
    }

    doSomething2 = function x(s: string) {
        // return s + this.name;
    }

}