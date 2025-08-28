// fade-outアニメーションを付与する関数
function fadeOut(element, duration) {
    if (duration === void 0) { duration = 1000; }
    element.style.transition = "opacity ".concat(duration, "ms");
    element.style.opacity = '0';
    setTimeout(function () {
        element.style.display = 'none';
    }, duration);
}
// 例: ページ遷移や要素消失時にfadeOutを使う
// const topText = document.querySelector('.top-text');
// if (topText) {
//     setTimeout(() => fadeOut(topText as HTMLElement, 1200), 4000);
// }
// バーガーメニューの動作
window.addEventListener('DOMContentLoaded', function () {
    var burger = document.getElementById('burger-menu');
    var navUl = document.querySelector('.header-nav ul');
    if (burger && navUl) {
        burger.addEventListener('click', function (e) {
            e.stopPropagation();
            navUl.classList.toggle('active');
            burger.classList.toggle('open');
        });
        // メニュー外クリックで閉じる
        document.addEventListener('click', function (e) {
            if (navUl.classList.contains('active')) {
                if (!e.target.closest('.Header-contents')) {
                    navUl.classList.remove('active');
                    burger.classList.remove('open');
                }
            }
        });
    }
});
