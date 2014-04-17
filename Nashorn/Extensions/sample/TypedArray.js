
var buffer = new ArrayBuffer(16);
print ('buffer:', buffer.byteLength);

var int32View = new Int32Array(buffer);
for (var i=0; i<int32View.length; i++) {
    int32View[i] = i*2;
}

print ('int32view.len:', int32View.length);
// print 0.. 2.. 4.. 6
for (var i=0; i<int32View.length; i++) {
    print("Entry " + i + ": " + int32View[i]);
}

