

//console = console || {log: function(msg){print(msg);}}
try {
  if (console){ print ('yes console'); } else { print ('no console');};
} catch(e) {
  print ('error ' + e);
  console = {log: function(msg) { print(msg); }};
}
var ary = [1,2,3,4,5,6];

function sqr(x) x*x
print('関数式クロージャ :',sqr(3));


print('ary some : ' + [1,2,3,4,6,7].some(function(e) e==5));
print('ary some : ' + [1,2,3,4,6,7].some(function(e) e==4));

//var it = (i + 3 for (i in ary));
//var handleResults = function( results ) { for ( var  i in results ) console.log(i);}
//ndleResults( i for ( i in ary ) if ( i > 3 ) );

console.log('EcmaScript array.object');
var ret = ary.reduce(function(previousValue, currentValue, index, array){
    return previousValue + currentValue;
});
print('ret1 :' + ret);

ret = ary.reduce(function(previousValue, currentValue, index, array){
    return previousValue + currentValue;
}, 10);
print('ret2 :' + ret);
