let form = document.getElementById('search');
let input = form.querySelector('input[name="query"]');
var timer;
input.addEventListener( 'keyup', function(){
    clearTimeout( timer );
    timer = setTimeout( search, 500 );
});

function search(){
    let xhr = new XMLHttpRequest();

    let value = input.value;
    if( value.length < 3 ){
        return;
    }

    let address = encodeURIComponent( value );
    let url = 'https://api-adresse.data.gouv.fr/search/?q=' + address + '&limit=10';
    xhr.open( 'GET', url );

    xhr.onload = function(){
        let response = JSON.parse( xhr.response );
        proccess( response );
    };

    xhr.send();
}

function proccess( response ){
    let list = document.getElementById( 'result' );
    list.innerHTML = '';

    for( let i in response.features ){
        let address = response.features[ i ];

        let li = document.createElement('li');
        li.innerText = address.properties.label;

        list.appendChild( li );
    }
}
