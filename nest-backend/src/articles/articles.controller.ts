import { Controller, Post, Body, Get } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './create-article.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private articlesService: ArticlesService) {}

    @Post()
    async create(@Body() article: CreateArticleDto) {
        return this.articlesService.create(article);
    }

    @Get()
    async findAll() {
        return this.articlesService.findAll();
    }

    @Get()
    findAll(@Res() res) {
        const articles = this.articleService.findAll();
        res.render('articles/index', { articles });
    }
}
