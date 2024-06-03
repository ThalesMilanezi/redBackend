import { PgConnection } from './connection';
import { ProteinEntity } from '../entities/protein.entity';

export class PgProteinRepository {
  constructor(private pgConnection: PgConnection) {}
  public entityManager = this.pgConnection.dbConnection();

  public async createProtein(entity: ProteinEntity): Promise<ProteinEntity> {
    const protein = (await this.entityManager).manager.save(entity);
    return protein;
  }

  public async findAllProteins(): Promise<ProteinEntity[]> {
    return await (await this.entityManager).manager.find(ProteinEntity);
  }
}
