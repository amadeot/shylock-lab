$(document).ready(function(){
	console.log('linked!');
	var ducats = 10000
	var submit = function(event){
		if (event.keyCode===13){//hit enter
			console.log('great job pressing enter');//confirm
			$value = $('#prompt').val()//get value variable
			console.log($value)//confirm
			$createLi=$('<li>');
			$createLi.text($value);
			$('#log').append($createLi);
			$("#prompt").val("");
			var respond=function(response){
				$createLiResponse=$('<li>');
				$createLiResponse.text(response)
				$('#log').append($createLiResponse);}
			if ($value==='purse'){
				return respond('*ShylockBot pulls out his purse containing '+ducats+' ducats*')
			}
		}
	};
	var $input = $('inputBox')
	$(document).on('keypress',submit)
}); 