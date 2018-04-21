import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Length, IsString } from 'class-validator';

@Entity()
export default class Game extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @Length(2, 25)
    @Column('text', {nullable:false})
    name: string

    @IsString()
    @Column('text', {nullable:false})
    color: string

    @Column('json', {nullable:false})
    board: object
}

