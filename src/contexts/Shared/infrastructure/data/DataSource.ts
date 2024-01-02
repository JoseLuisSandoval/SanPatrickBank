
import { DataSource } from 'typeorm';
import { UserSchema } from '../../../SPWeb/User/infrastructure/UserSchema';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'isilo.db.elephantsql.com',
	port: 5432,
	username: 'ojcuapxm',
	password: 'J2RiatVNdOwXsbJbz1GmTpMw9nfcC8Lx',
	database: 'ojcuapxm',
	synchronize: true,
	logging: true,
	entities: [UserSchema	],
	subscribers: [],
	migrations: [],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })