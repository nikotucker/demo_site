/*******************************************************************************************************************************/
/* Porfolio Handling ***********************************************************************************************************/
/*******************************************************************************************************************************/
if($('body').hasClass('page-portfolio')) {
    var portfolio_elements = document.getElementsByClassName("column");
    var i;

    // Full-width images
    function column_one() {
        for (i = 0; i < portfolio_elements.length; i++) {
            portfolio_elements[i].style.flex = "100%";
        }
    }

    // Two images side by side
    function column_two() {
        for (i = 0; i < portfolio_elements.length; i++) {
            portfolio_elements[i].style.flex = "50%";
        }
    }

    // three images side by side
    function column_three() {
        for (i = 0; i < portfolio_elements.length; i++) {
            portfolio_elements[i].style.flex = "calc(100%/3)";
        }
    }

    // Four images side by side
    function column_four() {
        for (i = 0; i < portfolio_elements.length; i++) {
            portfolio_elements[i].style.flex = "25%";
        }
    }

    // Five images side by side
    function column_five() {
        for (i = 0; i < portfolio_elements.length; i++) {
            portfolio_elements[i].style.flex = "20%";
        }
    }

    $('.grid-buttons a').click(function() { return false; });
}


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Embedded Gallery with Thumbs ------------------------------------------------------------------------------------------ */
/* ----------------------------------------------------------------------------------------------------------------------- */
if($('body').hasClass('page-index') && $('.homepage-banner').length) {
	$('.homepage-banner').addClass('embedded-gallery');
}

if($(".embedded-gallery").length) {
	$('.embedded-gallery').each(function() {
		var gallery = $(this);

		$(gallery).wrap('<div class="embedded-gallery-wrap"></div>');
        $(gallery).wrapInner('<div class="stage"></div>');

		// ---------------------------------
		// Gallery, Arrows, and Thumbs Setup
		// ---------------------------------
		if($(gallery).find('.slide').length>2) {
			$(gallery).prepend('<a href="#" class="prev-arrow"><span>Prev</span></a><a href="#" class="next-arrow"><span>Next</span></a>');
			if($(gallery).attr('data-type') != 'chromeless') {
				$(gallery).after('<div class="embedded-gallery-nav-wrapper"><ul class="embedded-gallery-nav"></ul></div>');
				$(gallery).addClass('has-embedded-gallery-nav');
			}
		}

		var prev_link = ($(gallery).closest('.embedded-gallery-wrap').find('.prev-arrow').length?$(gallery).closest('.embedded-gallery-wrap').find('.prev-arrow'):false);
		var next_link = ($(gallery).closest('.embedded-gallery-wrap').find('.next-arrow').length?$(gallery).closest('.embedded-gallery-wrap').find('.next-arrow'):false);
		var gallery_nav = ($(gallery).closest('.embedded-gallery-wrap').find('.embedded-gallery-nav').length?$(gallery).closest('.embedded-gallery-wrap').find('.embedded-gallery-nav'):false);

		var timeout_speed = parseInt($(gallery).attr("data-timeout"));

		// set first slide to be "current" and "no-slideshow" if not enough slides for slideshow
		if($(gallery).find(".stage .slide:not(.placeholder)").length == 1) $(gallery).find(".stage .slide:not(.placeholder)").addClass('current').addClass('no-slideshow');

		$(gallery).find(".stage").cycle({
			fx:     $(gallery).attr("data-fx"),
			speed:  $(gallery).attr("data-speed"),
			timeout: timeout_speed,
			prev:   $(prev_link),
			next:   $(next_link),
			slideExpr: ".slide:not(.placeholder)",
			before: function(currSlideElement, nextSlideElement, options, forwardFlag) {
				if($(currSlideElement).find('iframe').length) {
					if($(currSlideElement).find('iframe').attr('src').indexOf('vimeo') >= 0) {
						if(vimeo_js_loaded) {
							var pause_iframe = $(currSlideElement).find('iframe')[0];
							var pause_player = new Vimeo.Player(pause_iframe);
							if (typeof pause_player.pause == 'function') {
								pause_player.pause();
							}
						}
					} else {
						if(youtube_iframe_api_is_ready) {
							var player_id = $(currSlideElement).find('iframe').closest('.ss-youtube-vimeo-player').attr('data-id');
							if (typeof yt_players[player_id].pauseVideo == 'function') {
								yt_players[player_id].pauseVideo();
							}
						}
					}
				}

				$(gallery).find(".slide.current").removeClass("current");
				$(nextSlideElement).addClass("current");

				$(window).resize();

			},
			after: function(currSlideElement, nextSlideElement, options, forwardFlag) {
				if($(gallery).find('.slide.placeholder').find('.ss-youtube-vimeo-player').length) {
					var vheight = $(gallery).find('.slide').not('.placeholder').find('.ss-youtube-vimeo-player').first().height();
					var vwidth = $(gallery).find('.slide').not('.placeholder').find('.ss-youtube-vimeo-player').first().width();
					var percent = (vheight/vwidth) * 100;
					$(gallery).find('.slide.placeholder').css({'height':'0','padding-top':percent+'%'}).find('.ss-youtube-vimeo-player').hide();
				}

				$(window).resize();
			},
			pager:  $(gallery_nav),
			// callback fn that creates a thumbnail to use as pager anchor
			pagerAnchorBuilder: function(idx, slide) {
				if($(gallery).attr('data-type') != 'chromeless') {
					if($(slide).find('.ss-youtube-vimeo-player').length) {
						var img_src = $(slide).find(".ss-youtube-vimeo-player").css("background-image").slice(4, -1).replace(/"/g, "")
						console.log(img_src);
					} else {
						var img_src = $(slide).find(".image").find("img").attr("src");
					}
					return '<li><a href="#"><img src="' + img_src + '" alt="Slide #'+(idx+1)+' Anchor Link" /></a></li>';
				}
			},
			slideResize: false,
			containerResize: true
		}).addClass('cycle-loaded');

		var thumb_height = $(gallery).attr('data-thumb-height');
		if(thumb_height) {
			$(gallery_nav).find("li a").each(function() {
				$(this).css({"height":thumb_height+"px"});
			});
		}

		// ----------------
		// Caption Handling
		// ----------------
		$(".next-arrow, .prev-arrow").click(function() {
			$(gallery).find(".slide").not(".current").stop(1,1).find(".caption").slideDown("fsat");
			$(gallery).find(".slide.current").find(".caption").stop(1,1).slideDown("fast");
		});
		$(gallery).find(".slide .caption").hide();
		$(gallery).hover(
			function() {
				$(gallery).find(".slide.current").find(".caption").stop(1,1).slideDown("fast");
			},
			function() {
				$(gallery).find(".slide.current").find(".caption").stop(1,1).slideUp("fast");
			}
		);

		// -----------------------
		// Thumb Wrapper Scrolling
		// -----------------------
		var embedded_gallery = $(gallery);
		var div = $(gallery_nav).closest('.embedded-gallery-nav-wrapper');
		var ul = $(gallery_nav);
		var divWidth = div.width();
		var lastLi = ul.find("li:last-child");

		$(div).css({"overflow":"hidden"});

		var deviceAgent = navigator.userAgent.toLowerCase();
		var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
		if (agentID) {
			$(div).touchwipe({
				wipeLeft: function() { div.stop(1,1).animate({scrollLeft: div.scrollLeft()+350}, "slow"); },
				wipeRight: function() {  div.stop(1,1).animate({scrollLeft: div.scrollLeft()-350}, "slow"); },
				wipeUp: function() {  },
				wipeDown: function() {  },
				min_move_x: 20,
				min_move_y: 20,
				preventDefaultEvents: false
			});

			$(embedded_gallery).touchwipe({
				wipeLeft: function() { $(embedded_gallery).find(".next-arrow").click(); },
				wipeRight: function() {  $(embedded_gallery).find(".prev-arrow").click(); },
				wipeUp: function() {  },
				wipeDown: function() {  },
				min_move_x: 20,
				min_move_y: 20,
				preventDefaultEvents: false
			});
		} else {
			$(div).mousemove(function(e) {
				var photoThumbOffset = $(div).offset();
				var relativeThumbPosition = e.pageX-photoThumbOffset.left;

				var ulWidth = lastLi[0].offsetLeft + lastLi.outerWidth();

				var left = (e.pageX - div.offset().left) * (ulWidth-divWidth) / divWidth;
				div.scrollLeft(left);
			});
		}

		$(gallery_nav).waitForImages(function() {
			var offset = 0;
			$(ul).find("li").each(function() {
				$(this).css({"left":offset+"px"});
				offset = offset + $(this).width()+parseInt($(this).css("padding-left").replace("px",""))+parseInt($(this).css("padding-right").replace("px",""));

				if($(this).find("img").height() < $(this).find("a").height()) {
					$(this).find("img").css({
						"height":"100%",
						"width":"auto"
					});
				}
			});

			$(ul).fadeIn("slow");
		});


		// Fullscreen mode
		if(typeof $(gallery).attr('data-has-fullscreen-mode') !== 'undefined' && $(gallery).attr('data-has-fullscreen-mode') == 1) {
			$(gallery).prepend('<div class="inline-gallery-fullscreen-mode-message">Press <span>Esc</span> to exit full screen</div><a href="#" class="inline-gallery-fullscreen-toggle-link" title="Enter Fullscreen Mode">Fullscreen</a>');
		}
	});

	$(document).on('click','.inline-gallery-fullscreen-toggle-link',function() {
		$(this).c
		var gallery_wrap = $(this).closest('.embedded-gallery-wrap');
		
		if($(gallery_wrap).hasClass('fullscreen-mode')) {
			$('.inline-gallery-wrap.has-gallery-in-fullscreen-mode').removeClass('has-gallery-in-fullscreen-mode').html('').append($(gallery_wrap));
			$(this).attr('title','Enter Fullscreen Mode');
			$('body').removeClass('has-fullscreen-inline-gallery');

		} else {
			$(gallery_wrap).closest('.inline-gallery-wrap').addClass('has-gallery-in-fullscreen-mode');
			$('body').prepend($(gallery_wrap)).addClass('has-fullscreen-inline-gallery');
			$(gallery_wrap).clone().appendTo($('.inline-gallery-wrap.has-gallery-in-fullscreen-mode'));
			$(this).attr('title','Exit Fullscreen Mode');
		}
		if($('.embedded-gallery-wrap.focused').length) $('.embedded-gallery-wrap.focused').removeClass('focused');
		$(this).closest('.embedded-gallery-wrap').addClass('focused');
		$(gallery_wrap).toggleClass('fullscreen-mode');
		return false;
	});

	if($('.inline-gallery-fullscreen-toggle-link').length) {
		$.when(
			add_js(shared_root+'/js/jquery/jquery.tipsy/jquery.tipsy.js',1),
		).done(function() {
			if($(window).width() > 1024) {
				$(".inline-gallery-fullscreen-toggle-link").tipsy({
					live: true,
					html: true,
					gravity: 'e'
				});
			}
		});
		add_css(shared_root+'/js/jquery/jquery.tipsy/jquery.tipsy.css');		
	}

	// left/right/escape arrow handling
	$('.embedded-gallery-wrap .prev-arrow, .embedded-gallery-wrap .next-arrow').click(function(e) {
		if($('.embedded-gallery-wrap.focused').length) $('.embedded-gallery-wrap.focused').removeClass('focused');
		$(this).closest('.embedded-gallery-wrap').addClass('focused');
	});

	$(document).on('click','body',function(e) {
		if($('.embedded-gallery-wrap.focused').length) $('.embedded-gallery-wrap.focused').removeClass('focused');
		if($(e.target).closest('.embedded-gallery-wrap').length) {
			$(e.target).closest('.embedded-gallery-wrap').addClass('focused');
		}
	});

	$(document).on('keydown','body',function(e) {
		// arrow left
		if(e.keyCode == 37 && $('.embedded-gallery-wrap.focused').length) {
			$('.embedded-gallery-wrap.focused').find('.stage').cycle('prev');
		}

		// arrow right
		if(e.keyCode == 39 && $('.embedded-gallery-wrap.focused').length) {
			$('.embedded-gallery-wrap.focused').find('.stage').cycle('next');
		}

		// escape
		if(e.keyCode == 27 && $('.inline-gallery-wrap.has-gallery-in-fullscreen-mode').length) {
			$('.embedded-gallery-wrap.fullscreen-mode .inline-gallery-fullscreen-toggle-link').click();
		}
	});
	
}