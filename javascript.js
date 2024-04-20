function f(){
    let a = document.getElementById("p").value = "x<sup>2</sup> - 8 = 0"
    let b = document.getElementById("p1").value = "x<sup>2</sup> = 8"
    let c = document.getElementById("p2").value = "x = -&radic;8 или x = &radic;8"
    document.getElementById("p").innerHTML =a;
    document.getElementById("p1").innerHTML =b;
    document.getElementById("p1").innerHTML =c;
}