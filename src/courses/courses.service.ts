import { CreateCourseDto } from './dto/create-course.dto';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [{
        id: 1,
        name: "Nest JS",
        description: "NestJs fundamentals",
        tags: ["nest", "js", "inciante"],
        price: 20
    }]

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        const course = this.courses.find((course: Course) => course.id === Number(id))

        if (!course) {
            throw new HttpException('Course not found', HttpStatus.NOT_FOUND)
        }
    }

    create(createCourseDTO: CreateCourseDto) {
        return this.courses.push(createCourseDTO);
    }

    update(id: string, data) {
        const indexCourse = this.courses.findIndex(c => c.id === Number(id));
        if (indexCourse >= 0) {
            this.courses[indexCourse] = data
            return
        }
        throw new HttpException('Course not found!', HttpStatus.NOT_FOUND)
    }

    delete(id: string) {
        const indexCourse = this.courses.findIndex(c => c.id === Number(id));
        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1)
            return
        }
        throw new HttpException('Course not found', HttpStatus.NOT_FOUND)
    }
}
