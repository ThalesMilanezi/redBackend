import { Entity, Column } from 'typeorm';
import { CustomBaseEntity } from './custom-base-entity';

@Entity()
class ProteinEntity extends CustomBaseEntity {
  @Column()
  name: string;

  @Column()
  imageInactive: string;

  @Column()
  imageActive: string;

  @Column()
  description: string;

  @Column()
  price: string;
}
