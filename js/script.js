const categories = document.querySelectorAll('.category');
const play = document.getElementById('play');
const error = document.getElementById('error');


let playBtnHandle = (e = null)=>{

    let disabled ;
    let _this;
   // console.dir(e.target);
    if(e != null){
        _this = e.target;
        disabled = !_this.href.trim();
        play.disabled = disabled;
  
        if(disabled){
            play.href = "#" ;
            play.setAttribute("disabled",disabled); 
            play.classList.add('hidden');
        }else{
            play.href = "game.html";
            play.removeAttribute("disabled");
            localStorage.setItem('url',_this.href);
            play.classList.remove('hidden');
        }
        
    } else{
        play.disabled = true;
        play.href = "#";
        play.setAttribute("disabled",disabled); 
    }
    
}



for (let index = 0; index < categories.length; index++) {

    

    const category = categories[index];
    
    category.addEventListener('click',function (e) {
        e.preventDefault();
        for (let i = 0; i < categories.length; i++) {
            categories[i].removeAttribute('style');
        }
        localStorage.setItem('title',e.target.text);
        this.style.background = "#56a5eb";
        this.style.color = "#ffffff";

        playBtnHandle(e);
    });
}