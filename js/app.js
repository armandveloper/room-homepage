const $btnNavOpen = document.getElementById('nav-mobile-open'),
	$btnNavClose = document.getElementById('nav-mobile-close'),
	$btnSliderPrev = document.getElementById('slider-prev'),
	$btnSliderNext = document.getElementById('slider-next'),
	$slides = document.querySelectorAll('picture.hero__img'),
	$slideInfo = document.querySelectorAll('.hero__info');

let slideIndex = 0,
	prevIndex = slideIndex;

const openMenu = () => {
	const handleMenuAnimation = ({ animationName }) => {
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

const moveSlide = (prev, next) => {
	$slides[next].classList.add('active');
	$slideInfo[next].classList.add('active');
	$slides[prev].classList.remove('active');
	$slideInfo[prev].classList.remove('active');
};

const prevSlide = () => {
	prevIndex = slideIndex;
	--slideIndex;
	slideIndex = slideIndex < 0 ? $slides.length - 1 : slideIndex;
	moveSlide(prevIndex, slideIndex);
};

const nextSlide = () => {
	prevIndex = slideIndex;
	++slideIndex;
	slideIndex = slideIndex === $slides.length ? 0 : slideIndex;
	moveSlide(prevIndex, slideIndex);
};

$btnNavOpen.addEventListener('click', openMenu);
$btnNavClose.addEventListener('click', closeMenu);
$btnSliderPrev.addEventListener('click', prevSlide);
$btnSliderNext.addEventListener('click', nextSlide);
