const numbers = [1, 2, 3, 4, 5, 6];

// Ejemplo sin some()
let respuesta = false;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  if (number % 2 === 0) {
    respuesta = true;
    break;
  }
}
respuesta; // true

// Ejemplo con some()
const otraRespuesta = numbers.some((item) => item % 2 === 0);
otraRespuesta; // true

const orders = [
  {
    costumerName: "Nico",
    total: 22,
    delivered: true,
  },
  {
    costumerName: "Loco",
    total: 33,
    delivered: true,
  },
  {
    costumerName: "Pepe",
    total: 44,
    delivered: false,
  },
  {
    costumerName: "Pepe",
    total: 4444,
    delivered: true,
  },
  {
    costumerName: "Rena",
    total: 88,
    delivered: false,
  },
  {
    costumerName: "Trico",
    total: 333,
    delivered: true,
  },
  {
    costumerName: "Merito",
    total: 1,
    delivered: false,
  },
  {
    costumerName: "Zooo",
    total: 99,
    delivered: true,
  },
];

const ultimaRespuesta = orders.some((item) => {
  return item.delivered;
});
ultimaRespuesta; // true

// Ejemplo con fechas
const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 20, 30),
};

const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate }
    );
  });
};

const rtaOverlap = isOverlap(newAppointment);
rtaOverlap; // true
