/*
 * Crea una función que sume 2 números y retorne su resultado pasados
 * unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que
 *   debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma
 *   asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */

const sum = (num1, num2, time) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(num1 + num2);
    }, time * 1000);
  });
};

sum(2,3,2).then((result) => {
  console.log(`Promise result: ${result}`);
});
