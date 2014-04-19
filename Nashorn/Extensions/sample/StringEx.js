

var fnc = function(args){
    print('args         [' + args + ']');
    print('argsTrim     [' + args.trim() + ']');
    print('argsTrimLeft [' + args.trimLeft() + ']');
    print('argsTrimRight[' + args.trimRight() + ']');
}

fnc(" A ");
fnc("　あ　");
fnc("	TAB	");

