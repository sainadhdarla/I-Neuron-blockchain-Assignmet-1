function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }
  else
  {
    for(let x = 2; x < n; x++)  
    // prime (divisible by itself or 1)
    {
     if(n % x === 0)
    {
    return false;
    }
    }
     return true;  
   }
}

console.log(test_prime(20));