import { db, DataTypes } from '@Application/database';

export default db.define('pacient', {
	name: DataTypes.STRING,
	surname: DataTypes.STRING,
	date: DataTypes.DATE,
});

