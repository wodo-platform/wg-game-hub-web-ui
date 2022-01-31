jq2 = jQuery.noConflict();
jq2(function($) {

	// homepage animation START -------------

	let random_icon_last = 0;
	let number_of_hero_icons = 12;
	let random_sizes = [40,50,60,70,80,90,100];
	let current_left;
	let current_right1;
	let current_right2;
	let scaling_size1;
	let scaling_size2;
	let window_size_ratio = $(window).width()/1440;
	let userId = 0;
	let sp_token = 'DcuEwzxfR6Y1cL0MyzxqGByDowe8dxI6';

	fly_items();

	function fly_items(){
		$(".fly_left").each(function(){
			let scroll_top = $(window).scrollTop() - $(this).closest('.section').offset().top;
			if(!$(this).hasClass("processed")){
				current_left = parseFloat($(this).css("left"));
				$(this).addClass("processed");
			}
			
			let new_left = 200*window_size_ratio + scroll_top/4;
			if(new_left<=current_left){
				$(this).css("left",new_left);
			}
			
		});
		$(".flying_image2").each(function(){
			let scroll_top = $(window).scrollTop() - $(this).closest('.section').offset().top;
			if(!$(this).hasClass("processed")){
				current_right1 = parseFloat($(this).css("right"));
				$(this).addClass("processed");
			}
			
			let new_right = 250*window_size_ratio + scroll_top/4;
			if(new_right<=current_right1){
				$(this).css("right",new_right);
			}
		});
		$(".flying_image3").each(function(){
			let scroll_top = $(window).scrollTop() - $(this).closest('.section').offset().top;
			if(!$(this).hasClass("processed")){
				current_right2 = parseFloat($(this).css("right"));
				$(this).addClass("processed");
			}
			
			let new_right = 150*window_size_ratio + scroll_top/4;
			if(new_right<=current_right2){
				$(this).css("right",new_right);
			}
		});
		$(".game_image1").each(function(){
			let scroll_top = $(window).scrollTop() - $(this).closest('.section').offset().top;
			if(!$(this).hasClass("processed")){
				scaling_size1 = parseFloat($(this).width());
				$(this).addClass("processed");
			}
			
			let scale_size = 200*window_size_ratio - scroll_top*1.5;
			
			let new_size = (scale_size>=scaling_size1) ? scale_size: scaling_size1;
			$(this).width(new_size);
			$(this).height(new_size);
		});
		$(".game_image2").each(function(){
			let scroll_top = $(window).scrollTop() - $(this).closest('.section').offset().top;
			if(!$(this).hasClass("processed")){
				scaling_size2 = parseFloat($(this).width());
				$(this).addClass("processed");
			}
			
			let scale_size = 300*window_size_ratio - scroll_top*1.5;

			let new_size = (scale_size>=scaling_size1) ? scale_size: scaling_size1;
			$(this).width(new_size);
			$(this).height(new_size);
			$(this).css("left",($(window).width()-$(".section_bg_image").width())/2 + new_size + 10);
			$(".game_image_message").height(new_size);
			$(".game_image_message").css("left",($(window).width()-$(".section_bg_image").width())/2 + scaling_size1*2 + 20);
		});
	}

	// homepage animation END -------------

	// Popup page work START -------------

	function popupwindow(title,content){
		let box_html = "<div class='popupbox' id='popupbox'><div id='popupbox_content_wrapper' class='popupbox_content_wrapper'><div class='popupbox_content_wrapper_inside'><div class='popupbox_title'>"+title+"</div><div class='popupbox_tente'></div><div class='popupbox_content'>"+content+"</div><div class='popupbox_close'>CLOSE</div></div></div></div>";
		$("body").append(box_html);
	}

	// $(".popup_link").on("click",function(){
	$(document).on("click", ".popup_link" , function() {
		let el = $(this);
		let source_content = "<div class='loading'></div>";
		popupwindow(el.attr("popup_title"),source_content);

		$.get( el.attr("popup_content"), function( data ) {
			$(".popupbox_content").html(data);
		});
	});

	$(document).on("click", ".popupbox_close, .message_buttons > .cancel_button" , function() {
		$(".popupbox").remove();
	});
	
	$(document).on("click", ".popupbox" , function(e) {
		var a = $(e.target).parents();
		var clicked_on = true;
		a.each(function(index, val){
			if(val.id=='popupbox_content_wrapper_inside' || val.id=='popupbox_content_wrapper'){
				clicked_on = false;
				return false;
			}
		});
		if(clicked_on){
			$(".popupbox").remove();	
		}
	});

	// Popup page work END -------------

	// Hamburger menu work START -------------

	$(document).on("click", ".header_hamburger" , function() {
		// console.log($(".slim_footer .menu ul").html());
		let footer_links = (typeof $(".slim_footer .menu ul").html() != 'undefined') ? $(".slim_footer .menu ul").html() : $(".footer .menu ul").html();
		let menu_content = "<ul>" + $(".header_menu .menu ul").html() + footer_links + "</ul>";
		let slide_menu_html = '<div id="slide_menu"><div class="menu_content_wrapper"><div class="side_menu_header"></div><div class="menu_content"><div class="close"></div><div class="slide_menu_nav">'+menu_content+'</div></div></div></div>';
		$("body").append(slide_menu_html);

	});
	
	$(document).on("click", "#slide_menu .close" , function() {
		$("#slide_menu").addClass("go_back");
		
		setTimeout(function(){
			$("#slide_menu").remove();
		}, 290);
	});

	// Hamburger menu work END -------------

	// Search bar work START -------------

	$(document).on("click", ".header_search" , function() {
		if($(".search_input").length > 0){
			search_bar_close();
			return;
		}
		let search_input_html = '<div id="search_input_wrapper"><input autocomplete="off" type="text" name="search_input" class="search_input"><div class="close"></div></div>';
		$(this).before(search_input_html);
	});

	$(document).on("click", "body" , function(e) {
		var a = $(e.target).parents();
		var clicked_on2 = true;
		a.each(function(index, val){
			if(val.id=='search_box' || val.id=='search_box_content_wrapper' || val.id=='search_input_wrapper'){
				clicked_on2 = false;
				return false;
			}
		});
		if(clicked_on2){
			$("#search_box").remove();
			// $("#search_input_wrapper").remove();
		}
	});

	function search_bar_close(){
		$("#search_input_wrapper").addClass("go_back");
		
		setTimeout(function(){
			$("#search_input_wrapper").remove();
		}, 300);

		$("#search_box").remove();
	}

	$(document).on("click", "#search_input_wrapper .close" , function() {
		search_bar_close();
	});

	let searchRequest = null;
    let minlength = 3;
	let last_search_phrase = false;
	let highlight_search_item = 0;
	
	$(document).on("keyup", ".search_input" , function(e) {
		
		let keyword = $(".search_input").val();
		
		if(!$("#search_box").length){
			let search_box_html = '<div id="search_box"><div id="search_box_content_wrapper" class="search_box_content_wrapper"><div class="search_box_content">Search phrase must be minimum 3 characters</div><div class="search_box_all_links">View All</div></div></div>';
			$("body").append(search_box_html);
		}

		switch (e.keyCode) {
			case 38: // up arrow key
				highlight_search_item = (highlight_search_item<=1) ? highlight_search_item : highlight_search_item-1;
				break;
			case 40: // down arrow key
				highlight_search_item = (highlight_search_item==$(".search_result_item").length) ? $(".search_result_item").length : highlight_search_item+1;
				break;
			case 13: // enter
				if($(".search_result_item.highlighted").length > 0){
					let destination = $(".search_result_item.highlighted a").attr("href");
					window.location = destination;
				}
				else{
					window.location = "/search?q="+keyword;
				}
				break;
		
			default:
				break;
		}
		highlight_search();
		
        if (keyword.length >= minlength ) {
            if (searchRequest != null) searchRequest.abort();
			if (last_search_phrase && keyword == last_search_phrase) return;

			let loading = "<div class='loading'></div>";
			$(".search_box_content").html(loading);
			$(".search_box_all_links").hide();

			setTimeout(function(){
				searchRequest = $.getJSON( "/sample_data/search_results.json", { APIKEY: "something", search_string: keyword } )
					.done(function( data ) {
						last_search_phrase = keyword;
						$(".search_box_content").html("");
	
						if(data.results.length>3){
							$(".search_box_all_links").show();
						}
						else if(data.results.length == 0){
							$(".search_box_content").html("No results...");
						}
	
						$.each( data.results, function( i, item ) {
							let result_item_html = '<div class="search_result_item game_box"><a href="'+item.destination+'"><div class="search_result_item_left game_box_left"><div class="search_result_item_image game_box_image"><img src="'+item.image+'"></div></div><div class="search_result_item_right game_box_middle"><div class="game_box_title">'+item.title+'</div><div class="game_box_description">'+item.body+'</div><div class="game_sub_box_wrapper"><div class="game_box_options_box"><div class="game_box_options_title">GAME OPTIONS</div><div class="game_box_options_numbers">'+item.game_modes+' OPTIONS</div></div><div class="game_box_players"><div class="game_box_online_title">ONLINE PLAYERS</div><div class="game_box_oonline_numbers">'+item.online_players+' PLAYERS</div></div></div></div><div style="clear: both;"></div></a></div>';
							$(".search_box_content").append(result_item_html);
						});

					})
					.fail(function( jqxhr, textStatus, error ) {
						var err = textStatus + ", " + error;
						$(".search_box_content").html("Oops..! Something went wrong, please try again.");
				});
			}, 300);

        }
    });
	
	function highlight_search(){
		$(".search_result_item").removeClass("highlighted");
		$(".search_result_item:nth-child("+highlight_search_item+")").addClass("highlighted");
	}

	// Search bar work END -------------

	// Notifications work START -------------

	// let start_notifications = false;

	$(document).on("click", ".header_notifications" , function() {
		if(!$("#notifications_box").length){
			let notifications_box_html = '<div id="notifications_box"><div id="notifications_box_content_wrapper" class="notifications_box_content_wrapper"><div class="notifications_box_content"></div><div class="notifications_box_all_links">View All</div></div></div>';
			$("body").append(notifications_box_html);
			
			let loading = "<div class='loading'></div>";
			$(".notifications_box_content").html(loading);
			$(".notifications_box_all_links").hide();

			setTimeout(function(){
				notificationsRequest = $.getJSON( "/sample_data/notifications_sample.json", { APIKEY: "something", notifications_string: userId } )
					.done(function( data ) {
						$(".notifications_box_content").html("");
	
						if(data.notifications.length>3){
							$(".notifications_box_all_links").show();
						}
						else if(data.notifications.length == 0){
							$(".notifications_box_content").html("No results...");
						}
	
						$.each( data.notifications, function( i, item ) {
							let item_link = (item.popup_link) ? ' class="popup_link" popup_content="'+item.destination+'" popup_title="'+item.popup_content.title+'" ': 'href="'+item.destination+'" ';
							let result_item_html = '<div class="notifications_result_item game_box"><a '+item_link+'><div class="notifications_result_item_left game_box_left"><div class="notifications_result_item_image game_box_image"><img src="'+item.image+'"></div></div><div class="notifications_result_item_right game_box_middle"><div class="game_box_title">'+item.title+'</div><div class="game_box_description">'+item.body+'</div></div><div style="clear: both;"></div></a></div>';
							$(".notifications_box_content").append(result_item_html);
						});

					})
					.fail(function( jqxhr, textStatus, error ) {
						var err = textStatus + ", " + error;
						$(".notifications_box_content").html("Oops..! Something went wrong, please try again.");
				});
			}, 300);
			// start_notifications = true;
		}
		else{
			$("#notifications_box").remove();
		}
	});

	$(document).on("click", "body" , function(e) {
			
		var a = $(e.target).parents();
		var clicked_on3 = true;
		a.each(function(index, val){
			if($(e.target).attr("id") == 'header_notifications' || val.id=='notifications_box' || val.id=='notifications_box_content_wrapper' || val.id=='notifications_wrapper'){
				clicked_on3 = false;
				return false;
			}
		});
		if(clicked_on3){
			$("#notifications_box").remove();
		}
	});


	// Notifications work END -------------



	// countdown timer START -----------------
	var countDownDate = new Date("Jan 15, 2022 15:30:00").getTime();
	var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	var new_date = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	$("#countdown").html(new_date);
	$("#countdown").attr("title",new_date);
	if (distance < 0) {
		clearInterval(x);
		$("#countdown").html("Successfully completed!");
	}
	}, 1000);
	// countdown timer END ----------------

	$(".token_sale_wrapper").slick({
		// dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});

	$(".platform_images").slick({
		dots: true,
		lazyLoad: 'ondemand',
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});

	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		
		responsive: [
		  {
			breakpoint: 1200,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true,
			  arrows: true
			}
		  },
		  {
			breakpoint: 992,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			  dots: true,
			  arrows: true
			}
		  },
		  {
			breakpoint: 626,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true,
			  arrows: true
			}
		  }
		]
	  });


	// pie chart work start ------------
	const ctx = document.getElementById('token_chart');
	const myChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: [
				'Play to earn: 20%',
				'Company reserve: 27%',
				'Team: 15%',
				'Advisors: 2%',
				'Private sale: 1%',
				'IDO: 6%',
				'ICO: 6%',
				'Marketing & Social media: 12%',
				'Liquidity pool: 10%',
				'Airdrop: 1%',
			  ],
			  datasets: [{
				label: 'Tokenomics',
				data: [20, 27, 15, 2, 1, 6, 6, 12, 10, 1],
				backgroundColor: [
					'#3D88FB',
                    '#5637C8',
                    '#00D89E',
                    '#ACDF35',
                    '#9116CD',
                    '#3584bd',
                    '#f7f137',
                    '#323c6e',
                    '#deda4e',
                    '#AB3E5B',

					'#ce4a6d',
					'#a3586c',
					'#FFBE40',
					'#EF746F',
					'#AB3E5B',
					'#5C323E',
					'#A82743',
					'#E15E32',
					'#C0D23E',
					'#910f32',
					'#D9D6EF',
					'#B0C1EE',
					'#8593B3',
					'#A28DBD',
					'#16C1C8',
					'#C0EDFC',
					'#A9E0F0',
					'#91C7CE',
					'#759A9F',
					'#49CCCC',
					'#7CD7CF',
					'#AEE1D3',
					'#E1ECD6',
					'#86B1B7'
				],
				hoverOffset: 5,
				borderWidth: 0
			  }]
		},
		options: {
			borderColor: '#B0C1EE',
			borderWidth: 0,
			color: '#ffffff',
			layout: {
				padding: {
					top: 0,
				}
			},
			plugins: {
				legend: {
					display: false,
					position: 'right',
					labels: {
						font: {
							// size: 14,
							family: 'monospace',
							weight: '700',
							lineHeight: '50px'
						}
					},
				},
				tooltip: {
					usePointStyle: true,
					callbacks: {
						labelPointStyle: function(context) {
							return {
								pointStyle: 'triangle',
								rotation: 0
							};
						},
						label: function(context){
							return context.label;
						}
					}

				}
			}
		}
	});
	
	// pie chart work end   ------------

	// newsletter subscription work START ----------------
	$(document).on("click", ".footer_form_email .button" , function(e) {
		let parent_element = $(this);
		let payload_data = {
			"email": $("#register_to_newsletter_email").val(),
			"tags": [6]
		};

		setTimeout(function(){
			$(".message_image").hide();
			$(".message_image").after("<div class='loading'></div>");
		}, 100);

		$.ajax({
			url: 'https://sp.dama.dev/api/v1/subscribers',
			crossDomain: true,
			dataType: 'json',
			type: 'POST',
			contentType: 'application/json',
			headers: {
			   'Authorization': 'Bearer '+sp_token
			},
			data: JSON.stringify(payload_data),
			success: function (result) {
				$(".message_image").show();
				$(".popupbox_content .loading").remove();
				$(".popupbox_title").html("Thank you!");
				$(".popupbox_content .message_title").html("Thank you for your subscription");
				$(".popupbox_content .message_content").html("We will keep you posted about the news");
			},
			error: function (error) {
				let message_image_el = $(".message_image");
				message_image_el.removeClass();
				message_image_el.addClass("message_image error");

				$(".message_image").show();
				$(".popupbox_content .loading").remove();
				$(".popupbox_title").html("Oopps...");
				$(".popupbox_content .message_title").html("Something went wrong..");
				$(".popupbox_content .message_content").html("<span class='error'>Reason: "+ error.responseJSON.message + "</span>.");
				// $(".popupbox_content .accept_button a").text("YES");
				// $(".popupbox_content .accept_button").removeClass('hidden');
				console.log($(this));
			}
		 });
	});
	// newsletter subscription work END   ----------------

// whitelist subscription work START ----------------
$(document).on("click", ".whitelist .agree_tos" , function(e) {
	if ($(this).is(":checked")) {
		$(".whitelist .accept_button .button").addClass("popup_link");
		$(".whitelist .accept_button .button").removeClass("disabled");
	}
	else{
		$(".whitelist .accept_button .button").removeClass("popup_link");
		$(".whitelist .accept_button .button").addClass("disabled");
	}
});

// $(document).on("keyup", "#whitelist_firstname" , function(e) {
// 	if($.trim($("#whitelist_firstname").val()) == ""){
// 		$("#whitelist_firstname").after("<span class='error'>This field must be filled</span>");
// 		$(".whitelist .accept_button .button").removeClass("popup_link");
// 		$(".whitelist .accept_button .button").addClass("disabled");
// 	}
// });

$(document).on("click", ".whitelist .accept_button .button" , function(e) {
	if($(this).hasClass('disabled')){
		return false;
	}

	// if(
	// 	$.trim($("#whitelist_firstname").val()) == "" || 
	// 	$.trim($("#whitelist_lastname").val()) == "" || 
	// 	$.trim($("#whitelist_email").val()) == ""
	// ){
	// 	$("#whitelist_firstname").after("<span class='error'>This field must be filled</span>");
	// 	return false;
	// }

	let parent_element = $(this);
	let payload_data = {
		"email": $("#whitelist_email").val(),
		"first_name": $("#whitelist_firstname").val(),
		"last_name": $("#whitelist_lastname").val(),
		"tags": [8]
	};

	setTimeout(function(){
		$(".message_image").hide();
		$(".message_image").after("<div class='loading'></div>");
	}, 100);

	$.ajax({
		url: 'https://sp.dama.dev/api/v1/subscribers',
		crossDomain: true,
		dataType: 'json',
		type: 'POST',
		contentType: 'application/json',
		headers: {
		   'Authorization': 'Bearer '+sp_token
		},
		data: JSON.stringify(payload_data),
		success: function (result) {
			$(".message_image").show();
			$(".popupbox_content .loading").remove();
			$(".popupbox_title").html("Thank you!");
			$(".popupbox_content .message_title").html("Thank you for your subscription");
			$(".popupbox_content .message_content").html("We will keep you posted about the news");
		},
		error: function (error) {
			let message_image_el = $(".message_image");
			message_image_el.removeClass();
			message_image_el.addClass("message_image error");

			$(".message_image").show();
			$(".popupbox_content .loading").remove();
			$(".popupbox_title").html("Oopps...");
			$(".popupbox_content .message_title").html("Something went wrong..");
			$(".popupbox_content .message_content").html("<span class='error'>Reason: "+ error.responseJSON.message + "</span>.");
			// $(".popupbox_content .accept_button a").text("YES");
			// $(".popupbox_content .accept_button").removeClass('hidden');
			// console.log($(this));
		}
	 });
});
// whitelist subscription work END   ----------------

	$( window ).scroll(function() {
		fly_items();
	});

	$( window ).resize(function() {
		window_size_ratio = $(window).width()/1440;	
	});

	
});