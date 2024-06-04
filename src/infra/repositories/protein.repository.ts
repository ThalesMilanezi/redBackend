import { PgConnection } from './connection';
import { ProteinEntity } from '../entities/protein.entity';
import { DataSource } from 'typeorm';

export class PgProteinRepository {
  private dataSource: DataSource;

  constructor(private pgConnection: PgConnection) {
    this.initialize();
  }

  private async initialize(): Promise<void> {
    this.dataSource = await this.pgConnection.dbConnection();
  }

  public async createProtein(entity: ProteinEntity): Promise<ProteinEntity> {
    const protein = await this.dataSource.manager.save(entity);
    return protein;
  }

  public async findAllProteins(): Promise<ProteinEntity[]> {
    return await this.dataSource.manager.find(ProteinEntity);
  }
}
