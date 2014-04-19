
function func() {
    throw new Error()
}
 
function f() {
    func()
}
 
try {
    f()
} catch (e) {
    print('stack       :', e.stack)
    print('lineNumber  :', e.lineNumber)
    print('columnNumber:', e.columnNumber)
    print('fileName    :', e.fileName)

    print('printStackTrace', e.printStackTrace());
    print('getStackTrace', e.getStackTrace());
}


