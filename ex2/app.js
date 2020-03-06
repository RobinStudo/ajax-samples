let form = document.querySelector('.mailer');
let timer;

let draft = localStorage.getItem( 'draft_identifier' );
if( draft ){
    let xhr = new XMLHttpRequest();
    xhr.open( 'GET', 'load.php?draft=' + draft );
    xhr.onload = function(){
        let response = JSON.parse( xhr.response );

        document.querySelector('input[name="email"]').value = response.email;
        document.querySelector('input[name="subject"]').value = response.subject;
        document.querySelector('textarea[name="message"]').value = response.message;
        document.querySelector('input[name="draft_identifier"]').value = draft;
    };
    xhr.send();
}

form.addEventListener( 'keyup', function(){
    clearTimeout( timer );
    timer = setTimeout( save, 1000 );
});

function save(){
    let xhr = new XMLHttpRequest();
    let data = new FormData( form );

    xhr.open( 'POST', 'backup.php' );
    xhr.onload = function(){
        let response = JSON.parse( xhr.response );
        onSuccess( response );
    };
    xhr.send( data );
}

function onSuccess( data ){
    let draft_identifier = data.draft_identifier;
    document.querySelector('input[name="draft_identifier"]').value = draft_identifier;
    localStorage.setItem( 'draft_identifier', draft_identifier );
}
