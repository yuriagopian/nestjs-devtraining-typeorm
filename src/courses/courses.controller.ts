import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { CoursesService } from './courses.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  HttpStatus,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  // desestrutura/limita a resposta por um parametro que é deifinido no decorator body
  @Post('name')
  // @HttpCode(204)
  //ou
  // Enum com todos os status code definidos no http util quando o status code é estatico
  @HttpCode(HttpStatus.NO_CONTENT)
  createName(@Body('name') data) {
    return this.coursesService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDTO: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.delete(id);
  }
}
