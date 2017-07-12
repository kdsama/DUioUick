function validate() {
	console.log("entered");
	title = document.forms["registration"]["title"].value;
	dp1 = document.forms["registration"]["datepicker"].value;
	dp2 = document.forms["registration"]["datepicker1"].value;
	d1 = Date.parse(dp1);
	d2 = Date.parse(dp2);





	$('.underline').children('.error').empty();
	// $('.date-time').children('span').empty();
	$('.dateInput').empty();
	$('.userInput').empty();
	$("#title").on('keyup',function() {
			$(".error").empty();
			

		});
	$("#tags").on('keyup',function() {
			$(".userInput").empty();
			

		});
	$("#datepicker").on('change',function() {
			$(".dateInput").children().empty();
			

		});
	$("#datepicker1").on('change',function() {

			$(".dateInput").children().empty();
			

		});


	if (title == ''){
		// console.log('title not present');
		// connsole.log($('.underline').first());
		$(".error").append('Title Field should not be empty').css('color','red');
		
		// $('.underline').next().ScrollTo({
  //   	duration: 2000,
  //   	easing: 'linear'
		// });
		return false;
	}

	if (d1>d2){
		console.log('entered Date Picker');
		$('.dateInput').append('<span>To-Date should be smaller than from Date</span>').css('color','red');
		return false ;
	} 
	else if (dp1 == 'June 2017' || dp2 == 'June 2017'){
		$('.dateInput').append('<span>Both the dates are needed for processing</span>').css('color','red');
		return false ;
	}
	user = document.forms["registration"]["user"].value;

	if (user == "")
	{
		console.log('user value is ',user);
		$(".userInput").append("<br> <span id = 'userInput'> Atleast one User should be entered</span>").css('color','red').css('padding-left','2vw');

		return false ;
	}



	


}