import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./users.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column()
  cellPhone: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => User)
  user: User;
}
