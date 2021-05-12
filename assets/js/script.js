$(function(){
    var player;
    var choice;
    var ordi;
    var counterW=0;
    var counterL=0;
    var ordiLife = 6;
    var playerLife = 6;
    var sound;
    var victory;
    victory = new Audio();
    victory.src = "assets/sound/victoire.mp3", preload="auto";
    var loose;
    loose = new Audio();
    loose.src = "assets/sound/loose.mp3", preload="auto";
    var validation;
    validation = new Audio();
    validation.src = "assets/sound/validation.mp3", preload="auto";

    $(".draggable").draggable({revert:true});
    $(".droppable").droppable({
        drop: function(event,ui){
        choice = $(ui.draggable).attr('id');
        console.log(choice);}
        });
    
    $('button, a').mouseenter(function(){
        validation.play();
    })

    $('#cache').click(function(){
    var steeve = new Audio();
    steeve.src = "assets/sound/steeveaustin.mp3", preload="auto";
    steeve.play();
    console.log('click)');
    $('#regles').removeClass('d-none');
    });

    $('#start').click(function(){
    sound= new Audio();
    sound.src="assets/sound/game.mp3";
    sound.loop=true;
    var name=$('#player').val();
    player = name;
    console.log(name);
    console.log(player);
    sound.play();     
    $('h1').addClass('orangered');
    $('#joueur').html('<h2>'+player+'</h2>');
    $('.punk, .daft, #fight').removeClass('d-none');
    });

    $('#Pierre').mouseover(function(){
        $("#Pierre").attr("src", "assets/img/daftpoinghover.png");
    })
    $('#Pierre').mouseleave(function(){
        $("#Pierre").attr("src", "assets/img/daftpoing.png");
    })
    $('#Feuille').mouseover(function(){
        $("#Feuille").attr("src", "assets/img/daftfeuillehover.png");
    })
    $('#Feuille').mouseleave(function(){
        $("#Feuille").attr("src", "assets/img/daftfeuille.png");
    })
    $('#Ciseaux').mouseover(function(){
        $("#Ciseaux").attr("src", "assets/img/daftciseauxhover.png");
    })
    $('#Ciseaux').mouseleave(function(){
        $("#Ciseaux").attr("src", "assets/img/daftciseaux.png");
    })

    $('#fight').click(function(){
        var x;
        var y;
        x = $(this).offset().left;
        y = $(this).offset().top;
        
        var value = Math.floor(Math.random()*3);   
        if (value<1){
            ordi = "Pierre";
            $("#punkPDiv").animate({right: x});

        }
        else if(value<2){
            ordi = "Feuille";

        }
        else{
            ordi="Ciseaux";
        
        }
        console.log(ordi);
        console.log(`Player : ${choice} / CPU : ${ordi}`)
        if(ordi==choice){
                console.log("draw");
                $('#battle').html('<h2 class="Retro Fipps">DRAW</h2>');}
        else if (ordi=="Pierre"&&choice=="Feuille"){
                console.log('player win');
                counterW++;
                $('#battle').html('<h2 class="Retro Fipps">YOU WIN</h2>');
                $("#punk").toggle("pulsate");
                $("#punk").toggle("pulsate");
                console.log(counterW);
                ordiLife = 6 - counterW;
                console.log(`Player Life : ${playerLife} / CPU life : ${ordiLife}`)}
        else if (ordi=="Feuille"&&choice=="Ciseaux"){
                console.log('player win');
                $('#battle').html('<h2 class="Retro Fipps">YOU WIN</h2>');
                counterW++;
                $("#punk").toggle("pulsate");
                $("#punk").toggle("pulsate");
                console.log(counterW);
                ordiLife = 6 - counterW;
                console.log(`Player Life : ${playerLife} / CPU life : ${ordiLife}`)}
        else if (ordi=="Ciseaux"&&choice=="Pierre"){
                console.log('player win')
                counterW++;
                $('#battle').html('<h2 class="Retro Fipps">YOU WIN</h2>');
                $("#punk").toggle("pulsate");
                $("#punk").toggle("pulsate");
                console.log(counterW);
                ordiLife = 6 - counterW;
                console.log(`Player Life : ${playerLife} / CPU life : ${ordiLife}`)}
        else {
                console.log('player lose')
                counterL++;
                $('#battle').html('<h2 class="Retro Fipps">YOU LOSE</h2>');
                $("#daft").toggle("pulsate");
                $("#daft").toggle("pulsate");
                console.log(counterL);
                playerLife = 6 - counterL;
                console.log(`Player Life : ${playerLife} / CPU life : ${ordiLife}`)}
        if(ordiLife==5){
            $('.punk1').addClass('d-none')}
        else if(ordiLife==4){
            $('.punk1').addClass('d-none');
            $('.punk2').addClass('d-none')}
        else if(ordiLife==3){
            $('.punk1').addClass('d-none');
            $('.punk2').addClass('d-none');
            $('.punk3').addClass('d-none');
            $('.punk4, .punk5, .punk6').removeClass('bggreenyellow');
            $('.punk4, .punk5, .punk6').addClass('bgorange');}
        else if(ordiLife==2){
            $('.punk1').addClass('d-none');
            $('.punk2').addClass('d-none');
            $('.punk3').addClass('d-none');
            $('.punk4').addClass('d-none');
            $('.punk5, .punk6').removeClass('bgorange');
            $('.punk5, .punk6').addClass('bgred');}
        else if(ordiLife==1){
            $('.punk1').addClass('d-none');
            $('.punk2').addClass('d-none');
            $('.punk3').addClass('d-none');
            $('.punk4').addClass('d-none');
            $('.punk5').addClass('d-none');
            $('.punk6').removeClass('bgred');
            $('.punk6').addClass('bgdarkred');}
        else if(ordiLife==0){
            $('.punk1').addClass('d-none');
            $('.punk2').addClass('d-none');
            $('.punk3').addClass('d-none');
            $('.punk4').addClass('d-none');
            $('.punk5').addClass('d-none');
            $('.punk6').addClass('d-none');
            var res = (counterW/(counterW+counterL))*100;
            var result = res.toFixed(2);
            sound.pause();
            victory.play();
            alert('YOU WIN avec '+result+ '% de victoires');
            }
        else{}
        if(playerLife==5){
            $('.daft1').addClass('d-none')}
        else if(playerLife==4){
            $('.daft1').addClass('d-none');
            $('.daft2').addClass('d-none')}
        else if(playerLife==3){
            $('.daft1').addClass('d-none');
            $('.daft2').addClass('d-none');
            $('.daft3').addClass('d-none');
            $('.daft4, .daft5, .daft6').removeClass('bggreenyellow');
            $('.daft4, .daft5, .daft6').addClass('bgorange');}
        else if(playerLife==2){
            $('.daft1').addClass('d-none');
            $('.daft2').addClass('d-none');
            $('.daft3').addClass('d-none');
            $('.daft4').addClass('d-none');
            $('.daft5, .daft6').removeClass('bgorange');
            $('.daft5, .daft6').addClass('bgred');}
        else if(playerLife==1){
            $('.daft1').addClass('d-none');
            $('.daft2').addClass('d-none');
            $('.daft3').addClass('d-none');
            $('.daft4').addClass('d-none');
            $('.daft5').addClass('d-none');
            $('.daft6').removeClass('bgred');
            $('.daft6').addClass('bgdarkred');}
        else if(playerLife==0){
            $('.daft1').addClass('d-none');
            $('.daft2').addClass('d-none');
            $('.daft3').addClass('d-none');
            $('.daft4').addClass('d-none');
            $('.daft5').addClass('d-none');
            $('.daft6').addClass('d-none');
            sound.pause();
            loose.play();
            alert('YOU LOSE');
            }
        else{}
    })



})