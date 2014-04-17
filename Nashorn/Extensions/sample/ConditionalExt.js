
print('拡張catch文');
try {
    print("String".forEach());
} catch (e if e instanceof TypeError) {
    print('TypeError');
} catch (e) {
    print('error');
}

