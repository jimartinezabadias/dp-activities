public class DuckCaller {
    
    QuackBehavior quackBehavior;
    public DuckCaller() {
        quackBehavior = new Quack();
    }
    
    public void performQuack() {
        quackBehavior.quack();
    }
}
