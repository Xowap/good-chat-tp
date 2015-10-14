MyObject = function (argument1, argument2) {
    var self = this,
        privateMember1,
        privateMember2,

        // Methods
        method1,
        method2,
        method3;

    // Public members
    self.publicMember1 = 42;
    self.publicMember2 = false;

    // Method bodies
    method1 = function () {
        // Method 1 code
    };

    method2 = function () {
        // Method 2 code
    };

    method3 = function () {
        // Method 3 code
    };

    // Exports
    self.method1 = method1;
    self.method2 = method2;

    (function () {
        // Constructor code
    }());
}
