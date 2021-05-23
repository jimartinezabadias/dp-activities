export class Duck {
    constructor(fb, qb) {
        this.flyBehavior = fb;
        this.quackBehavior = qb;
    }
    performFly() {
        this.flyBehavior.fly();
    }
    performQuack() {
        this.quackBehavior.quack();
    }
    swim() {
        console.log("All ducks float, even decoys");
    }
    setFlyBehavior(fb) {
        this.flyBehavior = fb;
    }
    setQuackBehavior(qb) {
        this.quackBehavior = qb;
    }
}
