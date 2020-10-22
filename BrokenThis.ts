export class BrokenThis {
    name: string = 'Bram';

    doSomething = () => {        
        return this.name;
    }

    doSomething2 = function x() {        
        return this.name;
    }

}