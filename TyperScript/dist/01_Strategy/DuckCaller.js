import { Quack } from "./Quack";
export class DuckCaller {
    constructor() {
        this.quackBehavior = new Quack;
    }
    performQuack() {
        this.quackBehavior.quack();
    }
}
