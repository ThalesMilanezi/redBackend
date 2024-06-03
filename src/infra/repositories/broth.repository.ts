import { BrothEntity } from '../entities/broth.entity';
import { PgConnection } from './connection';

export class PgBrothRepository {
  constructor(private pgConnection: PgConnection) {}
  public entityManager = this.pgConnection.dbConnection();

  public async createBroths(entity: BrothEntity): Promise<BrothEntity> {
    const protein = (await this.entityManager).manager.save(entity);
    return protein;
  }

  public async findAllBroths(): Promise<BrothEntity[]> {
    return await (await this.entityManager).manager.find(BrothEntity);
  }
}
