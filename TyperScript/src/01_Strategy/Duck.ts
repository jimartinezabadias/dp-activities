import { FlyBehavior } from "./FlyBehavior";
import { QuackBehavior } from "./QuackBehavior";

export abstract class Duck {
    
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;
    
    constructor(fb: FlyBehavior, qb: QuackBehavior) {
        this.flyBehavior = fb;
        this.quackBehavior = qb;
    }
    
    abstract display(): void;
    
    performFly(): void {
        this.flyBehavior.fly();
    }

    performQuack(): void {
        this.quackBehavior.quack();
    }

    swim(): void {
        console.log("All ducks float, even decoys");
    }

    setFlyBehavior(fb: FlyBehavior): void {
        this.flyBehavior = fb;
    }

    setQuackBehavior(qb: QuackBehavior): void {
        this.quackBehavior = qb;
    }

}
