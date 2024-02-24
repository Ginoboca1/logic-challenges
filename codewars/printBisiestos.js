//Años bisiestos

/*
    Si un año es divisible por 4 y no es divisible por 100, se considera bisiesto.
    Si un año es divisible por 400, se considera bisiesto.
    Si un año es divisible por 100 pero no es divisible por 400, entonces no es bisiesto.
*/

const printBisiestos = (año) => {
  currentYear = año + 1;
  añosBisiestos = 0;

  while (añosBisiestos < 30) {
    if (
      (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
      (currentYear % 100 === 0 && currentYear % 400 === 0)
    ) {
      console.log(currentYear);
      añosBisiestos++;
    }
    currentYear++;
  }
};

printBisiestos(2024);
