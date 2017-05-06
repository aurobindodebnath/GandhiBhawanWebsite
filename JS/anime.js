//controls welcome

var count=0;
		function show()
		{
			count++;
			if(count<8)
			{
				switch(count)
				{
					case 1:
						document.getElementById("W").style.visibility="visible";
						break;
					case 2:
						document.getElementById("E").style.visibility="visible";
						break;
					case 3:
						document.getElementById("L").style.visibility="visible";
						break;
					case 4:
						document.getElementById("C").style.visibility="visible";
						break;
					case 5:
						document.getElementById("O").style.visibility="visible";
						break;
					case 6:
						document.getElementById("M").style.visibility="visible";
						break;
					case 7:
						document.getElementById("E2").style.visibility="visible";
						break;
				}
				setTimeout(show, 100);
			}
		}
		setTimeout(show, 100);

//controls scroll related parallax
$(window).scroll(function(){
	var wscroll= $(this).scrollTop();

		if(wscroll>($('#about').offset().top- $(window).height()/2))
		{
			$('#head').addClass('spacing');
		}

		if(wscroll>($('#about').offset().top- $(window).height()/4))
		{
			$('.polaroid').addClass('showing');
		}

		if(wscroll>($('#gandhi').offset().top- $(window).height()/2))
		{
			$('#gandhihead').addClass('spacing');
		}


		if(wscroll>($('#message').offset().top- $(window).height()/2))
		{
			$('#messagehead').addClass('spacing');
		}

		if(wscroll>($('#exbh').offset().top- $(window).height()/2))
		{
			$('#exbhhead').addClass('spacing');
		}

		if(wscroll>($('#workshops').offset().top- $(window).height()/2))
		{
			$('#workshopshead').addClass('spacing');
		}

		if(wscroll>($('#next').offset().top- $(window).height()/2))
		{
			$('#nexthead').addClass('spacing');
		}

	if($(window).scrollTop() < $('#about').offset().top)
	{
			$('.welcome').css({
				'transform':'translate(0px,'+ wscroll/2 +'%)'
				});
	}
	if($(window).scrollTop() < ($('#myPage').height()-$(window).height()))
	{
			$('#about').css({
				'transform':'translate(0px,'- wscroll/100 +'%)'
				});
			$('#gandhi').css({
				'transform':'translate(0px,'- wscroll/100 +'%)'
				});
			$('#message').css({
				'transform':'translate(0px,'- wscroll/100 +'%)'
				});
			$('#exbh').css({
				'transform':'translate(0px,'- wscroll/100 +'%)'
				});
			$('#workshops').css({
				'transform':'translate(0px,'- wscroll/100 +'%)'
				});
			$('#next').css({
				'transform':'translate(0px,'- wscroll/100 +'%)'
				});
	}

	});