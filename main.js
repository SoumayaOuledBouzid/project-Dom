let p1price=document.getElementById('product1price')
let pqtn=document.getElementById('product-qtn')
let total=document.getElementById('total')
let espace1=document.getElementById('espace1')

let heart=document.getElementById('heart')

function heart1(){
        if(heart.style.color=='red'){
        heart.style.color='black'
    }
    else{
        heart.style.color='red'
    }
    }
    function inc(){
    pqtn.innerHTML=+pqtn.innerHTML+1
    p1price.innerHTML=+p1price.innerHTML+250;
    total.innerHTML=+total.innerHTML+250
    }

    function dec(){
    if(pqtn.innerHTML==0){
        pqtn.innerHTML=pqtn.innerHTML
        total.innerHTML=+total.innerHTML
        p1price.innerHTML=p1price.innerHTML
    }
    else{  pqtn.innerHTML=+pqtn.innerHTML-1
        total.innerHTML=+total.innerHTML-250
        p1price.innerHTML=+p1price.innerHTML-250}

    }
    function remove(){
    espace1.style.display='none'
    total.innerHTML=+total.innerHTML-p1price.innerHTML
    }

    let p1price2=document.getElementById('product1price2')
    let pqtn2=document.getElementById('product-qtn2')
    let espace2=document.getElementById('espace2')

    function heart2(){
    if(heart.style.color=='red'){
        heart.style.color='black'
    }
    else{
        heart.style.color='red'
    }
    }
    function inc2(){
    pqtn2.innerHTML=+pqtn2.innerHTML+1
    p1price2.innerHTML=+p1price2.innerHTML+250;
    total.innerHTML=+total.innerHTML+250
    }
    function dec2(){
    if(pqtn2.innerHTML==0){
        pqtn2.innerHTML=pqtn2.innerHTML
        total.innerHTML=+total.innerHTML
        p1price2.innerHTML=p1price2.innerHTML
    }
    else{  pqtn2.innerHTML=+pqtn2.innerHTML-1
        total.innerHTML=+total.innerHTML-250
        p1price2.innerHTML=+p1price2.innerHTML-250}
    }
    function remove2 (){
    espace2.style.display='none'
    total.innerHTML=total.innerHTML-p1price2.innerHTML
    }

    let p1price3=document.getElementById('product1price3')
    let pqtn3=document.getElementById('product-qtn3')
    let espace3=document.getElementById('espace3')

    function heart3(){
    if(heart.style.color=='red'){
        heart.style.color='black'
    }
    else{
        heart.style.color='red'
    }
    }
    function inc3(){
    pqtn3.innerHTML=+pqtn3.innerHTML+1
    p1price3.innerHTML=+p1price3.innerHTML+250;
    total.innerHTML=+total.innerHTML+250
    }

    function dec3(){
    if(pqtn3.innerHTML==0){
        pqtn3.innerHTML=pqtn3.innerHTML
        total.innerHTML=+total.innerHTML
        p1price3.innerHTML=p1price3.innerHTML
    }
    else{  pqtn3.innerHTML=+pqtn3.innerHTML-1
        total.innerHTML=+total.innerHTML-250
        p1price3.innerHTML=+p1price3.innerHTML-250}

    }
    function remove3(){
    espace3.style.display='none'
    total.innerHTML=total.innerHTML-p1price3.innerHTML
    }