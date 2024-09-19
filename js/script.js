window.onload = function () {
	
	
	/*------------------------------------------------------
  	/  Scroll
  	/------------------------------------------------------*/

	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset  > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	/*------------------------------------------------------
  	/  Hamburger
  	/------------------------------------------------------*/

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});

	document.querySelectorAll(".mobile-nav").forEach(n => n.addEventListener("click", () => {
		menu_btn.classList.remove('active');
		mobile_menu.classList.remove('active');
	}))

	/*------------------------------------------------------
  	/  Project Filter Animation
  	/------------------------------------------------------*/

	function filter_animation() {
		var active_bg = $(".project-filter .button-group .active-bg");
		var element = $(".project-filter .button-group .active");
		$(".project-filter .button-group button").on("click", function () {
			var e = $(this);
			activeFilterBtn(active_bg, e);
		});
		activeFilterBtn(active_bg, element);
	}
	filter_animation();

	function activeFilterBtn(active_bg, e) {
		if (!e.length) {
			return false;
		}
		var leftOff = e.offset().left;
		var width = e.outerWidth();
		var menuLeft = $(".project-filter .button-group").offset().left;
		e.siblings().removeClass("active");
		e.closest("button")
			.siblings()
			.addClass(".project-filter .button-group");
		active_bg.css({ left: leftOff - menuLeft + "px", width: width + "px" });
	}

	/*------------------------------------------------------
  	/  Project Filter
  	/------------------------------------------------------*/

	$('.project-filter .filter-button-group button').on('click', function(){
		const value=$(this).attr('data-filter')
		if(value=='All'){
			$('.project-item').show('1000')
		}
		else{
			$('.project-item').not('.'+value).hide('1000')
			$('.project-item').filter('.'+value).show('1000')
		}
	})
	$('.project-item').not('.html').hide();
    $('.project-item.html').show();

}


