import { Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  @Expose()
  id: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Expose()
  email: string;

  @MinLength(5)
  @IsString()
  @IsNotEmpty()
  @Expose()
  fullName: string;
}
