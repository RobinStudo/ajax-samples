let form = document.querySelector('.mailer');
let timer;

form.addEventListener( 'keyup', function(){
    clearTimeout( timer );
    timer = setTimeout( save, 1000 );
});

function save(){
    let xhr = new XMLHttpRequest();
    let data = new FormData( form );

    xhr.open( 'POST', 'backup.php' );
    xhr.onload = onSuccess;
    xhr.send( data );
}

function onSuccess(){
    console.log( 'success' );
}
