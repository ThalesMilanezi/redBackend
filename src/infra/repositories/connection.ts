import { ConnectionNotFoundError, DataSource } from 'typeorm';
import { BrothEntity } from '../entities/broth.entity';
import { ProteinEntity } from '../entities/protein.entity';
import { CustomBaseEntity } from '../entities/custom-base-entity';

export class PgConnection {
  private static instance?: PgConnection;
  private connection?: DataSource;

  private constructor() {}

  async dbConnection(): Promise<DataSource> {
    if (!this.connection) {
      this.connection = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 10000,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        synchronize: true,
        logging: true,
        entities: [BrothEntity, ProteinEntity, CustomBaseEntity],
        subscribers: [],
        migrations: [],
      });
      await this.connection
        .initialize()
        .then(() => {
          console.log('Data Source has been initialized!');
        })
        .catch((err) => {
          console.error('Error during Data Source initialization', err);
          throw err;
        });
    }
    return this.connection;
  }

  public static getInstance(): PgConnection {
    if (!PgConnection.instance) {
      PgConnection.instance = new PgConnection();
    }
    return PgConnection.instance;
  }

  async disconnect(): Promise<void> {
    if (!this.connection) {
      throw new ConnectionNotFoundError('Connection lost with database');
    }
    await this.connection.destroy();
    this.connection = undefined;
  }
}
