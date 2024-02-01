import { Knex } from "knex";
import knex from 'knex';

interface KnexConfig {
  [key: string]: Knex.Config; 
}

const config: KnexConfig = {
  development: {
    client: 'pg',  // Utilisation de PostgreSQL
    connection: {
      database: 'my_dev_db',
      user: 'dev_user',
      password: 'dev_password'
    },
    migrations: {
      directory: './src/migrations'
    },
    seeds: {
      directory: './src/seeds'
    }
  },

  staging: {  // Configuration de l'environnement de staging 
    client: 'pg',
    connection: {
      database: 'my_staging_db',
      user: 'staging_user',
      password: 'staging_password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/migrations'
    }
  },

  production: { // Configuration de l'environnement de production
    client: 'pg',
    connection: {
      database: 'my_production_db',
      user: 'prod_user',
      password: 'prod_password',
      host: process.env.HOST, // Ajoutez l'hôte si nécessaire
      port: 5432 // Ajoutez le port si nécessaire
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/migrations'
    }
  }
};


const db = knex(config.development); // Utilisez l'environnement approprié

export default db;
