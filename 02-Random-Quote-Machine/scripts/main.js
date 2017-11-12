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

//随机生成数字
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuote() {
    $.ajax({
        headers: {
            Accept: "application/json"
        },
        type: 'get',
        url: '../shiju.json',
        success: function (data) {
            var myData = data.juzi;
            var i = randomNum(0, (myData.length - 1));
            $('.quote-content').animate({
                opacity: '0'
            }, 500, function () {
                $(this).animate({
                    opacity: '1'
                }, 500);
                $('#text').text(myData[i].content);
            });
            $('.quote-author').animate({
                opacity: 0
            }, 500, function () {
                $(this).animate({
                    opacity: 1
                }, 500);
                $('#author').html(myData[i].author);
            });
            var color = randomNum(0, (colors.length -1));
            $('body').animate({
                backgroundColor: colors[color],
                color: colors[color]
            }, 1000);
            $('.button').animate({
                backgroundColor: colors[color]
            }, 1000);
        }
    });
}
//加载时运行
$(function () {
    getQuote();
    $('#new-quote').on('click', getQuote);
});
