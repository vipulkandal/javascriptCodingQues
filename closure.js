
function human(name) {
    function sayHi() {
        console.log(`Hi I am ${name}`)
    }
    function sayHowYouFeel() {
        console.log(`${name} is feeling good!`)
    }
    return { // Functions are returned as objects
        sayHi,
        sayHowYouFeel
    }
}
const sina = human('Sina')
const qoli = human('Qoli')

sina.sayHi();

// Self Invoked Function
{
    var globalVar = "abc"; //Global variable

    // Parent self-invoking function
    (function outerFunction(outerArg) { // start of outerFunction's scope

        var outerFuncVar = 'x'; // Variable declared in outerFunction's function scope   

        // Closure self-invoking function
        (function innerFunction(innerArg) { // start of innerFunction's scope

            var innerFuncVar = "y"; // variable declared in innerFunction's function scope
            console.log(
                "outerArg = " + outerArg + "\n" +
                "outerFuncVar = " + outerFuncVar + "\n" +
                "innerArg = " + innerArg + "\n" +
                "innerFuncVar = " + innerFuncVar + "\n" +
                "globalVar = " + globalVar);

            // end of innerFunction's scope

        })(5); // Pass 5 as parameter to our Closure

        // end of outerFunction's scope

    })(7); // Pass 7 as parameter to the Parent function

}
