
function crid(tt,cr,y) {
if (tt> 10) {
  return cr;
} else {
  return y;
}
  
}
function calcu() {
    var hydtd = Number(document.getElementById('hydtd').value) ;
    var hydctrl = Number(document.getElementById('hydctrl').value);
    var hydtt = document.getElementById('hydtt').value =  Number((hydtd)*0.4+(hydctrl*0.6));
  
    var batd = Number(document.getElementById('batd').value) ;
    var bactrl = Number(document.getElementById('bactrl').value);
    var batt = document.getElementById('batt').value =  Number((batd)*0.4+(bactrl*0.6));

    var rdmtd = Number(document.getElementById('rdmtd').value) ;
    var rdmctrl = Number(document.getElementById('rdmctrl').value);
    var rdmtt = document.getElementById('rdmtt').value = Number((((rdmtd)*0.4)+(rdmctrl*0.6)));


    var mdstd = Number(document.getElementById('mdstd').value) ;
    var mdsctrl = Number(document.getElementById('mdsctrl').value);
    var msdtp = Number(document.getElementById('mdstp').value) ;
    var mdstt = document.getElementById('mdstt').value = Number((mdstd*0.2)+(mdsctrl*0.6)+(mdstp*0.2));


    var topotp = Number(document.getElementById('topotp').value);
    var topoctrl = Number(document.getElementById('topoctrl').value) ;
    var topott = document.getElementById('topott').value = Number((((topotp)*0.4)+(topoctrl*0.6)));

    var pgctt = Number(document.getElementById('pgctt').value) ;
  
    var dessintt = Number(document.getElementById('dessintt').value);

    var anglaistt = Number(document.getElementById('anglaistt').value) ;

  

    var mdctp = Number(document.getElementById('mdctp').value);
    var mdctrl = Number(document.getElementById('mdctrl').value);
    var mdctt = document.getElementById('mdctt').value = Number((((mdctp)*0.4)+(mdctrl*0.6)));

    var geott = Number(document.getElementById('geott').value);


    var toto= document.getElementById('toto').innerHTML = Number((hydtt*2+batt*2+rdm*2+mdstt*3+topott*2+pgctt+dessintt*3+anglaistt+mdc*2+geott)/19);



}

