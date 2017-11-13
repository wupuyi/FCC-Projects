//颜色数组
var colors = [
    '#ef2e33',
    '#779ade',
    '#dcb0d1',
    '#1a9789',
    '#644591',
    '#b160a2',
    '#d5ee17',
    '#d0273a',
    '#f8ab2b',
    '#ff634d',
    '#d52e5c',
    '#584245',
    '#4e428a',
    '#b0a3cf',
    '#333b7a',
    '#7ec4dd',
    '#0089b5',
    '#918b8b'
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
        // url: 'https://github.com/wupuyi/FCC-Projects/tree/master/02-Random-Quote-Machine/shiju.json',
        url: 'shiju.json',
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
