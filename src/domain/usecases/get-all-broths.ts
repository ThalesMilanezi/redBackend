import { BrothEntity } from '../../infra/entities/broth.entity';
import { BaseUseCase } from '../contracts/base-usecase';
import { PgBrothRepository } from '../../infra/repositories/broth.repository';

export class GetAllBrothsUC extends BaseUseCase<void, BrothEntity[]> {
  constructor(private readonly brothRepository: PgBrothRepository) {
    super();
  }

  public async execute(): Promise<BrothEntity[]> {
    try {
      console.log(`[GetAllBroths] Getting all broths attempt`);
      const broths = await this.brothRepository.findAllBroths();
      if (!broths.length) {
        throw new Error('No broths found.');
      }
      return broths;
    } catch (error) {
      console.error(`[GetAllBroths] Error: ${error.message}`);
      throw error;
    }
  }
}
