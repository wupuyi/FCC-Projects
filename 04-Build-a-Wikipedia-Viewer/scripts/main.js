$(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        var text = $('input').val();
        $('input').val("");
        // 折叠已有展示
        $('.result').slideUp(500);
        search(text);
    });

    function search(text) {
        $.ajax({
            url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch=' + text,
            success: function (response) {
                $('.result-content').remove();
                try {
                    var result = '';
                    for (var index in response.query.pages) {
                        var r = response.query.pages[index];
                        if (r.thumbnail) {
                            var src = r.thumbnail.source;
                            result += '<div class="result-content"><h2><a href="https://en.wikipedia.org/wiki/' + encodeURIComponent(r.title) + '">' + r.title + '</a></h2><img src="' + src + '"><p>' + r.extract + '</p></div>';

                        } else {
                            result += '<div class="result-content"><h2><a href="https://en.wikipedia.org/wiki/' + encodeURIComponent(r.title) + '">' + r.title + '</a></h2><p>' + r.extract + '</p></div>';
                        }
                    }
                    $('.result').append($(result)).slideDown(500);
                } catch (error) {
                    $('.result').append($('<div class="result-content"><p>抱歉，没有找到相关内容</p></div>'))
                }
            }
        });
    }
})