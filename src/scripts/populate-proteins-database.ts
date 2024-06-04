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
  {
    imageInactive: 'https://example.com/chicken-breast-inactive.svg',
    imageActive: 'https://example.com/chicken-breast-active.svg',
    name: 'Grilled Chicken Breast',
    description:
      'A lean and protein-packed chicken breast, perfect for salads, sandwiches, or wraps.',
    price: 12,
  },
  {
    imageInactive: 'https://example.com/salmon-inactive.svg',
    imageActive: 'https://example.com/salmon-active.svg',
    name: 'Pan-Seared Salmon',
    description: 'A healthy and flavorful salmon fillet, cooked to perfection.',
    price: 18,
  },
  {
    imageInactive: 'https://example.com/shrimp-inactive.svg',
    imageActive: 'https://example.com/shrimp-active.svg',
    name: 'Garlic Butter Shrimp',
    description:
      'Succulent shrimp sautéed in garlic and butter, a crowd-pleasing appetizer or main course.',
    price: 15,
  },
  {
    imageInactive: 'https://example.com/tofu-inactive.svg',
    imageActive: 'https://example.com/tofu-active.svg',
    name: 'Stir-Fried Tofu',
    description:
      'A versatile and protein-rich tofu dish, packed with vegetables and flavorful sauce.',
    price: 10,
  },
  {
    imageInactive: 'https://example.com/lentils-inactive.svg',
    imageActive: 'https://example.com/lentils-active.svg',
    name: 'Hearty Lentil Stew',
    description:
      'A protein-packed and nutritious stew made with lentils, vegetables, and spices.',
    price: 14,
  },
  {
    imageInactive: 'https://example.com/quinoa-inactive.svg',
    imageActive: 'https://example.com/quinoa-active.svg',
    name: 'Quinoa Salad with Grilled Chicken',
    description:
      'A healthy and flavorful salad with quinoa, grilled chicken, vegetables, and a light vinaigrette.',
    price: 16,
  },
  {
    imageInactive: 'https://example.com/black-beans-inactive.svg',
    imageActive: 'https://example.com/black-beans-active.svg',
    name: 'Black Bean Burgers',
    description:
      'A delicious and meatless alternative to traditional burgers, made with black beans, spices, and your favorite toppings.',
    price: 12,
  },
  {
    imageInactive: 'https://example.com/tempeh-inactive.svg',
    imageActive: 'https://example.com/tempeh-active.svg',
    name: 'Tempeh Scramble',
    description:
      'A plant-based protein scramble made with tempeh, vegetables, and your favorite seasonings.',
    price: 10,
  },
  {
    imageInactive: 'https://example.com/eggs-inactive.svg',
    imageActive: 'https://example.com/eggs-active.svg',
    name: 'Eggs Benedict',
    description:
      'A classic brunch dish with poached eggs, English muffins, hollandaise sauce, and crispy bacon.',
    price: 15,
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
