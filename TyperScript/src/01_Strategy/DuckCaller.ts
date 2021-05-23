import { Quack } from "./Quack";
import { QuackBehavior } from "./QuackBehavior";

export class DuckCaller {
    
    quackBehavior: QuackBehavior;
    
    constructor(){
        this.quackBehavior = new Quack;
    }

    performQuack(){
        this.quackBehavior.quack();
    }
    
}