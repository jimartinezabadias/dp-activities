import { MallardDuck } from "./MallardDuck";
import { ModelDuck } from "./ModelDuck";
import { FlyRocketPowered } from "./FlyRocketPowered";
import { DuckCaller } from "./DuckCaller";
export default class MiniDuckSimulator {
    constructor() { }
    test() {
        let mallard = new MallardDuck();
        mallard.performQuack();
        mallard.performFly();
        let model = new ModelDuck();
        model.performFly();
        model.setFlyBehavior(new FlyRocketPowered());
        model.performFly();
        let caller = new DuckCaller();
        caller.performQuack();
    }
}
