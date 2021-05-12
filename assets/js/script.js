$(function(){
    var player;

    $( function() {
    $(".draggable").draggable();
    $(".droppable").droppable({
        drop: function(event,ui){
        var playerChoice = $(ui.draggable).attr('id');
        console.log(playerChoice);}
        })
    });

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
    var name=$('#player').val();
    player = name;
    console.log(name);
    console.log(player);
    sound.play();     
    $('h1, .fight').addClass('orangered');
    $('#joueur').html('<h2>'+player+'</h2>');
    $('.punk, .daft').removeClass('d-none');
    })



})