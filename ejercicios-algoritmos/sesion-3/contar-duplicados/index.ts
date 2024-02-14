export default function contarDuplicados(texto: string): number {
    const txt = texto.toLowerCase();
    const chartRepeat = new Set();
    const chartUnique = new Set();
    for (let i = 0; i < txt.length; i++) {
      let chart = txt[i];
      if (chartUnique.has(chart)) {
        chartRepeat.add(chart);
      } else {
        chartUnique.add(chart);
      }
    }
  
    return chartRepeat.size;
  }
  
  console.log(contarDuplicados("abc"));
