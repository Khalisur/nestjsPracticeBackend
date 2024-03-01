import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { IsString, MinLength } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsString()
  @MinLength(5, { message: 'Title must have atleast 5 characters.' })
  title: string;

  @IsString()
  content: string;
}
