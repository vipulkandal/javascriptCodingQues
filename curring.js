function mul(x) {
    return function (y) { // anonymous function
        return function (z) { // anonymous function
            return x * y * z;
        };
    };
}

console.log(mul(1)(2)(3))