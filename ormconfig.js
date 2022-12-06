module.exports = {
    type: 'postgres',
    host: 'db',//|| 'db' || localhost
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'cursonestjs', // || 'postgres' || "cursonestjs"
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};