import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Quote } from './entities/quote.entity';

@Injectable()
export class QuotesService {
  constructor(@InjectRepository(Quote) private quotesRepository: Repository<Quote>,
  ) {}
  create(createQuoteDto: CreateQuoteDto) {
    const newQuote = this.quotesRepository.create(createQuoteDto);
    return this.quotesRepository.save(newQuote);
  }

  findAll() {
    return this.quotesRepository.find();
  }

  findOne(quote_id: number) {
    return this.quotesRepository.findOneBy({ quote_id });
  }

  update(id: number, updateQuoteDto: UpdateQuoteDto) {
    return `This action updates a #${id} quote`;
  }

  async remove(quote_id: number) {
    const quote = await this.findOne(quote_id);
    return this.quotesRepository.remove(quote);
  }
}
