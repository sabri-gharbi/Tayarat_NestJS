import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { EnsembleService } from './ensemble.service';
import { CreateEnsembleDto } from './dto/create-ensemble.dto';
import { UpdateEnsembleDto } from './dto/update-ensemble.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';

@Controller('ensemble')
export class EnsembleController {
  constructor(private readonly ensembleService: EnsembleService) {}

  @Post('files')
  @UseInterceptors(
    FileInterceptor('logbook', {
      storage: diskStorage({
        destination: './files',
      }),
    }),
  )
  async uploadedFile(@UploadedFile() file: Express.Multer.File) {
    const response = {
      filename: file.filename,
    };
    return response;
  }

  @Get('files/:path')
  seeUploadedFile(@Param('path') path: string, @Res() res: Response) {
    return res.sendFile(path, { root: './files' });
  }

  @Post()
  create(@Body() createEnsembleDto: CreateEnsembleDto) {
    return this.ensembleService.create(createEnsembleDto);
  }

  @Get()
  findAll() {
    return this.ensembleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ensembleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnsembleDto: UpdateEnsembleDto,
  ) {
    return this.ensembleService.update(+id, updateEnsembleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ensembleService.remove(+id);
  }
}
