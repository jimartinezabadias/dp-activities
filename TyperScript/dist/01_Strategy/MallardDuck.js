import { Duck } from "./Duck";
import { FlyWithWings } from "./FlyWithWings";
import { Quack } from "./Quack";
export class MallardDuck extends Duck {
    constructor() {
        let fly = new FlyWithWings();
        let quack = new Quack();
        super(fly, quack);
    }
    display() {
        console.log("I'm a real mallard duck");
    }
}
