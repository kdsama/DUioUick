new WOW().init();

  $(document).ready(function() {
  		
  	    var availableTags = [
      "John Mayer",
      "Skrillex",
      "Steven ",
      "Jordan",
      "Luis",
      "Suarez",
      "Paul",
      "Pogba",
      "Roberto",
      "Firmino",
      "Philip",
      "Coutinho",
      "Ram",
      "Raju",
      "David"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    $('ul.ui-autocomplete.ui-menu').css('display', 'flex');
    $('ul.ui-autocomplete.ui-menu').css('flex-direction', 'column');
    var x = $( "#datepicker" ).val();
    var y = $( "#datepicker1" ).val();

  
    $( "#datepicker" ).datepicker({  
   minDate:0,
   changeMonth: true,
  
changeYear: true,
showButtonPanel: true,
dateFormat: 'dd MM yy',
onClose: function(dateText, inst)
{	
    // var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
    // var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
    // var date = $("#ui-datepicker-div .ui-datepicker-date :selected").val();
    // $(this).datepicker('setDate', new Date(year, month, 1));
}

});
    $("#datepicker1").datepicker({ minDate:0,changeMonth: true,
changeYear: true,

showButtonPanel: true,
dateFormat: 'dd MM yy',
onClose: function(dateText, inst)
{
    // var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
    // var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
    // var date = $("#ui-datepicker-div .ui-datepicker-date :selected").val();
    // $(this).datepicker('setDate', new Date(year, month, 1));
}
});

    $('select').on('change', function(){
    	if($(this).children('option:selected').text() == 'Multiple'){
    		
            $('.dis').prop('disabled', false);

    	}
   	else{
    		$('.dis').prop('disabled',true);
    	}
    });
    $('#behavior').on('click',function() {
    	

    	if ($(this).children('option:selected').text() == 'Functional Skills'){
    		if($('.radioBtns').is(':empty')){
    		
    		// html = '<div class = "label-inputs"><label for ="Business">Engineering</label>'+'<br> <label for = "People"> Sales</label> <br> <label for ="Process">  Design</label> </div>'+ '<div class = "label-inputs-inputs"> <input type="radio"  name = "BSC" type="radio"  id="Business" checked><input name = "BSC" type="radio" type="radio" id=" People"> <input name = "BSC" type="radio" id="Process"></div>' ;
    			html =  '<div class = "label-inputs"><label for ="Engineering"><input name = "BSC" type="radio" type="radio" id=" Engineering">Engineering </label>'+' <br><label for = "Design"><input name = "BSC" type="radio" type="radio" id=" Design"> Design</label><br><label for ="People">  <input name = "BSC" type="radio" id="People">  People </label> </div>';
          $('.radioBtns').append(html);  
    			// $('.radioBtns').css('width','18vw');		
    	
    	
    		}
    		else{
    			$('.radioBtns').empty();
    			// html = '<div class = "label-inputs"><label for ="Business">Engineering</label>'+'<br> <label for = "People"> Sales</label> <br> <label for ="Process">  Design</label> </div>'+ '<div class = "label-inputs-inputs"> <input type="radio"  name = "BSC" type="radio"  id="Business" checked><input name = "BSC" type="radio" type="radio" id=" People"> <input name = "BSC" type="radio" id="Process"></div>' ;
    			 html =  '<div class = "label-inputs"><label for ="Engineering"><input name = "BSC" type="radio" type="radio" id=" Engineering">Engineering </label>'+' <br><label for = "Design"><input name = "BSC" type="radio" type="radio" id=" Design"> Design</label><br><label for ="People">  <input name = "BSC" type="radio" id="People">  People </label> </div>';
          $('.radioBtns').append(html);  		

    			// $('.radioBtns').children()
    		
    		}

    	}
    	else if ($(this).children('option:selected').text() == 'BSC Category'){
    		if($('.radioBtns').is(':empty')){

    		// html = '<div class = "label-inputs"><label for ="Business">Business</label>'+'<br> <label for = "People"> People</label> <br> <label for ="Process">  Process </label> </div>'+ '<div class = "label-inputs-inputs"> <input type="radio"  name = "BSC" type="radio"  id="Business" checked><input name = "BSC" type="radio" type="radio" id=" People"> <input name = "BSC" type="radio" id="Process"></div>' ;
    		// $('.radioBtns').append(html);

    		
    		
    	
    	}
    	else{
    		
    		$('.radioBtns').empty();
    		
    		html =  '<div class = "label-inputs"><label for ="Business"><input name = "BSC" type="radio" type="radio" id=" Business">Business </label>'+' <br><label for = "People"><input name = "BSC" type="radio" type="radio" id=" People"> People</label><br><label for ="Process">  <input name = "BSC" type="radio" id="Process">  Process </label> </div>';
 
    		$('.radioBtns').append(html);  


    	
    		
    		// $('.radioBtns').children('label').css('text-decoration','None').css('background-color','white').css('vertical-align','top').css('color','red');
    	}
    	}
    });


  } );