/*
 * Reto #4
 * ÁREA DE UN POLÍGONO

 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada type.
 *
*/

// const calcArea = (polygon) => {
//   switch (polygon.type) {
//     case "Triangulo":
//       area = (polygon.altura * polygon.base) / 2;
//       return area;
//     case "Cuadrado":
//       area = polygon.lado * polygon.lado;
//       return area;
//     case "Rectangulo":
//       area = polygon.base * polygon.altura;
//       return area;
//   }
// };

//Most efficient way

const calcArea = (polygon) => {
  if (!polygon.hasOwnProperty("type")) {
    throw new Error("The polygon provided doesnt have type property");
  }

  const methods = {
    Triangulo: () => (polygon.altura * polygon.base) / 2,
    Cuadrado: () => polygon.lado * polygon.lado,
    Rectangulo: () => polygon.base * polygon.altura,
  };

  if (polygon.type in methods) {
    return methods[polygon.type]();
  } else {
    throw new Error("Invalid polygon type");
  }
};

const triangulo = { type: "Triangulo", base: 5, altura: 3 };
const cuadrado = { type: "Cuadrado", lado: 4 };
const rectangulo = { type: "Rectangulo", base: 6, altura: 4 };

const areaTriangulo = calcArea(triangulo);

const areaCuadrado = calcArea(cuadrado);

const areaRectangulo = calcArea(rectangulo);

console.log(areaTriangulo);
console.log(areaCuadrado);
console.log(areaRectangulo);
