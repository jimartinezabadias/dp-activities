import { Duck } from "./Duck";
import { FlyNoWay } from "./FlyNoWay";
import { Quack } from "./Quack";
export class ModelDuck extends Duck {
    constructor() {
        let fly = new FlyNoWay();
        let quack = new Quack();
        super(fly, quack);
    }
    display() {
        console.log("I'm model duck");
    }
}
