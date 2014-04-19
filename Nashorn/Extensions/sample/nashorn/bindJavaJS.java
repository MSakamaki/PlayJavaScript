package nashorn;

public class bindJavaJS {
    
    private int count = 0;
    
    public void show(){
        System.out.println("count:" + this.count);
    }
    public void add(int cnt){
        this.count += cnt;
    }
}
