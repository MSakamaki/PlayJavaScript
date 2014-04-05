
// Conditional catch clauses
try {
    print('X-X' + "String".forEach());
} catch (e if e instanceof TypeError) {
    print('TypeError');
} catch (e) {
    print('error');
}



