//日期处理
function dateStr(str) {
    var year = str.slice(0, 4),
        month = str.slice(4, 6);
    day = str.slice(6);
    return year + '年' + month + '月' + day + '日';
}

// 获取天气
function getWeather(cityname) {
    $
        .getJSON('https://v.juhe.cn/weather/index?callback=?', {
            'cityname': cityname,
            'dtype': 'json',
            'key': 'ea0c38d4e444dfb8911a0c29f7a4725e'
        }, function (data) {
            var sk = data.result.sk;
            var today = data.result.today;
            var futureList = [];
            var future = data.result.future;
            // 实时天气
            $('#now-city').text(cityname);
            $('#now-tmp').text(sk['temp'] + '℃');
            $('#now-wind-dir').text(sk['wind_direction']);
            $('#now-wind-str').text(sk['wind_strength']);
            $('#now-hum').text(sk['humidity']);
            $('#now-time').text(sk['time']);
            // 今日天气
            $('#today-city').text(today['city']);
            $('#today-date').text(today['date_y']);
            $('#today-week').text(today['week']);
            $('#today-tmp').text(today['temperature']);
            $('#today-wind').text(today['wind']);
            $('#today-dress-index').text(today['dressing_index']);
            $('#today-dress-advice').text(today['dressing_advice']);
            $('#today-uv').text(today['uv_index']);
            $('#today-wash').text(today['wash_index']);
            $('#today-travel').text(today['travel_index']);
            $('#today-exercise').text(today['exercise_index']);

            //未来天气
            for (var futurePro in future) {
                futureList.push(future[futurePro]);
            }
            for (var i = 0; i < futureList.length; i++) {
                $(('#future-data' + i)).text(dateStr(futureList[i]['date']));
                $(('#future-week' + i)).text(futureList[i]['week']);
                $(('#future-weather' + i)).text(futureList[i]['weather']);
                $(('#future-temp' + i)).text(futureList[i]['temperature']);
                $(('#future-wind' + i)).text(futureList[i]['wind']);
            }
        })
}

$(function () {
    var myCity = new BMap.LocalCity();
    myCity.get(function(r) {
        var cityname = r.name;
        getWeather(cityname);
    })
});
