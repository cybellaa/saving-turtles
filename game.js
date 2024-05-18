AFRAME.registerComponent('game',{init:function(){
noturtles = 5
this.el.addEventListener('collide',function(e){
    noturtles -= 1;
    e.detail.target.el.remove();
    noofturtlestxt = document.getElementById("noofturtles");
    noofturtlestxt.setAttribute('text',{value:string(noturtles)});
    if (noturtles == 0){
        gameOverText = document.getElementById('gameOverText');
        gameOverText.setAttribute('text',{value:'You WON!'})
    }
});
},});