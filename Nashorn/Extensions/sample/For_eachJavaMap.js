
print ('----- Java.lang.System -----');
var System  = Java.type("java.lang.System")
for each (p in System.properties.entrySet()) { print(p.key, "=", p.value) }

print ('----- env -----');
for each (e in System.env.entrySet()) { print(e.key, "=", e.value) }


