!function(d,s,id){
    var js,
    fjs=d.getElementsByTagName(s)[0],
    p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js,fjs);
        }
    }
(document, 'script', 'twitter-wjs');

var rdm = Math.floor( Math.random() * 3);
var list = [
'onaka-suita-1.html',
'onaka-suita-2.html',
'onaka-suita-3.html'
]
var url = 'http://' + location.hostname + '/pages/' + list[rdm];
document.write('<a href="https://twitter.com/share" class="twitter-share-button" data-url="');
document.write(url);
document.write('">');
document.write('Tweet</a>');
console.log(url);