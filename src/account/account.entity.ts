import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity("account")
export default class Account {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column()
  public login: string;
 
  @Column()
  public password: string;

  @Column({nullable: true})
  public googleId: string;
}