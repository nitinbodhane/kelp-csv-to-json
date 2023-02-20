const faker = require('faker');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

// Define the headers for the CSV file
const csvWriter = createCsvWriter({
  path: "users.csv",
  header: [
    { id: "name.firstName", title: "First Name" },
    { id: "name.lastName", title: "Last Name" },
    { id: "age", title: "Age" },
  ],
});

// Generate random data for 100 users
const data = [];
for (let i = 0; i < 100; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const age = Math.floor(Math.random() * 50) + 20; // Age between 20 and 69
  data.push({
    name: {
      firstName,
      lastName,
    },
    age,
    address: {
      line1: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      zipcode: faker.address.zipCode(),
    },
    gender: faker.name.gender(),
    phone: {
      mobile: {
        number: faker.phone.number(),
      },
    },
  });
}

// Write the data to the CSV file
csvWriter
  .writeRecords(data)
  .then(() => console.log("CSV file generated successfully."))
  .catch((err) => console.error(err));
