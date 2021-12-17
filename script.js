var tag = document.getElementById("tag");
var result = document.getElementById("result");
var entregue = document.getElementById("entregue");

function show() {
    result.value = format();

    tag.value = "";
    entregue.value = "";

    copiar();
}
        
function concatenado() {
    var texto = ` (ENTREGUE A ${entregue.value})  `;

    return texto;
}

function copiar() {
    var newtext = document.getElementById('result');
    newtext.select();
    document.execCommand('copy');
}

function format() {
    var text2 = tag.value.replace(' (', ': ');
    text2 = text2.replace(') / TAG (',' ');
    text2 = text2.replace(') ', '.\n\n');
    text2 = text2.replace('/ Cliente (', '');
    text2 = text2.replace(')', '');
    text2 = text2.replace('.', concatenado().toUpperCase());

    return text2;
}
