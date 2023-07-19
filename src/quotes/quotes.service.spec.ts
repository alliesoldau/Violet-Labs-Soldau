import { Test, TestingModule } from '@nestjs/testing';
import { QuotesService } from './quotes.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Quote } from './entities/quote.entity';


// TO DO: finish writting test 

describe('QuotesService', () => {
  let service: QuotesService;

  const mockQuotesRepository = {

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuotesService, {
        provide: getRepositoryToken(Quote),
        useValue: mockQuotesRepository
      }],
    }).compile();

    service = module.get<QuotesService>(QuotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
