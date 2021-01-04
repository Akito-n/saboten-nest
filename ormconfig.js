module.exports = {
  type: "postgres",
  host: "db",
  port: 5432,
  username: "root",
  password: "root",
  database: "saboten",
  entities: ["src/**/*.model.ts"],
  migrations: ["src/migration/*"],
   cli: {
     migrationsDir: "src/migrations",
  }
}
