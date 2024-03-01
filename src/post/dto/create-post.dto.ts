import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5, { message: 'Title must have atleast 5 characters.' })
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
