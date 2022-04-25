function go() {
    var word = document.getElementById('word').value;
    word = word.replace(' ', '+');
    var google = 'https://www.google.com/search?q='
    var url_def = google+word+'+ap+human+geography+definition';
    var url_ex = google+word+'+ap+human+geography+example';
    window.open(url_def, '_blank');
    window.open(url_ex,  '_blank');
    document.getElementById('word').value = '';
}

function makeGo(val) {
    document.getElementById('word').value = val;
    go();
}

document.onkeypress = function (e) {
    e = e || window.event;
    if (e.key === 'Enter') {
        document.getElementById('go').click();
      }
};
var xmlDoc;
xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET",'./document.xml',false);
if (xmlhttp.overrideMimeType){
    xmlhttp.overrideMimeType('text/xml');
}
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
var tagObj=xmlDoc.getElementsByTagName('w:t');
var wts = [];
var words = [];
for (var i = 0; i < tagObj.length; i++) {
    wts.push(tagObj.item(i).innerHTML);
}
const vocabWord = /<w:t xml:space="preserve">\d\.\s/;
{/* <w:t xml:space="preserve">1.  */};
var tx = '';
console.log(wts);
for (var wt in wts) {
    wts[wt] = wts[wt].replace(/\d+\.\s/, '\n<br/><button onclick="makeGo(\'$\'\')">$&</button>');
    wts[wt] = wts[wt].replace(/\d+\.\d+.*/, '\n<br/><strong>$&$\'</strong>');
    tx += wts[wt];
}
console.log(tx);
function doOn() {
    document.getElementById('tx').innerHTML = tx;
}