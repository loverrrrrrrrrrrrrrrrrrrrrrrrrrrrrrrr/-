//循环生成10个方块  随机生成颜色
var container = document.getElementById('container');



//数组的方式 将这些方块存储起来
var arr = [];

for (var i = 0; i < 10; i++) {
    var r = Tools.getRandom(0, 255);
    var g = Tools.getRandom(0, 255);
    var b = Tools.getRandom(0, 255);


    var box = new Box(container, {
        backgroundColor: 'rgb(' + r + ',' + b + ',' + b + ')'
    });
    //把创建好的方块对象添加到数组中
    arr.push(box);
}



//设置随机位置 开启定时器
setInterval(randomBox, 500);

//页面加载完成  先 执行一遍
randomBox();

function randomBox() {
    //随机生成方块的坐标
    for (var i = 0; i < arr.length; i++) {
        var box = arr[i];
        box.random();
    }
}