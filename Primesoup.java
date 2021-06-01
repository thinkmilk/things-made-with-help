import java.util.ArrayList;

/*
Prints a list of all prime numbers from zero up to one-million.
Purposely made without the use of square root functions. However, due to not using square roots, (and possibly not being as good as I could be at coding),
the list is most likely not 100% accurate. Just randomly checking primes against a list of known prime numbers would sometimes show I also had integers that were
squares of other prime numbers. I could be wrong..
*/
public class Primesoup {


  // compares a scaled list of integers with the current checked integer
  // returns either zero or one based on the current checked integer's factors
  public static int ticker(int firstNumber, int division, int scale) {
    ArrayList<Integer> primeFactors = new ArrayList<Integer>();

    int one = firstNumber % (division+1);
    
    for (int constant = 10; constant < 100 + (scale*(scale-(scale*0.9))-scale); constant += 10) {
      int aDivisor = firstNumber % (division+constant);
      primeFactors.add(aDivisor);
    }

    primeFactors.add(one);


    if (primeFactors.contains(0)) {
      return 0;
    } else {
      return 1;
    }
  }


  // main class for creating the checked integer and looping through a set of integers
  // to create a growing list of prime numbers
  public static ArrayList<Integer> primes() {
    ArrayList<Integer> numbers = new ArrayList<Integer>();

    for (int index = 1; index < 1000000; index++) {

      for (int divisor = 1; divisor < 10; divisor++) {

        int checkPrime = index % divisor;
        

        if (1 < index && index < 9) {
          if (index == divisor) {
            continue;
          }
          if (checkPrime == 0 && divisor != 1) {
            break;
          } else if (numbers.contains(index)) {
            break;
          } else if (checkPrime != 0 && divisor == 9) {
            numbers.add(index);
          }
        }

        if (9 < index && index < 100) {
          if (checkPrime == 0 && divisor == 1) {
            continue;
          } else if (numbers.contains(index)) {
            break;
          }
          if (checkPrime == 0 && divisor > 1) {
            break;
          } else if (checkPrime != 0 && divisor == 9) {
            numbers.add(index);
          }
        }

        if (100 < index) {
          if (100 < index && index < 10000) {
            int allPrimes = ticker(index,divisor,0);
            if (numbers.contains(index)) {
              break;
            }
            if (allPrimes == 0) {
              break;
            } else if (allPrimes != 0 && divisor == 9) {
              numbers.add(index);
            }
          }
          if (10000 < index && index < 100000) {
            int allPrimes = ticker(index,divisor,100);
            if (numbers.contains(index)) {
              break;
            }
            if (allPrimes == 0) {
              break;
            } else if (allPrimes != 0 && divisor == 9) {
              numbers.add(index);
            }
          }
          if (100000 < index && index < 1000000) {
            int allPrimes = ticker(index,divisor,1000);
            if (numbers.contains(index)) {
              break;
            }
            if (allPrimes == 0) {
              break;
            } else if (allPrimes != 0 && divisor == 9) {
              numbers.add(index);
            }
          }
        }
      }
    }
    System.out.println(numbers.toString());
    return numbers;
  }

  public static void main(String[] args) {

    ArrayList<Integer> listOfPrimes = Primesoup.primes();

    System.out.println(listOfPrimes.contains(31579));

  }
}
