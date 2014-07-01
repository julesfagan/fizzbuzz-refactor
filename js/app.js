$(document).ready(function(){

	var fizzBuzz = function(numberToCalculate) {
	
		if($.isNumeric(numberToCalculate) && numberToCalculate >= 1 && numberToCalculate <= 100)
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
		else if (numberToCalculate == NaN)
		{
			alert("Please enter a number");
		}
		else if (numberToCalculate%1 != 0)
		{
			alert("Decimal numbers not allowed.")
		}
		else
		{
			alert("Please enter a number between 1 and 100.")
		}
	}
	
	var number = +prompt("Please enter a number between 1 and 100");	

	fizzBuzz(number);

	$("#start-over").click(function(){
		location.reload();
	});

	});
