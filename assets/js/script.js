function pintar(){
    ele1.style.backgroundColor = 'yellow'
}
const ele1 = document.getElementById("ele1");
ele1.addEventListener("click", pintar);

//------------------------------------------------------------//

function pintar_2( color = 'green'){
    const ele2 = document.getElementById("ele2");
    ele2.style.backgroundColor = color ;

    ele2.addEventListener('click' , function pintar_2() {
        ele2.style.backgroundColor = 'yellow' ;
    })
};
pintar_2();


