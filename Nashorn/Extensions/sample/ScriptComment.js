#!/usr/bin/jjs

# check script mode
var x = "World"
var str = "Hello, ${x}"
 
print(str) 


# check back quate
var System  = Java.type("java.lang.System")
if ('windows' === System.getProperty('sun.desktop')) {
	print('windowsだと動かんぜよ');
} else {
	var files = `ls -l`;

	print(files);
	var lines = files.split("\n");
	 
	// print only the directories
	for (var l in lines) {
	    var line = lines[l];
	    if (line.startsWith("d")) // directory
	        print(line)
	}
}



