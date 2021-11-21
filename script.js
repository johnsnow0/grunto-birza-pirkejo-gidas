function daryk(reiksme) {        
    var kat1 = document.getElementById("statau1")
    var kat11 = document.getElementById("statau11")
    var kat21 = document.getElementById("statau21")
    var kat31 = document.getElementById("statau31")
    var kat11s1 = document.getElementById("s1")
    var kat11s2 = document.getElementById("s2")
    var kat11s3 = document.getElementById("s3")
    var kat11s4 = document.getElementById("s4")
    var kat11s5 = document.getElementById("s5")
    var kat11s6 = document.getElementById("s6")
    var kat11s7 = document.getElementById("s7")
    var kat11s8 = document.getElementById("s8")

    if (reiksme == 0) {
        kat1.style.display = "flex"
        kat11.style.display = "none"
        kat21.style.display = "none"
        kat31.style.display = "none"
        kat11s1.style.display = "none"
        kat11s2.style.display = "none"
    }
    if (reiksme == 1) {
        kat1.style.display = "none"
        kat11.style.display = "flex"
        kat21.style.display = "none"
        kat31.style.display = "none"
    }
    if (reiksme == 2){
        kat1.style.display = "none"
        kat11.style.display = "none"
        kat21.style.display = "flex"            
        kat31.style.display = "none"
    }
    if (reiksme == 3){
        kat1.style.display = "none"
        kat11.style.display = "none"
        kat21.style.display = "none" 
        kat31.style.display = "flex"
    }
    if (reiksme == 11){
        kat1.style.display = "none"
        kat11.style.display = "none"
        kat21.style.display = "none" 
        kat31.style.display = "none"
        kat11s1.style.display = "flex"
    }
    if (reiksme == 12){
        kat1.style.display = "none"
        kat11.style.display = "none"
        kat21.style.display = "none" 
        kat31.style.display = "none"
        kat11s2.style.display = "flex"
    }
    if (reiksme == 13){
        kat1.style.display = "none"
        kat11.style.display = "none"
        kat21.style.display = "none" 
        kat31.style.display = "none"
        kat11s1.style.display = "flex"
    }
    if (reiksme == 14){
        kat1.style.display = "none"
        kat11.style.display = "none"
        kat21.style.display = "none" 
        kat31.style.display = "none"
        kat11s1.style.display = "flex"
    }

}
