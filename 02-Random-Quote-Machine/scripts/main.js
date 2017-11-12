//颜色数组
var colors = [
    '#FFAE49',
    '#FF9E28',
    '#E8406D',
    '#5828FF',
    '#25D8E8',
    '#78FF5E',
    '#FFCA1C',
    '#E85D35',
    '#CE1CFF',
    '#1A68E8',
    '#52FF9F'
];

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=' +
            '0, resizable=0');
}

function getQuote() {
    $.ajax({
        headers: {
            Accept : "application/json",
        },
        type: 'get',
        url: '../shiju.json',
        success: function(data) {
            
        }
    })
}


