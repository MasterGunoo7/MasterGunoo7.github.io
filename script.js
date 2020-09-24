var lang;

function getLang() {
    (localStorage.getItem('cLang') == null) ? setLang('en') : false;

    $.ajax({
        dataType: 'json',
        async: false,
        url: 'lang/' + localStorage.getItem('cLang') + '.json',
        success: function(data) { 
            lang = data;
            $('#text').text(lang.WELCOME);
        }
    });
}

function setLang(lang) {
    localStorage.setItem('cLang', lang);
    getLang();
}

$(document).ready(function(){
    getLang();
    $('#text').text(lang.WELCOME);
});