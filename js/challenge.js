const timer = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const resume = document.querySelector('#resume')
let start = timer.innerHTML
let numberOfLikes = 1;
const commentForm = document.querySelector("#comment-form");
const element = document.querySelector('.likes');
let lineNumber = 0;
let idValue = 'Hell';
let updatedNumberOfLikes = 1

function commentTheLike() {
    const tag = document.createElement("li");
    const text = document.createTextNode(`${start} has been liked ${numberOfLikes} times!`);
    tag.appendChild(text);
    element.appendChild(tag);
    const o = 'o';
    idValue = idValue + o;
    tag.setAttribute('id', `${idValue}`);
   return idValue
}


    heart.addEventListener('click', function() {
        if (document.querySelector(`#${idValue}`) == null) {
            console.log('starting')
            commentTheLike();
            lineNumber = lineNumber ++
            updatedNumberOfLikes = 1
            return lineNumber
        }
        if (document.querySelector(`#${idValue}`).innerHTML.startsWith(`${start} has`)) {
            updatedNumberOfLikes ++
            const texting =  `${start} has been liked ${updatedNumberOfLikes} times!`;
            document.querySelector(`#${idValue}`).innerHTML = texting;
        }
        else {
            console.log('starting')
            commentTheLike();
            lineNumber = lineNumber ++
            updatedNumberOfLikes = 1
            return lineNumber
        }
    })


commentForm.addEventListener('submit', function(a){
    a.preventDefault();
    const b = document.querySelector('.comments')
    const c = document.createElement('p');
    const d = this.children[0]
    const e = d.value
    d.value = ''
    c.innerText = e
    b.append(c);
})

function plusPlusses(){
    plus.addEventListener('click', function(){
        start ++;
        timer.innerHTML = start;
    })
}
plusPlusses();

function minusMinuses() {
    minus.addEventListener('click', function(){
        start --;
        timer.innerHTML = start;
    })
}
minusMinuses();


let tickingOfTime = setInterval(timeTicker, 1000)
function timeTicker(){
    start ++;
    timer.innerHTML = start;
}
function stopTheTimer(){
    clearInterval(tickingOfTime)
}

pause.addEventListener('click', function(){
    if (pause.innerText === 'pause'){
        stopTheTimer();
        pause.innerHTML = 'resume';
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
    }
    else {
        pause.innerText = 'pause';
        tickingOfTime = setInterval(timeTicker, 1000)
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;

    }
});


// heart.addEventListener("click",function(){
//     var a=document.getElementById("counter"),
//     b=parseInt(a.innerText),
//     c=document.querySelector(".likes"),
//     d=void 0;
//     if([].concat(_toConsumableArray(c.children)).map(function(a){return parseInt(a.dataset.num)}).includes(b))
//     {d=document.querySelector('[data-num="'+b+'"]');
//     var e=parseInt(d.children[0].innerText);
//     d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"}
//     else(d=document.createElement("li")).setAttribute("data-num",b),
//     d.innerHTML=b+" has been liked <span>1</span> time",
//     c.appendChild(d)})


// "use strict";
// function _toConsumableArray(a){
//     if(Array.isArray(a)){
//         for(var b=0,c=Array(a.length);
//         b<a.length;
//         b++)
//         c[b]=a[b];
//         return c
//     }
//     return Array.from(a)}
 