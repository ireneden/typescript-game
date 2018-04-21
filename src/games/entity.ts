import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Length, IsString, IsIn, IsNotEmpty } from 'class-validator';


@Entity()
export default class Game extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @Length(2, 25)
    @Column('text', {nullable:false})
    name: string

    @IsString()
    @IsIn(['red', 'blue', 'green', 'yellow', 'magenta'])
    @Column('text', {nullable:false})
    color: string

    @Column('json', {nullable:false})
    board: object
}