public class Mocha extends CondimentDecorator {

    public Mocha(Beverage beverage){
        this.beverage = beverage;
    }

    public String getDescription(){
        return beverage.getDescription() + ", Mocha";
    }

    public double cost() {
        double cost = beverage.cost();
        if (this.beverage.getSize() == Size.TALL) {
            cost += .10;
        } else if ( this.beverage.getSize() == Size.GRANDE) {
            cost += .15;
        }  else if ( this.beverage.getSize() == Size.VENTI) {
            cost += .20;
        }
        return cost;
    }
}