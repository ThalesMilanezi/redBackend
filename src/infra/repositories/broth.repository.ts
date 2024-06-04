import { BrothEntity } from '../entities/broth.entity';
import { PgConnection } from './connection';
import { DataSource } from 'typeorm';

export class PgBrothRepository {
  private dataSource: DataSource;

  constructor(private pgConnection: PgConnection) {
    this.initialize();
  }

  private async initialize(): Promise<void> {
    this.dataSource = await this.pgConnection.dbConnection();
  }

  public async createBroths(entity: BrothEntity): Promise<BrothEntity> {
    const savedBroth = await this.dataSource.manager.save(entity);
    return savedBroth;
  }

  public async findAllBroths(): Promise<BrothEntity[]> {
    return await this.dataSource.manager.find(BrothEntity);
  }
}
