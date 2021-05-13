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
    var ko;
    ko = new Audio();
    ko.src = "assets/sound/ko.mp3", preload="auto";
    var ouch;
    ouch = new Audio();
    ouch.src = "assets/sound/ouch.mp3", preload="auto";
    var blade;
    blade = new Audio();
    blade.src = "assets/sound/blade.mp3", preload="auto";
    var paper;
    paper = new Audio();
    paper.src = "assets/sound/paper.mp3", preload="auto";
    var punch;
    punch = new Audio();
    punch.src = "assets/sound/punch.mp3", preload="auto";
    var impact;
    impact = new Audio();
    impact.src = "assets/sound/impact.mp3", preload="auto";

    $(".draggable").draggable({
        revert: function () {
            $(this).delay(1500);
            return true
        },
        revertDuration: 700
    });
    $(".droppable").droppable({
        drop: function(event,ui){
        choice = $(ui.draggable).attr('id');
        console.log(choice);
        $('#joueurChoice').html('<h2>'+choice+'</h2>');}
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
    $('.punk, .daft, #fight, .cache').removeClass('d-none');
    $(".mask").addClass('d-none');
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
        $('#punkP').removeClass('punkP');
        $('#punkC').removeClass('punkC');
        $('#punkF').removeClass('punkF');
        /*var x;
        var y;
        x = $(this).offset().left;
        y = $(this).offset().top;*/
        var value = Math.floor(Math.random()*3);   
        if (value<1){
            ordi = "Pierre";
            /*$("#punkPDiv").animate({right: x});*/
            $("#punkP").attr("src", "assets/img/punkpoinghover.png");
            $("#punkF").attr("src", "assets/img/punkfeuille.png");
            $("#punkC").attr("src", "assets/img/punkciseaux.png");
            $('#punkChoice').html('<h2>Pierre</h2>');
            $('#punkP').addClass('punkP');
        }
        else if(value<2){
            ordi = "Feuille";
            $("#punkF").attr("src", "assets/img/punkfeuillehover.png");
            $("#punkP").attr("src", "assets/img/punkpoing.png");
            $("#punkC").attr("src", "assets/img/punkciseaux.png");
            $('#punkChoice').html('<h2>Feuille</h2>');
            $('#punkF').addClass('punkF');
        }
        else{
            ordi="Ciseaux";
            $("#punkC").attr("src", "assets/img/punkciseauxhover.png");
            $("#punkP").attr("src", "assets/img/punkpoing.png");
            $("#punkF").attr("src", "assets/img/punkfeuille.png");
            $('#punkChoice').html('<h2>Ciseaux</h2>');
            $('#punkC').addClass('punkC');
        }
        console.log(ordi);
        console.log(`Player : ${choice} / CPU : ${ordi}`)
        if(ordi==choice){
                console.log("draw");
                ouch.play();
                $('#battle').html('<h2 class="Retro Fipps">DRAW</h2>');}
        else if (ordi=="Pierre"&&choice=="Feuille"){
                console.log('player win');
                counterW++;
                paper.play();
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
                blade.play();
                $("#punk").toggle("pulsate");
                $("#punk").toggle("pulsate");
                console.log(counterW);
                ordiLife = 6 - counterW;
                console.log(`Player Life : ${playerLife} / CPU life : ${ordiLife}`)}
        else if (ordi=="Ciseaux"&&choice=="Pierre"){
                console.log('player win')
                counterW++;
                punch.play();
                $('#battle').html('<h2 class="Retro Fipps">YOU WIN</h2>');
                $("#punk").toggle("pulsate");
                $("#punk").toggle("pulsate");
                console.log(counterW);
                ordiLife = 6 - counterW;
                console.log(`Player Life : ${playerLife} / CPU life : ${ordiLife}`)}
        else {
                console.log('player lose')
                counterL++;
                impact.play();
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
            ko.play();
            victory.play();
            if(result<100){
            alert('YOU WIN avec '+result+ '% de victoires')}
            else {
                $("#BGgame").removeClass('BGgame');
                $("#BGgame").addClass('BGgamebis');
                var kamehameha;
                kamehameha = new Audio();
                kamehameha.src = "assets/sound/kamehameha.mp3", preload="auto";
                kamehameha.play();
                alert('YOU WIN avec 100% de victoires!')
            }
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