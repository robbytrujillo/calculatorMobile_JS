//reqem = document.getElementById("mobileTotal").innerHTML;

//Robby Ilhamkusuma
//Mobile calculator

function sec(nomre) {
    reqem = document.getElementById("mobileTotal").innerHTML;
    reqem = reqem + nomre;
    document.getElementById("mobileTotal").innerHTML = reqem;
}

function menfi() {
    reqem = document.getElementById("mobileTotal").innerHTML;
    reqem = "-" + reqem;
    document.getElementById("mobileTotal").innerHTML = reqem;
}

function faiz() {
    reqem = document.getElementById("mobileTotal").innerHTML;
    reqem = reqem * 1 / 100;
    document.getElementById("mobileTotal").innerHTML = reqem;
}

function notqe() {
    reqem = document.getElementById("mobileTotal").innerHTML;
    reqem = reqem + ".";
    document.getElementById("mobileTotal").innerHTML = reqem;
}

function resetMobile() {
    reset = document.getElementById("mobileTotal").innerHTML;
    reset = "";
    document.getElementById("mobileTotal").innerHTML = reset;
}

function azaltReqemi() {
    reqem = document.getElementById("mobileTotal").innerHTML;
    document.getElementById("mobileTotal").innerHTML = reqem.substring(0, reqem.length -1);
}

function vurma() {
    reqem = document.getElementById("mobileTotal").innerHTML;
    reqem = reqem + "*";
    document.getElementById("mobileTotal").innerHTML = reqem;
}

function bolme() {
    reqem = document.getElementById("mobileTotal").innerHTML;
    reqem = reqem + "/";
    document.getElementById("mobileTotal").innerHTML = reqem;
}

function cixma() {
    reqem = document.getElementById("mobileTotal").innerHTML;
    reqem = reqem + "-";
    document.getElementById("mobileTotal").innerHTML = reqem;
}

function toplama() {
    reqem = document.getElementById("mobileTotal").innerHTML;
    reqem = reqem + "+";
    document.getElementById("mobileTotal").innerHTML = reqem;
}

function yoxlama() {
    if (isNaN(eval(neticemiz)) !==false) {
        alert("Sahflix var");
    }
}

function neticeMobile() {
    neticemiz = document.getElementById("mobileTotal").innerHTML;
    yoxlama();
    document.getElementById("mobileTotal").innerHTML = eval(neticemiz);
}