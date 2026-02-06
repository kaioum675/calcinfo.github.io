// index.js — مصحح ومُنقح

function crid(tt, cr, y) {
    // إذا كانت العلامة >= 10 رجع قيمة credit وإلا رجع y
    return (tt >= 10) ? cr : y;
}

function calcu() {
    // 1. Hydraulique
    var hydtd = Number(document.getElementById('hydtd').value) || 0;
    var hydctrl = Number(document.getElementById('hydctrl').value) || 0;
    var hydtt = (hydtd * 0.4) + (hydctrl * 0.6);
    document.getElementById('hydtt').value = hydtt.toFixed(2);

    // 2. Béton Armé
    var batd = Number(document.getElementById('batd').value) || 0;
    var bactrl = Number(document.getElementById('bactrl').value) || 0;
    var batt = (batd * 0.4) + (bactrl * 0.6);
    document.getElementById('batt').value = batt.toFixed(2);

    // 3. RDM
    var rdmtd = Number(document.getElementById('rdmtd').value) || 0;
    var rdmctrl = Number(document.getElementById('rdmctrl').value) || 0;
    var rdmtt = (rdmtd * 0.4) + (rdmctrl * 0.6);
    document.getElementById('rdmtt').value = rdmtt.toFixed(2);

    // 4. MDS (20% TD, 60% Controle, 20% TP)
    var mdstd = Number(document.getElementById('mdstd').value) || 0;
    var mdsctrl = Number(document.getElementById('mdsctrl').value) || 0;
    var mdstp = Number(document.getElementById('mdstp').value) || 0;
    var mdstt = (mdstd * 0.2) + (mdsctrl * 0.6) + (mdstp * 0.2);
    document.getElementById('mdstt').value = mdstt.toFixed(2);

    // 5. Topographie
    var topotp = Number(document.getElementById('topotp').value) || 0;
    var topoctrl = Number(document.getElementById('topoctrl').value) || 0;
    var topott = (topotp * 0.4) + (topoctrl * 0.6);
    document.getElementById('topott').value = topott.toFixed(2);

    // 6. Transer thermique
    var tttd = Number(document.getElementById('tttd').value) || 0;
    var ttctrl = Number(document.getElementById('ttctrl').value) || 0;
    var anglaistt = (tttd * 0.4) + (ttctrl * 0.6);
    document.getElementById('anglaistt').value = anglaistt.toFixed(2);
    
    // 6. مواد أخرى بدون حساب مركب (ادخال مباشر)
    var pgctt = Number(document.getElementById('pgctt').value) || 0;
    var dessintt = Number(document.getElementById('dessintt').value) || 0;
    var geott = Number(document.getElementById('geott').value) || 0;

    // 7. MDC (مثال: 40% TP , 60% Controle حسب ما في الصفحة)
    var mdctp = Number(document.getElementById('mdctp').value) || 0;
    var mdctrl = Number(document.getElementById('mdctrl').value) || 0;
    var mdctt = (mdctp * 0.4) + (mdctrl * 0.6);
    document.getElementById('mdctt').value = mdctt.toFixed(2);

    // 8. حساب المعدل النهائي — الأوزان كما في ملفك الأصلي، المقسوم على 19 ككل
    var somme = (hydtt * 2) + (batt * 2) + (rdmtt * 2) + (mdstt * 3) + (topott * 2) + (pgctt * 1) + (dessintt * 3) + (anglaistt * 1) + (mdctt * 2) + (geott * 1);
    var moyenneFinale = somme / 19;

    document.getElementById('toto').innerHTML = moyenneFinale.toFixed(2);
}
