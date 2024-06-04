import { BrothEntity } from '../infra/entities/broth.entity';
import { PgConnection } from '../infra/repositories/connection';
import 'reflect-metadata';

const items: Partial<BrothEntity>[] = [
  {
    imageInactive: 'https://tech.redventures.com.br/icons/salt/inactive.svg',
    imageActive: 'https://tech.redventures.com.br/icons/salt/active.svg',
    name: 'Salt',
    description: 'Simple like the seawater, nothing more',
    price: 10,
  },
];

const populateBrothsDatabase = async () => {
  const connectionInstance = PgConnection.getInstance();
  try {
    console.log('Connecting to database...');
    const connection = await connectionInstance.dbConnection();
    console.log('Connected to database successfully!');
    const itemRepository = connection.getRepository(BrothEntity);
    for (const item of items) {
      const newItem = itemRepository.create(item);
      console.log('Saving item:', newItem.name);
      await itemRepository.save(newItem);
    }
    console.log('successfully created');
  } catch (error) {
    console.error('Error:', error);
  }
};

populateBrothsDatabase();
