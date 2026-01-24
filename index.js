function crid(tt, cr, y) {
    return (tt >= 10) ? cr : y;
}

function calcu() {
    function getNum(id) {
        var el = document.getElementById(id);
        return el ? (Number(el.value) || 0) : 0;
    }

    // Hydraulique
    var hydtd = getNum('hydtd');
    var hydctrl = getNum('hydctrl');
    var hydtt = (hydtd * 0.4) + (hydctrl * 0.6);
    var elHyd = document.getElementById('hydtt'); if (elHyd) elHyd.value = hydtt.toFixed(2);

    // Béton Armé
    var batd = getNum('batd');
    var bactrl = getNum('bactrl');
    var batt = (batd * 0.4) + (bactrl * 0.6);
    var elBat = document.getElementById('batt'); if (elBat) elBat.value = batt.toFixed(2);

    // RDM2
    var rdmtd = getNum('rdmtd');
    var rdmctrl = getNum('rdmctrl');
    var rdmtt = (rdmtd * 0.4) + (rdmctrl * 0.6);
    var elRdm = document.getElementById('rdmtt'); if (elRdm) elRdm.value = rdmtt.toFixed(2);

    // MDSol
    var mdstd = getNum('mdstd');
    var mdsctrl = getNum('mdsctrl');
    var mdstp = getNum('mdstp');
    var mdstt = (mdstd * 0.2) + (mdsctrl * 0.6) + (mdstp * 0.2);
    var elMds = document.getElementById('mdstt'); if (elMds) elMds.value = mdstt.toFixed(2);

    // Topo
    var topotp = getNum('topotp');
    var topoctrl = getNum('topoctrl');
    var topott = (topotp * 0.4) + (topoctrl * 0.6);
    var elTopo = document.getElementById('topott'); if (elTopo) elTopo.value = topott.toFixed(2);

    // Others
    var pgctt = getNum('pgctt');
    var dessintt = getNum('dessintt');
    var anglaistt = getNum('anglaistt');
    var geott = getNum('geott');

    // MDC
    var mdctp = getNum('mdctp');
    var mdctrl = getNum('mdctrl');
    var mdctt = (mdctp * 0.4) + (mdctrl * 0.6);
    var elMdc = document.getElementById('mdctt'); if (elMdc) elMdc.value = mdctt.toFixed(2);

    // Calculate final average using the weights from the original file
    var somme = (hydtt * 2) + (batt * 2) + (rdmtt * 2) + (mdstt * 3) + (topott * 2) + (pgctt * 1) + (dessintt * 3) + (anglaistt * 1) + (mdctt * 2) + (geott * 1);
    var moyenneFinale = somme / 19;

    var elToto = document.getElementById('toto'); if (elToto) elToto.innerHTML = moyenneFinale.toFixed(2);
}

// Run once on load to initialise any computed fields
if (document.readyState !== 'loading') { calcu(); } else { document.addEventListener('DOMContentLoaded', calcu); }