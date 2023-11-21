import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';
import { CreateArticleDto } from './create-article.dto';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article) // This decorator tells NestJS that this repository is an Article repository
        private articlesRepository: Repository<Article>, // This is the repository that we will use to perform operations on the database
    ) {}

    async create(articleData: CreateArticleDto): Promise<Article> {
        const article = this.articlesRepository.create(articleData);
        return this.articlesRepository.save(article);
      }

    async findAll(): Promise<Article[]> {
        return this.articlesRepository.find();
    }
}
