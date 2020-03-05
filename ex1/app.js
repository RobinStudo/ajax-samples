let form = document.getElementById('search');
form.addEventListener( 'submit', search );

function search( e ){
    e.preventDefault();

    let xhr = new XMLHttpRequest();

    let value = form.querySelector('input[name="query"]').value;
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
