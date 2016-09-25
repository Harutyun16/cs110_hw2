const factorial = function(n)
		{
    			if(n === 0)
				{
    				   return 1; 
   				}

  			return n * factorial(n-1);
 		};
 const a=5;
 console.log("Factorial of "+ a + " is equal to "+factorial(a));
