$(function(){

/* Partie Momo */

/* Partie SylV */


$('#cache').click(function(){
    var steeve = new Audio();
    steeve.src = "assets/sound/steeveaustin.mp3";
    steeve.play();
    console.log('click)');
    $('#regles').removeClass('d-none');
})

$('#start').click(function(){
var sound= new Audio();
sound.src="assets/sound/game.mp3";
sound.loop=true;
var name=$('#player');
console.log(name);
    sound.play();     
    $('h1, .fight').addClass('orangered');
    $('#joueur').html('<h2>'+name+'</h2>');
    $('.punk, .daft').removeClass('d-none');
})



})