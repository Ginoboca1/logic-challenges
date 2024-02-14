type Registry = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
  greeting?: string;
};

const continentes = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const verifyContinents = (devs: Registry[]) => {
  let presentContinents = devs.map((dev) => dev.continent);
  return continentes.every((continent) =>
    presentContinents.includes(continent),
  );
};

const europeJsDevs = (devs: Registry[]) => {
  const jsDevsEurope = devs
    .filter((devs) => devs.language === "JavaScript")
    .filter((dev) => dev.continent === "Europe");
  return jsDevsEurope;
};

const greetings = (devs: Registry[]) => {
  return devs.forEach((dev) => {
    dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
    return dev;
  });
};

const lenguages = (devs: Registry[]) => {
  let languagesPresents = devs.map((dev) => dev.language);
  return languagesPresents;
};

console.log(
  greetings([
    {
      firstName: "Fatima",
      lastName: "A.",
      country: "Algeria",
      continent: "Africa",
      age: 25,
      language: "JavaScript",
    },
    {
      firstName: "Agustín",
      lastName: "M.",
      country: "Chile",
      continent: "Americas",
      age: 37,
      language: "C",
    },
    {
      firstName: "Jing",
      lastName: "X.",
      country: "China",
      continent: "Asia",
      age: 39,
      language: "Ruby",
    },
    {
      firstName: "Laia",
      lastName: "P.",
      country: "Andorra",
      continent: "Europe",
      age: 55,
      language: "Ruby",
    },
    {
      firstName: "Oliver",
      lastName: "Q.",
      country: "Australia",
      continent: "Oceania",
      age: 65,
      language: "PHP",
    },
  ]),
);
