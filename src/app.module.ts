import { Module } from '@nestjs/common';
import { SongsModule } from './songs/songs.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { envs } from './config';
import { ArtistsModule } from './artists/artists.module';
import { GenresModule } from './genres/genres.module';
import { PlayListsModule } from './play-lists/play-lists.module';

@Module({
  imports: [
    SongsModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: envs.DATABASE_HOST,
      port: envs.DATABASE_PORT,
      username: envs.DATABASE_USERNAME,
      password: envs.DATABASE_PASSWORD,
      database: envs.DATABASE_NAME,
      autoLoadModels: true,
      //sync: { force: true },
      synchronize: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    }),
    ArtistsModule,
    GenresModule,
    PlayListsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
