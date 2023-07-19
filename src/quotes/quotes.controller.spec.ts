import { Test, TestingModule } from '@nestjs/testing';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';

describe('QuotesController', () => {
  let controller: QuotesController;
  let quotesService: QuotesService;

  const mockQuotesService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuotesController],
      providers: [QuotesService],
    })
    .overrideProvider(QuotesService)
    .useValue(mockQuotesService)
    .compile();

    controller = module.get<QuotesController>(QuotesController);
    quotesService = module.get<QuotesService>(QuotesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of quotes', async () => {
      const quotes = [
        { quote_id: 1, quote: 'Blorp', character: 'Freddie' },
        { quote_id: 2, quote: 'Plop', character: 'Sprout' },
      ];
      mockQuotesService.findAll.mockResolvedValue(quotes);
      const result = await controller.findAll();
      expect(result).toEqual(quotes);
      expect(mockQuotesService.findAll).toHaveBeenCalled();
    });

  describe('findOne', () => {
    it('should return the quote with the specified quote_id', async () => {
      const quote_id = 1;
      const quote = { quote_id, quote: 'Blorp', character: 'Freddie' };
      mockQuotesService.findOne.mockResolvedValue(quote);
      const result = await controller.findOne(quote_id.toString());
      expect(result).toEqual(quote);
      expect(mockQuotesService.findOne).toHaveBeenCalledWith(quote_id);
    });
  });
});

  describe('remove', () => {
    it('should remove the quote with the specified quote_id', async () => {
      const quote_id = 1;
      const quoteToRemove = { quote_id, quote: 'Blorp', character: 'Freddie' };
      mockQuotesService.findOne.mockResolvedValue(quoteToRemove);
      mockQuotesService.remove.mockResolvedValue(quoteToRemove);
      const result = await controller.remove(quote_id.toString());
      expect(mockQuotesService.findOne).toHaveBeenCalledWith(quote_id);
      expect(mockQuotesService.remove).toHaveBeenCalledWith(quote_id);
      expect(result).toEqual(quoteToRemove);
    });
  });
});
