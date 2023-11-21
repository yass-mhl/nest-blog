import { Controller, Post, Body } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './create-article.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private articlesService: ArticlesService) {}

    @Post()
    async create(@Body() article: CreateArticleDto) {
        return this.articlesService.create(article);
    }


}
