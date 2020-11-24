const $btnNavOpen = document.getElementById('nav-mobile-open'),
	$btnNavClose = document.getElementById('nav-mobile-close');

const openMenu = () => {
	const handleMenuAnimation = ({ animationName }) => {
		console.log(animationName);
		navList.classList.remove(animationName);
		if (animationName === 'out') {
			nav.classList.remove('show');
			navList.removeEventListener('animationend', handleMenuAnimation);
		}
	};

	const nav = document.getElementById('nav-mobile');
	const navList = nav.firstElementChild;
	nav.classList.add('show');
	navList.classList.add('in');
	navList.addEventListener('animationend', handleMenuAnimation);
};

const closeMenu = () => {
	const nav = document.getElementById('nav-mobile');
	const navList = nav.firstElementChild;
	navList.classList.add('out');
};

$btnNavOpen.addEventListener('click', openMenu);

$btnNavClose.addEventListener('click', closeMenu);
