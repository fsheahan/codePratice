using System;

namespace ProjectEuler
{
	class MainClass
	{
		//Project Euler #1 improved
		Public void Solve(){
			result = SumDivisbleBy(3,999) + SumDivisbleBy(5,999) - SumDivisbleBy(15,999);
		}

		private int SumDivisbleBy(int n, int p){
			return n*(p/n)*((p/n)+1)/2;
		}
		/*Project Euler #2
		public static void Main (string[] args)
		{
			long fib1 = 1;
			long fib2 = 1;
			long result = 0;
			long summed = 0;

			while (result < 4000000) {
				if ((result % 2) == 0) {
					summed += result;
				}

				result = fib1 + fib2;
				fib2 = fib1;
				fib1 = result;
			}
		*/

			Console.WriteLine (result);
		}
	}
}
