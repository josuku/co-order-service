import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: number;

  @Column()
  date: Date;

  @Column()
  direction: string;

  @Column({ default: 0 })
  total: number;

  @Column({ default: false })
  confirmed: boolean;
}
