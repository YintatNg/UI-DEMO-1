// 配置类
$(document).ready(function () {
    $(".point a").click(function () {
        var order = $(".point a").index(this);
        $(".con" + order).show().siblings(".content").hide();
    });
});

/*
// 原生进程类与虚拟机配置类
$(document).ready(function (){
    $(".point1 a").click(function() {
        var order = $(".point1 a").index(this);
        $(".dis" + order).show().siblings(".displayPanel").hide();
    });
});
*/



