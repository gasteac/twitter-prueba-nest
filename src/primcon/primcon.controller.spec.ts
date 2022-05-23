import { Test, TestingModule } from '@nestjs/testing';
import { PrimconController } from './primcon.controller';

describe('PrimconController', () => {
  let controller: PrimconController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrimconController],
    }).compile();

    controller = module.get<PrimconController>(PrimconController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
