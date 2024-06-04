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
  {
    name: 'Hearty Chicken Noodle Broth',
    imageInactive: 'https://example.com/chicken-noodle-inactive.svg',
    imageActive: 'https://example.com/chicken-noodle-active.svg',
    description:
      'A classic comfort food, this broth is packed with chicken, noodles, and vegetables.',
    price: 15,
  },
  {
    name: 'Spicy Tom Yum Broth',
    imageInactive: 'https://example.com/tom-yum-inactive.svg',
    imageActive: 'https://example.com/tom-yum-active.svg',
    description:
      'A flavorful and aromatic broth with shrimp, mushrooms, lemongrass, and chili peppers.',
    price: 12,
  },
  {
    name: 'Creamy Mushroom Bisque',
    imageInactive: 'https://example.com/mushroom-bisque-inactive.svg',
    imageActive: 'https://example.com/mushroom-bisque-active.svg',
    description:
      'A rich and creamy broth made with mushrooms, cream, and white wine.',
    price: 18,
  },
  {
    name: 'Refreshing Gazpacho',
    imageInactive: 'https://example.com/gazpacho-inactive.svg',
    imageActive: 'https://example.com/gazpacho-active.svg',
    description:
      'A chilled soup made with tomatoes, cucumbers, bell peppers, and olive oil.',
    price: 10,
  },
  {
    name: 'Hearty Lentil Soup',
    imageInactive: 'https://example.com/lentil-soup-inactive.svg',
    imageActive: 'https://example.com/lentil-soup-active.svg',
    description:
      'A protein-packed soup made with lentils, vegetables, and spices.',
    price: 14,
  },
  {
    name: 'Thai Coconut Curry Broth',
    imageInactive: 'https://example.com/coconut-curry-inactive.svg',
    imageActive: 'https://example.com/coconut-curry-active.svg',
    description:
      'A flavorful and fragrant broth with chicken, vegetables, and coconut milk.',
    price: 16,
  },
  {
    name: 'Nourishing Vegetable Broth',
    imageInactive: 'https://example.com/vegetable-broth-inactive.svg',
    imageActive: 'https://example.com/vegetable-broth-active.svg',
    description:
      'A versatile broth made with a variety of vegetables, perfect for soups, stews, and sauces.',
    price: 12,
  },
  {
    name: 'Spicy Miso Ramen',
    imageInactive: 'https://example.com/miso-ramen-inactive.svg',
    imageActive: 'https://example.com/miso-ramen-active.svg',
    description:
      'A hearty and flavorful ramen broth with noodles, pork, and a spicy miso base.',
    price: 18,
  },
  {
    name: 'Traditional Pho',
    imageInactive: 'https://example.com/pho-inactive.svg',
    imageActive: 'https://example.com/pho-active.svg',
    description:
      'A Vietnamese noodle soup with a fragrant beef broth, rice noodles, and fresh herbs.',
    price: 15,
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
