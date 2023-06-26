let obj = {
    name: "vipul"
}

// Reference is copied
// {
//     let newObj = obj;
//     newObj.name = "Kandal"
//     console.log(obj)
// }

// Shallow copy
{
    // let newObj = Object.assign({}, obj);

    // another way for shallow copy
    let newObj = { ...obj }

    newObj.name = "Kandal"
    console.log(obj)

    /*
    Shallow copy works only for one level 
    */
}

//-------------------------------------------

// Deep copy

{
    let obj = {
        name: "Vipul",
        address: {
            city: "CHD",
            state: "Punjab"
        }
    }

    let deepObj = JSON.parse(JSON.stringify(obj))
    deepObj.address.city = "Zirakpur"

    console.log(obj)
    console.log(deepObj)

    /*
    Limitation:
    It cannot copy Date and function in an Object.
    For that we need to install the npm package lodash. 
    */
}

//--------------------------------
// Shallow copy with loadash
{
    let obj = {
        name: "Vipul",
        address: {
            city: "CHD",
            state: "Punjab"
        },
        getData: function () {
            return "Hello World"
        }
    }

    let deepObj = _.cloneDeep(obj)

    console.log(obj)
    // Function is also copied
    console.log(deepObj)
}

