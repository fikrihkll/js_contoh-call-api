

window.addEventListener('load', function () {
    register();
    getRecipe();
});

// CONTOH GET
async function getRecipe (){

    let res = undefined;
    try {
        res = await fetch('http://api.fikrihkl.xyz/api/get-recipe', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then(data => data.json());
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}

// CONTOH POST
async function register (){

    var details = {
        'email': 'ridho@gmail.com',
        'pass': '123123',
        'name': 'Ridho',
        'address': 'idlewood st.2',
        'phone': '08123'
    };

    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");


    let res = undefined;
    try {
        res = await fetch('http://api.fikrihkl.xyz/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        }).then(data => data.json());
        console.log(res);
    } catch (e) {

    }
}