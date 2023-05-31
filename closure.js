
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
