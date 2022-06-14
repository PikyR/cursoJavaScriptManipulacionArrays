const users = [
  { userID: 1, username: "Pky", attributes: ["attr", "attr1"] },
  { userID: 2, username: "Pky2", attributes: ["2attr"] },
  { userID: 3, username: "Pky3", attributes: ["3attr", "3attr1"] },
  { userID: 4, username: "Pky4", attributes: ["4attr", "4attr1"] },
];

const rta = users.map((user) => user.attributes).flat();
rta; // ["attr", "attr1", "2attr", "3attr", "3attr1", "4attr", "4attr1"];

const rta2 = users.flatMap((user) => user.attributes);
rta2; // ["attr", "attr1", "2attr", "3attr", "3attr1", "4attr", "4attr1"];

// RETO
const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const rta3 = 
Object
  .values(calendars)
  .flatMap(calendar => {
    return calendar.map(date => date.startDate);
  })
;
rta3;
// [
//   2021-02-01T18:00:00.000Z,
//   2021-02-01T20:00:00.000Z,
//   2021-02-01T15:00:00.000Z,
//   2021-02-01T12:00:00.000Z
// ]