// fade-outアニメーションを付与する関数
function fadeOut(element: HTMLElement, duration: number = 1000) {
	element.style.transition = `opacity ${duration}ms`;
	element.style.opacity = '0';
	setTimeout(() => {
		element.style.display = 'none';
	}, duration);
}

// 例: ページ遷移や要素消失時にfadeOutを使う
// const topText = document.querySelector('.top-text');
// if (topText) {
//     setTimeout(() => fadeOut(topText as HTMLElement, 1200), 4000);
// }
// バーガーメニューの動作
window.addEventListener('DOMContentLoaded', () => {
	const burger = document.getElementById('burger-menu');
	const navUl = document.querySelector('.header-nav ul');
	if (burger && navUl) {
		burger.addEventListener('click', (e) => {
			e.stopPropagation();
			navUl.classList.toggle('active');
			burger.classList.toggle('open');
		});
		// メニュー外クリックで閉じる
		document.addEventListener('click', (e) => {
			if (navUl.classList.contains('active')) {
				if (!(e.target as HTMLElement).closest('.Header-contents')) {
					navUl.classList.remove('active');
					burger.classList.remove('open');
				}
			}
		});
	}
});
