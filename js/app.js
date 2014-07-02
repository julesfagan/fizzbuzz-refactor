$(document).ready(function(){
	
	//Closure function
	function fizzBuzzConstructor(input) {
		var numberToCalculate = input; //numberToCalculate is now a private variable

		while ((numberToCalculate == NaN) || (numberToCalculate%1 != 0) || (numberToCalculate < 1) || (numberToCalculate > 100) || !($.isNumeric(numberToCalculate)) )
		{
				numberToCalculate = prompt("Please enter a number between 1 and 100 (no decimals)");
				if(numberToCalculate == "exit")
				{
					return function()
					{
						return;
					}
				}	
				numberToCalculate = +numberToCalculate;
		}
		return function() 
		{
			$(".outer").empty();

			for(i=1;i<=numberToCalculate;i++)
			{
				if((i%3 == 0) && (i%5 != 0))
				{
					//print “fizz”
					$(".outer").append("<li><ul class=\"inner fizz\"><li class=\"fizz\">" + i + "</li><li class=\"fizz\"> \"fizz\" (divisible by 3)</li></ul></li>");
					$(".inner li")
				}

				else if ((i%3 != 0) && (i%5 == 0))
				{
					//print “buzz”
					$(".outer").append("<li><ul class=\"inner buzz\"><li class=\"buzz\">" + i + "</li><li class=\"buzz\"> \"buzz\" (divisible by 5)</li></ul></li>");
				}

				else if ((i%3 == 0) && (i%5 == 0))
				{
					//print “fizz buzz”
					$(".outer").append("<li><ul class=\"inner\"><li class=\"fizzbuzz\">" + i + "</li><li class=\"fizzbuzz\"> \"fizz buzz\" (divisible by 3 & 5)</li></ul></li>");
				}

				else
				{
					//print just the number
					$(".outer").append("<li><ul class=\"inner\"><li>" + i + "</li></ul></li>");
				}
			}
		}
	}
	var input;
	var fizzBuzz = fizzBuzzConstructor(input);
	fizzBuzz();

	$("#start-over").click(function(){
		location.reload();
	});
});