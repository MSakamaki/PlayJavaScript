
var bjjType= Java.type("nashorn.bindJavaJS")
   ,bjj = new bjjType()
   ,myFnc= function(){ print('hello'); };

bjj.show()

print('my function : ', myFnc.toSource());
print('native function : ', print.toSource());

try{
    bjj.show();
    print("java functionは呼べる");
    print('java function : ', bjj.show.toSource());
} catch(e) {
    print('JavaではToSource()できない');
    e.printStackTrace();
}
