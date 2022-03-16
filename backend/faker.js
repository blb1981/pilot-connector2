const fs = require('fs')
const { faker } = require('@faker-js/faker')

const jobs = []

for (let i = 0; i < 100; i++) {
  jobs.push({
    id: faker.datatype.number(100),
    company: faker.company.companyName(),
    headline: `${faker.address.cityName()} to ${faker.address.cityName()}`,
    description: faker.lorem.paragraphs(3),
    startDate: faker.date.soon(50),
    createdAt: faker.date.recent(),
  })
}

fs.writeFileSync('backend/db.json', JSON.stringify({ jobs }))
