/**
 * $(function(){})是
 * $(document).ready(function(){})的简写
 */
$(function () {
    //创建Sync实例  详见野狗云
    var config = {
        authDomain: "wd5722657872rntzuo.wilddogio.com",
        syncURL: "https://wd5722657872rntzuo.wilddogio.com" //输入接点URL
    };
    wilddog.initializeApp(config);
    var ref = wilddog.sync().ref();

    var $send = $('.send'),
        $reset = $('.reset'),
        $danmuInput = $('.danmu-input');
    $danmuShow = $('.danmu-show');

    //产生随机top值
    function randomTop() {
        return Math.floor(Math.random() * 440);
    }

    //随机产生颜色
    function randomColor() {
        return Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255);
    }

    //产生随机时间
    function randomTime(){
        return Math.floor(Math.random() * 6001 + 9000);
    }

    //把弹幕显示到屏幕
    function send(text) {
        var $text = $('<p class="danmu-text">' + text + '</p>');
        var color = 'rgb(' + randomColor() + ')';
        var top = randomTop() + 'px';
        var length = '-' + text.length * 10 + 'px';
        var myTime = randomTime();
        $text.css({
            'top': top,
            'color': color,
            'right': length
        });
        $danmuShow.append($text);
        $text.animate({
                right: "1800px"
            },
            myTime,
            function () {
                $text.remove();
            }
        );
    }
    ref.child('message').on('child_added', function (arg) {
        send(arg.val());
        // console.log(arg.val());
    });
    //发送事件
    $send.click(function () {
        ref.child('message').push($danmuInput.val());
        $danmuInput.val('');
    });
    //回车键发送
    $danmuInput.keypress(function (event) {
        if (event.keyCode == "13") {
            $send.trigger('click');
        }
    });
    //重置事件
    $reset.click(function () {
        $('p').remove();
        ref.remove();
    })

});