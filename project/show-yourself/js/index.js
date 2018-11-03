window.onload = function () {
    var height = window.innerHeight;
    var proHtmlBtn = document.getElementById("html5");
    var proVueBtn = document.getElementById("vue");
    var proNodeBtn = document.getElementById("node");vue
    var proHtml = document.querySelector('.html5');
    var proNode = document.querySelector('.node');
    var proVue = document.querySelector('.vue');
    var project = document.querySelector('.project');
    project.style.height = height+"px";
    proHtmlBtn.addEventListener("click", function (e) {
        if (document.querySelector(".active"))
            document.querySelector(".active").classList.remove("active");
        if (document.querySelector(".btn-active"))
            document.querySelector(".btn-active").classList.remove("btn-active");
        proHtml.classList.add('active');
        e.target.classList.add('btn-active');
    });
    proNodeBtn.addEventListener("click", function (e) {
        if (document.querySelector(".active"))
            document.querySelector(".active").classList.remove("active");
        if (document.querySelector(".btn-active"))
            document.querySelector(".btn-active").classList.remove("btn-active");
        proNode.classList.add('active');
        e.target.classList.add('btn-active');
    });
    proVueBtn.addEventListener("click", function (e) {
        if (document.querySelector(".active"))
            document.querySelector(".active").classList.remove("active");
        if (document.querySelector(".btn-active"))
            document.querySelector(".btn-active").classList.remove("btn-active");
        proVue.classList.add('active');
        e.target.classList.add('btn-active');
    });

    var spanArr = document.querySelector(".example").children;
    for (let i = 0; i < spanArr.length; i++) {
        spanArr[i].style.fontSize = "1em";
        spanArr[i].style.opacity = 1;
        spanArr[i].style.transitionDelay = i/5 + "s";
    }
}