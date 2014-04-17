import javax.script.*;

public class AnonymousFunc {
    public static void main(String[] args){
        System.out.println("start java");
        new AnonymousFunc().Run();
    }

    public void Run(){
        try{

            ScriptEngineManager m = new ScriptEngineManager();
            ScriptEngine e = m.getEngineByExtension("js");

            System.out.println("script engine : " + e.toString());

            Object evalRet = e.eval("function() { return 'eval ret val'; }");
            System.out.println(" e.eval() : " + evalRet.toString());
            Invocable eInv = (Invocable) e;
            //Object eInvObj = eInv.invokeFunction("");
            Object eInvObj = eInv.invokeMethod("");
            System.out.println(" e.Inv() : " + eInvObj);

        }catch(ScriptException | NoSuchMethodException ex){
            System.out.println(ex.toString());
        }
    }
}
