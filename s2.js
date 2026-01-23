
function crid(tt,cr,y) {
if (tt> 10) {
  return cr;
} else {
  return y;
}
  
}
function calcu() {
  var probtd = Number(document.getElementById('hydtd').value) ;

 

  var probctrl = Number(document.getElementById('hydctrl').value);

   var probtt = document.getElementById('hydtt').value =  Number((hydtd)*0.4+(hydctrl*0.6));
  var algotd = Number(document.getElementById('batd').value) ;

 

  var algoctrl = Number(document.getElementById('bactrl').value);
 
  var algott = document.getElementById('batt').value =  Number((batd)*0.4+(bactrl*0.6));

    var alg1ntd = Number(document.getElementById('rdmtd').value) ;

   

    var alg1ctrl = Number(document.getElementById('rdmctrl').value);

    var alg1tt = document.getElementById('rdmtt').value = Number((((rdmtd)*0.4)+(rdmctrl*0.6)));


 




    var ana1ntd = Number(document.getElementById('mdstd').value) ;

   

    var ana1ctrl = Number(document.getElementById('mdsctrl').value);
    var ana1ntd = Number(document.getElementById('mdstp').value) ;

    var ana1tt = document.getElementById('mdstt').value = Number((mdstd*0.2)+(mdsctrl*0.6)+(mdstp*0.2));


  var tictt = Number(document.getElementById('topotp').value);
    var ipotp = Number(document.getElementById('topoctrl').value) ;

    var ipott = document.getElementById('topott').value = Number((((topotp)*0.4)+(topoctrl*0.6)));

    var electd = Number(document.getElementById('pgctt').value) ;




    var electrl = Number(document.getElementById('dessintt').value);

  
var codtd = Number(document.getElementById('anglaistt').value) ;

  

    var mdctp = Number(document.getElementById('mdctp').value);
    var mdctrl = Number(document.getElementById('mdctrl').value);
    var mdctt = document.getElementById('mdctt').value = Number((((mdctp)*0.4)+(mdctrl*0.6)));

    var geott = Number(document.getElementById('geott').value);


  var trancr= document.getElementById('trancr').innerHTML = crid(tran,3,0);
var deco= document.getElementById("deco").innerHTML = ((codtt*2)+(algott*3))/5;

  var decocr= document.getElementById('decocr').innerHTML = crid(deco,9,0);




       var toto= document.getElementById('toto').innerHTML = Number((deco*5+metodo*3+tran*3+fund*5)/16);
  var ttcr= document.getElementById('ttcr').innerHTML = crid(toto,30,(trancr+decocr+metodocr+fundcr));



}

