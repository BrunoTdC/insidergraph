
const imgs = document.getElementById('container_interno');
const img = document.querySelectorAll("#container_interno img")

let idx = 0;

function carrosel(){
    idx++
    if(idx > img.length - 1){
        idx = 0;
    }
imgs.style.transform = `translateX(${-idx * 250}px)`
}

setInterval(carrosel, 1000);
