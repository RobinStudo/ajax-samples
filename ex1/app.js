// On va instancier une variable avec un objet XHR
let xhr = new XMLHttpRequest();

// On défini le paramètre
let address = encodeURIComponent( '9 rue de cambrai' );

// On défini l'URL de la requête
let url = 'https://api-adresse.data.gouv.fr/search/?q=' + address;

// On prépare la requête
xhr.open( 'GET', url );

// Gestion de la réponse
xhr.onload = function(){
    // Récupération du contenu de la réponse
    let response = JSON.parse( xhr.response );

    let list = document.getElementById( 'result' );
    for( let i in response.features ){
        let address = response.features[ i ];

        let li = document.createElement('li');
        li.innerText = address.properties.label;

        list.appendChild( li );
    }
}

// On envoi la requête
xhr.send();
