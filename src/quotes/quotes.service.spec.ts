import { Test, TestingModule } from '@nestjs/testing';
import { QuotesService } from './quotes.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Quote } from './entities/quote.entity';
import { Repository } from 'typeorm';

// TO DO: finish writting test 

describe('QuotesService', () => {
  let service: QuotesService;

  let mockQuotesRepository: Partial<Record<keyof Repository<Quote>, jest.Mock>>;

  beforeEach(async () => {

    mockQuotesRepository = {
      find: jest.fn(),
      findOne: jest.fn(),
      remove: jest.fn(),
    }
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

  describe('findAll', () => {
    it('should return an array of quotes', async () => {
      const quotes = [
        { quote_id: 1, quote: 'Blorp', character: 'Freddie' },
        { quote_id: 2, quote: 'Plop', character: 'Sprout' },
      ];

      mockQuotesRepository.find.mockResolvedValue(quotes);
      const result = await service.findAll();
      expect(result).toEqual(quotes);
    });
  });

  describe('findOne', () => {
    it('should return the quote with the specified quote_id', async () => {
      const dto = { quote_id: 1, quote: 'Blorp', character: 'Freddie' };
      // mock the behavior of the quotesRepository.findOne method
      mockQuotesRepository.findOne.mockResolvedValue(dto);
      const quote_id = 1;
      const result = await service.findOne(quote_id);
      expect(result).toEqual(dto);
    });
  });


  describe('remove', () => {
    it('should remove the quote with the specified quote_id', async () => {
      const quote_id = 1;
      const quoteToRemove = { quote_id: 1, quote: 'Blorp', character: 'Freddie' };
      mockQuotesRepository.findOne.mockResolvedValue(quoteToRemove);
      mockQuotesRepository.remove.mockResolvedValue(quoteToRemove);
      const result = await service.remove(quote_id);
      expect(mockQuotesRepository.findOne).toHaveBeenCalledWith({ where: { quote_id } });
      expect(mockQuotesRepository.remove).toHaveBeenCalledWith(quoteToRemove);
      expect(result).toEqual(quoteToRemove);
    });
  });
});
