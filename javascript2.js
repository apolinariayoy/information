function f(){
    let a = document.getElementById("p").value = "по теореме Виета"
    let b = document.getElementById("p1").value = "x<sub>1</sub> &bull; x<sub>2</sub> = 4"
    let c = document.getElementById("p2").value = "x<sub>1</sub> + x<sub>2</sub> = 5"
    let d = document.getElementById("p3").value = "следовательно x<sub>1</sub> = 1,x<sub>2</sub> = 4"
    document.getElementById("p").innerHTML =a;
    document.getElementById("p1").innerHTML =b;
    document.getElementById("p2").innerHTML =c;
    document.getElementById("p3").innerHTML =d;
}