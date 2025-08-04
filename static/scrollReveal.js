document.addEventListener("DOMContentLoaded", function (){
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) =>{
	entries.forEach(entry =>{
		if (entry.isIntersecting){
			entry.target.classList.add('in-view');
		 }
		else{
		entry.target.classList.remove('in-view');}


	});
	},{threshold:0.3});
sections.forEach(section => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNavLinks');

  hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
  });
});

