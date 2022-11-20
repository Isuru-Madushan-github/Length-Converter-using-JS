const mm=document.getElementById('mm');
const cm=document.getElementById('cm');
const m=document.getElementById('m');
const km=document.getElementById('km');


function mmConvert(value){
    cm.value=value/10;
    m.value=value/1000;
    km.value=value/1000000;
}

function cmConvert(value){
    mm.value=value*10;
    m.value=value/100;
    km.value=value/100000;
}

function mConvert(value){
    mm.value=value*1000;
    cm.value=value*100;
    km.value=value/1000;
}

function kmConvert(value){
    mm.value=value*1000000;
    cm.value=value*100000;
    m.value=value*1000;
}