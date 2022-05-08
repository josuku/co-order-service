import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('logistic')
export class LogisticEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderId: number;
}
