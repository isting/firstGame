// 称号
var designation;
function designationS(sn1) {
    var defeat = null;
    var designationNum = sn1;
        designation = null;
    var n = Math.floor(designationNum / 10);
    switch (n) {
        case 0:
            designation = '呆若木鸡';
            defeat = '0.0001%';
            break;
        case 1:
            designation = '目不暇接';
            defeat = '9.99%';
            break;
        case 2:
            designation = '眼花缭乱';
            defeat = '33.3%';
            break;
        case 3:
            designation = '眼细如缝';
            defeat = '37.84%';
            break;
        case 4:
            designation = '明眸善昧';
            defeat = '39.99%';
            break;
        case 5:
            designation = '炯炯有神';
            defeat = '69%';
            break;
        case 6:
            designation = '浓眉大眼';
            defeat = '70%';
            break;
        case 7:
            designation = '耳聪目明';
            defeat = '80%';
            break;
        case 8:
            designation = '洞若观火';
            defeat = '90%';
            break;
        case 9:
            designation = '千里眼';
            defeat = '99.5%';
            break;
        case 10:
            designation = '火眼金睛';
            defeat = '99.99%';
            break;
        default:
            designation = '你看不见我哦';
            defeat = '数据出错啦 O(∩_∩)O~';
    }
    $('.performance').text(designation);
    $('.defeatN').text(defeat);
}

// 图片位置数据
var obj = [
    [/*这是一条假数据，没有用的，但是不能删，下面的数据 序号对应图片*/],
    [//1
        { t: 20, l: 0, w: 61, h: 35, },
        { t: 32, l: 111, w: 48, h: 32, },
        { t: 82, l: 70, w: 62, h: 52, },
        { t: 148, l: 0, w: 36, h: 28, }
    ],
    [//2
        { t: 39, l: 7, w: 17, h: 24 },
        { t: 39, l: 94, w: 19, h: 19 },
        { t: 77, l: 132, w: 28, h: 110 },
        { t: 143, l: 9, w: 22, h: 19 },
    ],
    [//3
        { t: 12, l: 89, w: 28, h: 22 },
        { t: 153, l: 0, w: 21, h: 46 },
        { t: 147, l: 66, w: 46, h: 39 },
        { t: 151, l: 119, w: 42, h: 59 },
    ],
    [//4
        { t: 24, l: 125, w: 28, h: 25 },
        { t: 104, l: 38, w: 30, h: 22 },
        { t: 123, l: 3, w: 19, h: 33 },
        { t: 132, l: 62, w: 20, h: 32 },
    ],
    [//5
        { t: 0, l: 102, w: 58, h: 36 },
        { t: 77, l: 52, w: 39, h: 35 },
        { t: 81, l: 137, w: 21, h: 19 },
        { t: 186, l: 11, w: 41, h: 34 },
    ],
    [//6
        { t: 17, l: 133, w: 27, h: 20 },
        { t: 100, l: 0, w: 26, h: 57 },
        { t: 188, l: 64, w: 32, h: 19 },
        { t: 179, l: 74, w: 25, h: 39 },
    ],
    [//7
        { t: 0, l: 82, w: 78, h: 28 },
        { t: 70, l: 12, w: 23, h: 20 },
        { t: 128, l: 120, w: 40, h: 56 },
        { t: 170, l: 50, w: 44, h: 44 },
    ],
    [//8
        { t: 15, l: 65, w: 95, h: 118 },
        { t: 74, l: 0, w: 16, h: 62 },
        { t: 72, l: 24, w: 13, h: 38 },
        { t: 188, l: 116, w: 25, h: 27 },
    ],
    [//9  这个图片竟然有7个点  不可原谅
        { t: 0, l: 0, w: 25, h: 84 },
        { t: 0, l: 68, w: 17, h: 55 },
        { t: 113, l: 96, w: 21, h: 27 },
        { t: 170, l: 66, w: 41, h: 41 },
    ],
    [//10
        { t: 10, l: 20, w: 30, h: 23 },
        { t: 61, l: 0, w: 20, h: 60 },
        { t: 63, l: 38, w: 20, h: 18 },
        { t: 171, l: 0, w: 160, h: 29 },
    ],
    [//11
        { t: 57, l: 63, w: 17, h: 24 },
        { t: 74, l: 102, w: 27, h: 30 },
        { t: 140, l: 10, w: 31, h: 45 },
        { t: 185, l: 63, w: 10, h: 19 },
    ],
    [//12
        { t: 10, l: 118, w: 36, h: 13 },
        { t: 57, l: 91, w: 63, h: 9 },
        { t: 117, l: 0, w: 22, h: 14 },
        { t: 158, l: 57, w: 49, h: 55 },
    ],
    [//13
        { t: 43, l: 95, w: 53, h: 25 },
        { t: 59, l: 0, w: 45, h: 35 },
        { t: 151, l: 95, w: 37, h: 40 },
        { t: 152, l: 135, w: 20, h: 36 },
    ],
    [//14
        { t: 44, l: 0, w: 30, h: 40 },
        { t: 72, l: 83, w: 8, h: 46 },
        { t: 72, l: 101, w: 54, h: 54 },
        { t: 169, l: 69, w: 22, h: 24 },
    ],
    [//15
        { t: 56, l: 0, w: 16, h: 34 },
        { t: 34, l: 144, w: 22, h: 36 },
        { t: 137, l: 108, w: 24, h: 26 },
        { t: 154, l: 144, w: 15, h: 50 },
    ],
]
// 随机数组


// 随机图片
var randImgArr = null;

// 随机抽取数组图片，打乱输出
function randomImg() {
    var imgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var randomNewArr = [];
    var imgTime = 5;
    var random1 = imgArr.sort(function () {
        return (0.5 - Math.random());
    })
    while (randomNewArr.length < imgTime) {
        randomNewArr.push(random1.splice(0, 1))
    }
    randImgArr = randomNewArr;
}
randomImg();  /*生成随机数*/


