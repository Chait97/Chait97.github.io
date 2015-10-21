function giveHint() {
    document.getElementById("hint").innerHTML="1: In all likelihood, you have used X    2: Specifically, these vehicles were tractors";
}
function check() {
    var ans = "";
    ans=document.getElementById("answer").value;
    if(ans=="Farmville, Zynga"||ans=="FarmVille, Zynga"){
        document.getElementById("result").innerHTML="That's it. Good job!";
    }
    else{
        document.getElementById("result").innerHTML="Nope, try again...";
    }
}
