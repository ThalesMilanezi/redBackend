import { ConnectionNotFoundError, DataSource } from 'typeorm';
import { BrothEntity } from '../entities/broth.entity';
import { ProteinEntity } from '../entities/protein.entity';
import { CustomBaseEntity } from '../entities/custom-base-entity';

export class PgConnection {
  private static instance?: PgConnection;
  private connection?: DataSource;

  private constructor() {}

  async dbConnection(): Promise<typeof AppDataSource> {
    const AppDataSource = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'test',
      synchronize: true,
      logging: true,
      entities: [BrothEntity, ProteinEntity, CustomBaseEntity],
      subscribers: [],
      migrations: [],
    });
    await AppDataSource.initialize()
      .then(() => {
        console.log('Data Source has been initialized!');
      })
      .catch((err) => {
        console.error('Error during Data Source initialization', err);
      });
    return AppDataSource;
  }

  public getInstance(): PgConnection {
    if (PgConnection.instance === undefined)
      PgConnection.instance = new PgConnection();
    return PgConnection.instance;
  }

  async disconnect(): Promise<void> {
    if (this.connection === undefined)
      throw new ConnectionNotFoundError('Connection lost with database');
    await (await this.dbConnection()).destroy();
    this.connection = undefined;
  }
}
