function heart(){
    const heart=document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);
    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=Math.random()*2+3;
    heart.innerText="💝";
    setTimeout(()=>{
        heart.remove();
    },3000)
}
setInterval(heart,200); 