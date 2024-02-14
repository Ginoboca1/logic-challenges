export default function letrasPorNumeros(string: string): string {
  const cleanedString = string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");

  // Función auxiliar para obtener el índice de una letra en el alfabeto
  const getAlphabetIndex = (char: string): number => {
    return char.charCodeAt(0) - "a".charCodeAt(0) + 1;
  };

  // Reemplazar letras por sus índices en el alfabeto
  const resultArray = Array.from(cleanedString, (char) => {
    // Si el carácter no es una letra, mantenerlo sin cambios
    if (!/[a-z]/.test(char)) {
      return char;
    }
    // Obtener el índice en el alfabeto y convertirlo a string
    const index = getAlphabetIndex(char);
    return index.toString();
  });

  // Unir el array resultante para obtener el string final
  const resultString = resultArray.join("");

  return resultString;
}
