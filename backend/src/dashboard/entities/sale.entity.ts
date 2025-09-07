import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column('decimal')
  amount: number;

  @CreateDateColumn()
  date: Date;

  @Column({ default: false })
  isOffline: boolean;

  @Column({ default: false })
  isNewCustomer: boolean;
}
