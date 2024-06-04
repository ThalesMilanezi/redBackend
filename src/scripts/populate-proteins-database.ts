import { ProteinEntity } from '../infra/entities/protein.entity';
import { PgConnection } from '../infra/repositories/connection';
import 'reflect-metadata';

const proteins: Partial<ProteinEntity>[] = [
  {
    imageInactive: 'https://tech.redventures.com.br/icons/pork/inactive.svg',
    imageActive: 'https://tech.redventures.com.br/icons/pork/active.svg',
    name: 'Chasu',
    description:
      'A sliced flavourful pork meat with a selection of season vegetables.',
    price: 10,
  },
];

const populateProteinsDatabase = async () => {
  const connectionInstance = PgConnection.getInstance();
  try {
    const connection = await connectionInstance.dbConnection();
    const proteinRepository = connection.getRepository(ProteinEntity);
    for (const protein of proteins) {
      const newProtein = proteinRepository.create(protein);
      await proteinRepository.save(newProtein);
    }
    console.log('successfully created');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await connectionInstance.disconnect();
  }
};

populateProteinsDatabase();
