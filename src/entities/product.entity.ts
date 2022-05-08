import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orderproducts')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;

  @Column()
  orderId: number;

  @Column()
  quantity: number;

  @Column()
  cost: number;
}
