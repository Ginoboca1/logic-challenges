type Input = {
  nombres: string[];
  edades: number[];
};

type Output = {
  id: string;
  nombre: string;
  edad: string;
};

export default function transformador(input: Input) {
  const output: Output[] = [];
  if (input.nombres.length !== input.edades.length) {
    return false;
  }
  input.nombres.forEach((nombre, index) => {
    const id = (index + 1).toString();
    const edad = input.edades[index].toString();
    const item: Output = {
      id,
      nombre,
      edad,
    };

    output.push(item);
  });
  return output;
}

console.log(transformador({ nombres: ["Gino", "Maca"], edades: [24, 28] }));
