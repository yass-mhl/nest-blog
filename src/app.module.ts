import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    ArticlesModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // type de base de données
      host: process.env.DATABASE_HOST, // l'adresse de l'hôte de la base de données
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432, // port de la base de données
      username: process.env.DATABASE_USER, // nom d'utilisateur de la base de données
      password: process.env.DATABASE_PASSWORD, // mot de passe de la base de données
      database: process.env.DATABASE_NAME, // nom de la base de données
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // emplacement des entités (modèles)
      synchronize: true, // cela synchronisera votre schéma de base de données avec les modèles chaque fois que l'application démarre
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
