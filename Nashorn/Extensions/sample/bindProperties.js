
var obj = {},
    obj2 = { foo: 344 }

print("prev bind obj :",obj.foo);  // undefined
print("prev bund obj2:",obj2.foo); // 344

// objobj2をバインドする。
Object.bindProperties(obj, obj2);

print("after bind obj :",obj.foo);  // 344
print("after bund obj2:",obj2.foo); // 344
obj.foo = "hello"
print("set obj.foo 'hello' bind obj :",obj.foo);  // hello
print("set obj.foo 'hello' bund obj2:",obj2.foo); // hello

// グローバル領域にバインド
Object.bindProperties(this, obj2);

print("global bind this:",foo);      // hello
print("global bind obj :",obj.foo);  // hello
print("global bund obj2:",obj2.foo); // hello
foo = 42;
print("set global foo='42' this:",foo);      // 42
print("set global foo='42' obj :",obj.foo);  // 42
print("set global foo='42' obj2:",obj2.foo); // 42

/* show exec(:r! jjs %)

*/

