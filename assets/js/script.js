$(function(){
    var player;
    var choice;
    var ordi;
    var counterW=0;
    var counterL=0;
    var ordiLife = 6;
    var playerLife = 6;

    $(".draggable").draggable({revert:true,});
    $(".droppable").droppable({
        drop: function(event,ui){
        choice = $(ui.draggable).attr('id');
        console.log(choice);}
        });

    $('#cache').click(function(){
    var steeve = new Audio();
    steeve.src = "assets/sound/steeveaustin.mp3";
    steeve.play();
    console.log('click)');
    $('#regles').removeClass('d-none');
    });

    $('#start').click(function(){
    var sound= new Audio();
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

    $('#Pierre').mousedown(function(){
        $("#Pierre").attr("src", "assets/img/daftpoinghover.png");
    })
    $('#Pierre').mouseup(function(){
        $("#Pierre").attr("src", "assets/img/daftpoing.png");
    })
    $('#Feuille').mousedown(function(){
        $("#Feuille").attr("src", "assets/img/daftfeuillehover.png");
    })
    $('#Feuille').mouseup(function(){
        $("#Feuille").attr("src", "assets/img/daftfeuille.png");
    })
    $('#Ciseaux').mousedown(function(){
        $("#Ciseaux").attr("src", "assets/img/daftciseauxhover.png");
    })
    $('#Ciseaux').mouseup(function(){
        $("#Ciseaux").attr("src", "assets/img/daftciseaux.png");
    })

    $('#fight').click(function(){
        var value = Math.floor(Math.random()*3);   
        if (value<1){
            ordi = "Pierre";}
        else if(value<2){
            ordi = "Feuille";}
        else{
            ordi="Ciseaux";}
        console.log(ordi);
        console.log(`Player : ${choice} / CPU : ${ordi}`)
        if(ordi==choice){
                console.log("draw")}
        else if (ordi=="Pierre"&&choice=="Feuille"){
                console.log('player win');
                counterW++;
                console.log(counterW);
                ordiLife = 6 - counterW;
                console.log(`Player Life : ${playerLife} / CPU life : ${ordiLife}`)}
        else if (ordi=="Feuille"&&choice=="Ciseaux"){
                console.log('player win');
                counterW++;
                console.log(counterW);
                ordiLife = 6 - counterW;
                console.log(`Player Life : ${playerLife} / CPU life : ${ordiLife}`)}
        else if (ordi=="Ciseaux"&&choice=="Pierre"){
                console.log('player win')
                counterW++;
                console.log(counterW);
                ordiLife = 6 - counterW;
                console.log(`Player Life : ${playerLife} / CPU life : ${ordiLife}`)}
        else {
                console.log('player lose')
                counterL++;
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
            var x = (counterW/(counterW+counterL))*100;
            var result = x.toFixed(2);
            alert('YOU WIN avec '+result+ '% de victoires')}
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
            alert('YOU LOSE')}
        else{}
    })



})