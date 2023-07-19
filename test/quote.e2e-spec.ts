import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { QuotesModule } from '../src/quotes/quotes.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Quote } from '../src/quotes/entities/quote.entity';

describe('QuoteController (e2e)', () => {
  let app: INestApplication;

  const mockQuotes = [{id: 1, quote: 'Blorp', character: 'Freddie'}]

  const mockQuotesRepository = {
    find: jest.fn().mockResolvedValue(mockQuotes)
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [QuotesModule],
    })
        .overrideProvider(getRepositoryToken(Quote))
        .useValue(mockQuotesRepository)
        .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/quotes (GET)', () => {
    return request(app.getHttpServer())
      .get('/quotes')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockQuotes)
  });
});
