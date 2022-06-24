"use strict"

const d = document;
const $imgA = d.querySelectorAll(".blrl");

function random(){
    return Math.floor(Math.random() * $imgA.length);

}

function imgPst(){
    $imgA[random()].classList.add("imPs");

    setInterval(() => {
        let n = random();

        for(let i = 0; i < $imgA.length; i++){
            if($imgA[i].classList.contains("imPs")){
                $imgA[i].classList.remove("imPs");
            }
        }

        if(!($imgA[n].classList.contains("imPs"))){
            $imgA[n].classList.add("imPs");
        }

    }, 5000)

}

d.addEventListener("DOMContentLoaded", () => {
    imgPst();

})





