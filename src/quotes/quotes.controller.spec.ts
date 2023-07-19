import { Test, TestingModule } from '@nestjs/testing';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';

// TO DO: finish writting test 

describe('QuotesController', () => {
  let controller: QuotesController;

  // mock of my dependency
  const mockQuotesService = {
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuotesController],
      providers: [QuotesService],
    })
    .overrideProvider(QuotesService)
    .useValue(mockQuotesService)
    .compile();

    controller = module.get<QuotesController>(QuotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
