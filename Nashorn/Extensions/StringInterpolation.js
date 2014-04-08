
var x = 'world';
print ('hello ${x}'); //--> hello ${x}

var msg = "hello ${x}"; //--> hello world
print (msg);

var msg = "hello ${ x }"; //--> hello world
print (msg);

var i = 10,
	j = 5;

print('calc : ${i+j}'); //--> calc : ${i+j}
var calc = 'calc : ${i+j}';//--> calc : ${i+j}
print (calc);



