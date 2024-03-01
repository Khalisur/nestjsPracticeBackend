/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}
  createPost(createPostDto: CreatePostDto) {
    const post: Post = new Post();
    post.title = createPostDto.title;
    post.content = createPostDto.content;
    return this.postRepository.save(post);
  }

  getAllPost() {
    return this.postRepository.find();
  }

  findPostById(id: number) {
    return this.postRepository.findOneBy({ id });
  }

  updatePostById(id: number, updatePostDto: UpdatePostDto) {
    return this.postRepository.update(id, updatePostDto);
  }

  remove(id: number) {
    return this.postRepository.delete(id);
  }
}
