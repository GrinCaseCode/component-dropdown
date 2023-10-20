$(document).ready(function() {

	$('.item-filter__button').click(function(e) {
		e.preventDefault();
		$(this).siblings(".item-filter__dropdown").slideToggle(200);
		$(this).toggleClass("active");
	});

	$('.tabs-filter li a').click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings().find(".tab-pane-filter").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	});

	$('.item-checkbox input').click(function() {
		var numbersCheckbox = $('.item-filter input:checkbox:checked').length;
		var textCheckbox = $(this).siblings("span").html();
		$(".numbers-filter").html(numbersCheckbox);
		if($(this).is(':checked')){
			$(this).parent().parent().parent().parent().siblings(".list-selected").append('<li data-title="'+textCheckbox +'">' + textCheckbox + '<div class="remove-selected"></div></li>');
			
		} else {
			$(this).parent().parent().parent().parent().siblings(".list-selected").find("li[data-title='"+textCheckbox+"']").remove();
		}
		if($('.item-checkbox input').is(':checked')){
			$(".numbers-filter").addClass("active");
		} else {
			$(".numbers-filter").removeClass("active");
		}
		$('.remove-selected').click(function() {
			$(this).parent().parent().siblings(".list-filter").find("input[name='"+textCheckbox+"']").prop( "checked", false );
			$(this).parent().remove();
		});
	});

	$(document).on("click", '.remove-selected', function() {
		var numbersCheckbox = $('.item-filter input:checkbox:checked').length;
		$(".numbers-filter").html(numbersCheckbox);
		if($('.item-checkbox input').is(':checked')){
			$(".numbers-filter").addClass("active");
		} else {
			$(".numbers-filter").removeClass("active");
		}
	});
	
});
