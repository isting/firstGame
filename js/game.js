'use strict';

$(function () {
    // 总用时
    var allTime = 0;
    var startGameTime = null;
    // 跳转find页面
    $('.startGame').on('touchstart', function (e) {
        tab(2); //跳转
        timer(); //计时
        imgId = 1; //初始化图片
        cutImg(); //切换图片
        // 记录总时间
        startGameTime = setInterval(function () {
            allTime++;
        }, 1000);
    });

    // 切换图片
    $('.nextGrounp').on('touchstart', function () {
        switchImg();
    });
    // 跳转首页
    $('#playAgain').on('touchstart', function () {
        tab(1);
        iii = 0; //分数初始化
        location.reload();
    });
    countNum(); //图片上的不通点，以及点击的数据

    // 初始化提示
    $('#reminder').html('提示：<strong>欢迎挑战美女来找茬！</strong>');
    // ***********************************************************************
    // tab切换
    function tab(numb) {
        $('#allPage>div').each(function (i, v) {
            v.className = 'hide';
            i++;
            if (i == numb) {
                v.className = 'show';
            }
        });
    }
    // 批量添加图片
    function cutImg() {
        var img_G = $('#switchImg>li'); //5
        for (var i = 0; i < img_G.length; i++) {
            $('#switchImg>li').eq(i).children('div').eq(0).css({
                "background": "url('img/" + randImgArr[i][0] + "-1.jpg') no-repeat center"
            });
            $('#switchImg>li').eq(i).children('div').eq(1).css({
                "background": "url('img/" + randImgArr[i][0] + "-3.jpg') no-repeat center"
            });
        }
    }

    // 切换图片
    var imgId = 1;
    var getID = 0;
    
    function switchImg() {
        var arrLength = $('#switchImg')[0].children.length; //3
        getID++;
        pointer = 0; //初始化点击次数
        // console.log(getID);
        $('.screening').html('第'+ (getID+1) +'组'); //头部记录组数
        if (imgId < arrLength) {
            $('#switchImg').children('li').eq(imgId).show().siblings('li').hide();

            timer();
            poinFalse = 0; //点错次数  初始化

            // 防止多次点击  初始化
            h_arr = []; //push的数组
            judge = [];//筛选数组
            ar = [];//对比数组
            barrier = true;
            $('#reminder').html('提示：<strong style="color:white">加油哦！</strong>');
        } else {
            tab(3);
            getID = 0; //这是获得提示用的
            // 把总时间追加到页面上
            $('#allSecond').text(allTime);
            clearInterval(startGameTime);
            designationS(iii);
            $('title').html('人送外号【'+ designation +'】，快来挑战档口网美女来找茬！');
            $('.resultImg').css({
                "background":"url('../bg/" + resultImg + "') no-repeat center",
                "backgroundSize":"cover"
            })
        }
        imgId++;
    }

    // 时间倒计时
    var clear = null;
    var count;
    function timer() {
        clearInterval(clear);
        count = 51;
        clear = setInterval(function () {
            if (count <= 0) {
                clearInterval(clear);
                switchImg();
            } else if (count > 0) {
                count--;
            }
            $('#countDown').text(count);
            $('.timeSurplus').css('width', 100 * count / 51 + '%');
            // 颜色
            if (count > 35) {
                $('.progress-bar').removeClass('red').addClass('green');
            } else if (count <= 35 && count > 15) {
                $('.progress-bar').removeClass('green').addClass('blue');
            } else if (count <= 15 && count > 5) {
                $('.progress-bar').removeClass('blue').addClass('orange');
            } else if (count <= 5) {
                $('.progress-bar').removeClass('blue').addClass('red');
            }
        }, 1000);
    }

    // 初始化变量

    var iii = 0; //记录分数；
    var pointer = 0; //记录点击个数；
    var poinFalse = 0; /*点错的次数*/

    var h_arr = []; //获取用户点击的值
    var judge = []; //h_arr和[0,1,2,3]进行比较得出的值，但是得到的值是重复的
    var ar = []; //去重后的值
    var barrier = true;
    // 两边的点击
    function countNum() {
        var _loop = function _loop(k) {


            // 点错减时间系列
            $($('.find_left')[k]).on('click', function () {
                // 点错一个减5分
                count -= 5;
                poinFalse++;
                $('#reminder').html('提示：<strong>你点错' + poinFalse + '次,一次扣五秒哦</strong>');
            });
            $($('.find_right')[k]).on('click', function () {
                count -= 5;
                poinFalse++;
                $('#reminder').html('提示：<strong>你点错' + poinFalse + '次,一次扣五秒哦</strong>');
            });

            // 对图片上的四个小div的宽高  循环赋值

            var _loop2 = function _loop2(i) {
                newLeft = $('.find_left>div');
                newRight = $('.find_right>div');

                newLeft = Array.prototype.slice.call(newLeft);
                newRight = Array.prototype.slice.call(newRight);

                newLeft_ = $(newLeft.slice(k * 4, 4 * (k + 1))[i]);
                newRight_ = $(newRight.slice(k * 4, 4 * (k + 1))[i]);
                ss = obj[randImgArr[k][0]][i];

                newLeft_.css({
                    width: ss.w + 'px',
                    height: ss.h + 'px',
                    top: ss.t + 'px',
                    left: ss.l + 'px'
                });
                newRight_.css({
                    width: ss.w + 'px',
                    height: ss.h + 'px',
                    top: ss.t + 'px',
                    left: ss.l + 'px'
                });


                // 点击和积分
                $(newRight.slice(k * 4, 4 * (k + 1))[i]).on('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    if (!$(newRight.slice(k * 4, 4 * (k + 1))[i]).hasClass('borderColor')) {

                        iii += 5; //点对一个加五分
                        $('#findGrade').text(iii);
                        $('#allScore').text(iii);
                    }
                    $(newRight.slice(k * 4, 4 * (k + 1))[i]).addClass('borderColor');
                    $(newLeft.slice(k * 4, 4 * (k + 1))[i]).addClass('borderColor');

                    //以下操作数组，是为了让使用者重复连续多次点击一个地方不会出错
                    h_arr.push(i);
                    h_arr.forEach(function (v) {
                        if ([0, 1, 2, 3].indexOf(v) != -1) {
                            judge.push(v);
                        }
                    });
                    judge.forEach(function (v) {
                        if (ar.indexOf(v) == -1) {
                            ar.push(v);
                        }
                    });
                    if (ar.length == 4) {
                        if (barrier) {
                            barrier = false;
                            setTimeout(function () {
                                switchImg();
                            }, 500);
                        }
                    }
                });

                $(newLeft.slice(k * 4, 4 * (k + 1))[i]).on('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    if (!$(newLeft.slice(k * 4, 4 * (k + 1))[i]).hasClass('borderColor')) {
                        iii += 5;
                        $('#findGrade').text(iii);
                        $('#allScore').text(iii);
                    }
                    $(newLeft.slice(k * 4, 4 * (k + 1))[i]).addClass('borderColor');
                    $(newRight.slice(k * 4, 4 * (k + 1))[i]).addClass('borderColor');

                    // 防止重复点击
                    h_arr.push(i);
                    h_arr.forEach(function (v) {
                        if ([0, 1, 2, 3].indexOf(v) != -1) {
                            judge.push(v);
                        }
                    });
                    judge.forEach(function (v) {
                        if (ar.indexOf(v) == -1) {
                            ar.push(v);
                        }
                    });
                    if (ar.length == 4) {
                        if (barrier) {
                            barrier = false;
                            setTimeout(function () {
                                switchImg();
                            }, 500);
                        }
                    }
                });
            };

            for (var i = 0; i < 4; i++) {
                _loop2(i);
            } /*内层for循环*/
        };

        // 循环赋值
        for (var k = 0; k < 5; k++) {
            var newLeft;
            var newRight;
            var newLeft_;
            var newRight_;
            var ss;

            _loop(k);
        } /*外层循环*/

    } /* 单页点击*/

    // 提示功能
    function gamePrompt() {
        var _newLeft = $('.find_left>div');
        var _newRight = $('.find_right>div');
        var ayy = [];//没有找到，且没有被提示的选项

        _newLeft = Array.prototype.slice.call(_newLeft);
        _newRight = Array.prototype.slice.call(_newRight);
        for (var r = 0; r < 4; r++) {
            if (!$(_newLeft.slice(getID * 4, 4 * (getID + 1))[r]).hasClass('borderColor')) {
                if (!$(_newLeft.slice(getID * 4, 4 * (getID + 1))[r]).hasClass('bgColor')) {
                    ayy.push($(_newLeft.slice(getID * 4, 4 * (getID + 1))[r])[0]);
                    //把没有找到的 放到一个数组里面
                }
            }
        }
        var arrID = Math.floor((Math.random() * ayy.length));//获取数组随机
        var uu = ayy.splice(arrID, 1);//随机截取一个
        $(uu).addClass('bgColor');
    }
    $('#gamePrompt').on('touchstart', function () {
        gamePrompt();
    })

    // 分享功能
    $('#attentionGame').on('click', function () {
            $('.masking').removeClass('hide');
    })
    $('.masking').on('click', function () {
        $('.masking').addClass('hide');
    })
    // tab(3)
}); //$(function(){})