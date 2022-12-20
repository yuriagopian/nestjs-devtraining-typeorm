import { CoursesService } from './courses.service';
import { NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';

describe('CoursesService', () => {
  let service: CoursesService;
  let id;
  let date;

  beforeEach(async () => {
    service = new CoursesService();
    id = '6388a303ca022976f3a601f0';
    date = new Date();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should creates a course', async () => {
    const expectedOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];

    const expectedOutputCourse = {
      id,
      name: 'test',
      description: 'test description',
      created_at: date,
      tags: expectedOutputTags,
      price: 50,
    };

    const mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectedOutputTags)),
      findOne: jest.fn(),
    };

    const mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const createCourseDto: CreateCourseDto = {
      name: 'test',
      description: 'test description',
      tags: ['nestjs'],
      price: 50,
    };

    const newCourse = await service.create(createCourseDto);

    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectedOutputCourse).toStrictEqual(newCourse);
  });
  it('should list courses', async () => {
    const expectedOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];

    const expectedOutputCourse = [
      {
        id,
        name: 'test',
        description: 'test description',
        created_at: date,
        tags: expectedOutputTags,
        price: 50,
      },
    ];

    const mockCourseRepository = {
      findAll: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    const courses = await service.findAll();

    expect(mockCourseRepository.find).toHaveBeenCalled();
    expect(expectedOutputCourse).toStrictEqual(courses);
  });

  it('should get a course', async () => {
    const expectedOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];

    const expectedOutputCourse = [
      {
        id,
        name: 'test',
        description: 'test description',
        created_at: date,
        tags: expectedOutputTags,
        price: 50,
      },
    ];

    const mockCourseRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    const course = await service.findOne(id);

    expect(mockCourseRepository.findOne).toHaveBeenCalled();
    expect(expectedOutputCourse).toStrictEqual(course);
  });

  it('should return NotFoundException', async () => {
    const mockCourseRepository = {
      findOne: jest.fn().mockReturnValue(undefined),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    try {
      await service.findOne(id);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toEqual(`Course ID ${id} not found`);
    }
  });
});
