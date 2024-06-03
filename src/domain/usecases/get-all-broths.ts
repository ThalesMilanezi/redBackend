import { BrothEntity } from '@/infra/entities/broth.entity';
import { BaseUseCase } from '../contracts/base-usecase';
import { PgBrothRepository } from '@/infra/repositories/broth.repository';

export class GetAllBrothsUC extends BaseUseCase<void, BrothEntity[]> {
  constructor(private brothRepository: PgBrothRepository) {
    super();
  }

  public async execute(): Promise<BrothEntity[]> {
    try {
      console.log(`[GetAllBroths] Getting all broths attempt`);
      const broths = await this.brothRepository.findAllBroths();
      if (!broths) throw new Error('broths not found.');
      return broths;
    } catch (error) {
      console.error(`[GetAllBroths] Error: ${error.message}`);
      throw error;
    }
  }
}
