
var obj = new Object(){
    run: function(){ print("run object"); }
};

obj.run();


// java.lang.Runnable API 
// http://docs.oracle.com/javase/jp/7/api/java/lang/Runnable.html

(new java.lang.Runnable(){
    run: function(){ print('run'); }
})();

var func = new java.lang.Runnable(){
    run: function(){ print('run func()'); }
};
func();
func.run();

try {
    (new java.lang.Runnable(){
        exec: function(){ print('exec'); }
    })();
} catch(e){
    print('err:' + e);
}
