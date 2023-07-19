import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from './entities/quote.entity';

@Injectable()
export class QuotesService {
  constructor(@InjectRepository(Quote) private quotesRepository: Repository<Quote>,
  ) {}

  findAll() {
    return this.quotesRepository.find();
  }

  findOne(quote_id: number) {
    return this.quotesRepository.findOne({ where: { quote_id } });
  }

  async remove(quote_id: number) {
    const quote = await this.findOne(quote_id);
    return this.quotesRepository.remove(quote);
  }
}
