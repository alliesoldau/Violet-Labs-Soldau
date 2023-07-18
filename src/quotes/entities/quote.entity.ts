import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Quote {
    @PrimaryGeneratedColumn()
    quote_id: number;

    @Column()
    quote: string;

    @Column()
    character: string;
}