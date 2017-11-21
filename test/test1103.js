$(document)
    .ready(function () {

        // 读取数据
        var table = $('#table').DataTable({
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.10.16/i18n/Chinese.json'
            },
            ajax: {
                url: './data.json',
                dataSrc: 'body'
            },
            columns: [
                {
                    data: 'id'
                }, {
                    data: 'name'
                }, {
                    data: 'author'
                }, {
                    data: 'price'
                }, {
                    data: 'publish'
                }, {
                    data: 'isbn'
                }
            ]
        });
        $('#table tbody').on('click', 'tr', function () {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            } else {
                table
                    .$('tr.selected')
                    .removeClass('selected');
                $(this).addClass('selected');
            }
        });

        // 添加
        $('#add').on('click', function () {
            bootbox.dialog({
                title: '图书',
                message: '<form class="form-horizontal" id="addForm"><div class="form-group"><label for="n' +
                        'ame" class="col-sm-2 control-label">书名：*</label><div class="col-sm-10"><input ty' +
                        'pe="text" class="form-control" id="name"></div></div><div class="form-group"><la' +
                        'bel for="author" class="col-sm-2 control-label">作者：*</label><div class="col-sm-1' +
                        '0"><input type="text" class="form-control" id="author"></div></div><div class="f' +
                        'orm-group"><label for="price" class="col-sm-2 control-label">价格：*</label><div cl' +
                        'ass="col-sm-10"><input type="text" class="form-control" id="price"></div></div><' +
                        'div class="form-group"><label for="publish" class="col-sm-2 control-label">出版社：*' +
                        '</label><div class="col-sm-10"><input type="text" class="form-control" id="publi' +
                        'sh"></div></div><div class="form-group"><label for="isbn" class="col-sm-2 contro' +
                        'l-label">ISBN：*</label><div class="col-sm-10"><input type="text" class="form-con' +
                        'trol" id="isbn"></div></div></form>',
                buttons: {
                    cancel: {
                        label: "取消",
                        className: 'btn-default'
                    },
                    confirm: {
                        label: "保存",
                        className: 'btn-primary',
                        callback: function () {
                            var name = $('#name').val();
                            var author = $('#author').val();
                            var price = $('#price').val();
                            var publish = $('#publish').val();
                            var isbn = $('#isbn').val();

                            if (name == '' || author == '' || price == '' || publish == '' || isbn == '') {
                                bootbox.alert('您有未填写信息，不能提交!');
                                return;
                            }

                            if (isNaN(price)) {
                                bootbox.alert('价格格式错误，无法添加！');
                                return;
                            }
                            // 获取总行数
                            var idindex = table
                                .column(0)
                                .data()
                                .length;
                            idindex++;
                            table
                                .row
                                .add({
                                    id: idindex,
                                    name: name,
                                    author: author,
                                    price: price,
                                    publish: publish,
                                    isbn: isbn
                                })
                                .draw();

                        }
                    }
                }
            });
        });

        //删除

        $('#del').on('click', function () {
            bootbox
                .confirm('是否要删除选中行？', function (result) {
                    if (result) {
                        table
                            .row('.selected')
                            .remove()
                            .draw(false);
                    }
                })
        });

        //修改

        $('#modify').on('click', function () {
            var data = table
                .row('.selected')
                .data();
            if (!data) {
                bootbox.alert('请选中要修改元素');
            } else {

                bootbox.dialog({
                    title: '图书',
                    message: '<form class="form-horizontal" id="addForm"><div class="form-group"><label for="n' +
                            'ame" class="col-sm-2 control-label">书名：*</label><div class="col-sm-10"><input ty' +
                            'pe="text" class="form-control" id="name" value="' + data.name + '"></div></div><div class="form-group"><label for="author" class="col-sm-2 contro' +
                            'l-label">作者：*</label><div class="col-sm-10"><input type="text" class="form-contr' +
                            'ol" id="author" value="' + data.author + '"></div></div><div class="form-group"><label for="price" class="col-sm-2 control' +
                            '-label">价格：*</label><div class="col-sm-10"><input type="text" class="form-contro' +
                            'l" id="price" value="' + data.price + '"></div></div><div class="form-group"><label for="publish" class="col-sm-2 contr' +
                            'ol-label">出版社：*</label><div class="col-sm-10"><input type="text" class="form-con' +
                            'trol" id="publish" value="' + data.publish + '"></div></div><div class="form-group"><label for="isbn" class="col-sm-2 control-' +
                            'label">ISBN：*</label><div class="col-sm-10"><input type="text" class="form-contr' +
                            'ol" id="isbn" value="' + data.isbn + '"></div></div></form>',
                    buttons: {
                        cancel: {
                            label: "取消",
                            className: 'btn-default'
                        },
                        confirm: {
                            label: "保存",
                            className: 'btn-primary',
                            callback: function () {
                                var name = $('#name').val();
                                var author = $('#author').val();
                                var price = $('#price').val();
                                var publish = $('#publish').val();
                                var isbn = $('#isbn').val();

                                if (name == '' || author == '' || price == '' || publish == '' || isbn == '') {
                                    bootbox.alert('您有未填写信息，不能提交!');
                                    return;
                                }

                                if (isNaN(price)) {
                                    bootbox.alert('价格格式错误，无法添加！');
                                    return;
                                }

                                table.row('.selected').data({
                                    id: data.id,
                                    name: name,
                                    author: author,
                                    price: price,
                                    publish: publish,
                                    isbn: isbn
                                });
                            }
                        }
                    }
                });
            }

        });
    });