import { BrothEntity } from '@/infra/entities/broth.entity';
import { BaseUseCase } from '../contracts/base-usecase';
import { ProteinEntity } from '../../infra/entities/protein.entity';
import { PgProteinRepository } from '../../infra/repositories/protein.repository';

export class GetAllProteinsUC extends BaseUseCase<void, ProteinEntity[]> {
  constructor(private proteinRepository: PgProteinRepository) {
    super();
  }

  public async execute(): Promise<BrothEntity[]> {
    try {
      console.log(`[GetAllBroths] Getting all proteins attempt`);
      const proteins = await this.proteinRepository.findAllProteins();
      if (!proteins) throw new Error('proteins not found.');
      return proteins;
    } catch (error) {
      console.error(`[GetAllProteins] Error: ${error.message}`);
      throw error;
    }
  }
}
