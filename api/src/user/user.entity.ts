import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//add unique column
@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "full_name" })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  fullName: string;

  @Column({ unique: true })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ name: "password_hash" })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  passwordHash?: string;

  @Column({ name: "created_at" })
  createdAt: Date;

  @Column({ name: "updated_at" })
  updatedAt: Date;
}
