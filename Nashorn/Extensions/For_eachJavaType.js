

print('java型サンプル');
var JArray = Java.type('int[]');
var jary = new JArray(10);

var fnc = function(){
    print('[typeof : ' + ( typeof i )+ '][data   : ' + i + ']');
}


print('for');
for(var i in jary){ fnc(); }
print('for each');
for each(var i in jary){ fnc(); }

