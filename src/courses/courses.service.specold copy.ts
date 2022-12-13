// // import { Test, TestingModule } from '@nestjs/testing';
// // import { getRepositoryToken } from '@nestjs/typeorm';
// // import { Connection, Repository } from 'typeorm';
// import { CoursesService } from './courses.service';
// // import { Course } from './entities/course.entity';
// // import { Tag } from './entities/tag.entity';
// import { NotFoundException } from '@nestjs/common';

// // type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

// // const createMockRepository = <T = any>(): MockRepository<T> => ({
// //   findOne: jest.fn(),
// // });

// describe('CoursesService', () => {
//   let service: CoursesService;
//   let id;
//   let date;

//   // let courseRepository: MockRepository;

//   beforeEach(async () => {
//     service = new CoursesService();
//     id = '6388a303ca022976f3a601f0';
//     date = new Date();

//     // const module: TestingModule = await Test.createTestingModule({
//     //   providers: [
//     //     CoursesService,
//     //     { provide: Connection, useValue: {} },
//     //     {
//     //       provide: getRepositoryToken(Course),
//     //       useValue: createMockRepository(),
//     //     },
//     //     {
//     //       provide: getRepositoryToken(Tag),
//     //       useValue: createMockRepository(),
//     //     },
//     //   ],
//     // }).compile();
//     // service = module.get<CoursesService>(CoursesService);
//     // courseRepository = module.get<MockRepository>(getRepositoryToken(Course));
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
//   // describe('findOne', () => {
//   //   describe('Get Course by id', () => {
//   //     it('should return an object course', async () => {
//   //       const courseId = '1';
//   //       const expectedCourse = {};
//   //       courseRepository.findOne.mockReturnValue(expectedCourse);
//   //       const course = await service.findOne(courseId);

//   //       expect(course).toEqual(expectedCourse);
//   //     });

//   //     it('should return NotFoundException', async () => {
//   //       const courseId = '1';
//   //       courseRepository.findOne.mockReturnValue(undefined);

//   //       try {
//   //         await service.findOne(courseId);
//   //       } catch (error) {
//   //         expect(error).toBeInstanceOf(NotFoundException);
//   //         expect(error.message).toEqual(`Course ID ${courseId} not found`);
//   //       }
//   //     });
//   //   });
//   });
// });
