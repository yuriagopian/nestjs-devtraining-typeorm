import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
    constructor(@InjectRepository(Course) private readonly courseRepository: Repository<Course>) { }

    findAll() {
        return this.courseRepository.find;
    }

    findOne(id: string) {
        const course = this.courseRepository.findOne(id);

        if (!course) {
            throw new NotFoundException(`Course ID ${id} not found`)
        }
    }

    create(createCourseDTO: CreateCourseDto) {

        const course = this.courseRepository.create(createCourseDTO);
        return this.courseRepository.save(course);
    }

    async update(id: string, updateCourseDto: UpdateCourseDto) {
        const course = await this.courseRepository.preload({
            id: +id,
            ...updateCourseDto
        })

        if (!course) {
            throw new NotFoundException(`Course ID ${id} not found`)
        }

        return this.courseRepository.save(course);
    }

    async delete(id: string) {
        const course = await this.courseRepository.findOne(id);

        if (!course) {
            throw new NotFoundException(`Course ID ${id} not found`)
        }

        return this.courseRepository.remove(course);
    }
}
