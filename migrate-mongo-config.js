// In this file you can configure migrate-mongo
const dotenv = require("dotenv");

dotenv.config({path: "app/config/devConfig.env"});

const HOST = process.env.HOST;
const MONGO_PORT = process.env.MONGO_PORT;
const DATABASE = process.env.DATABASE;
const MIGRATION_DIR = process.env.MIGRATION_DIR;

const config = {
  mongodb: {
    // TODO Change (or review) the url to your MongoDB:
    // url: "mongodb://localhost:27017",
    url: `mongodb://${HOST}:${MONGO_PORT}`,

    // TODO Change this to your database name:
    // databaseName: "circleiq",
    databaseName: `${DATABASE}`,

    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true, // removes a deprecating warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    }
  },

  // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  // migrationsDir: "app/migrations",
  migrationsDir: `app/${MIGRATION_DIR}`,

  // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
  changelogCollectionName: "changelog",

  // The file extension to create migrations and search for in migration dir 
  migrationFileExtension: ".js"
};

// Return the config as a promise
module.exports = config;
