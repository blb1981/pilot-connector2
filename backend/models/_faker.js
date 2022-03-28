const { faker } = require('@faker-js/faker')
const sequelize = require('../database/db')

const User = require('./User')
const Job = require('./Job')

let users = []
let jobs = []

for (let i = 0; i < 100; i++) {
	const newUser = {
		companyContact: faker.name.firstName() + ' ' + faker.name.lastName(),
		companyName: faker.company.companyName(),
		contactMethod: 'email',
		phone: faker.phone.phoneNumber(),
		email: faker.internet.email(),
		password: 'password',
	}
	users.push(newUser)
}

for (let i = 0; i < 500; i++) {
	const newJob = {
		headline: `${faker.address.cityName()} to ${faker.address.cityName()}, ${faker.datatype.number(10)} days.`,
		description: faker.lorem.sentences(4),
		startDate: faker.date.future(30),
		UserId: Math.floor(Math.random() * 100) + 1,
	}
	jobs.push(newJob)
}

const createData = async () => {
	try {
		await sequelize.sync({ force: true })
		await User.destroy({
			where: {},
			force: true,
		})
		await Job.destroy({ where: {}, force: true })
		await User.bulkCreate(users)
		await Job.bulkCreate(jobs)
		console.log('SUCCESS! Data created')
	} catch (error) {
		console.log('ERROR!!!')
		console.log(error)
	}
}

createData()
