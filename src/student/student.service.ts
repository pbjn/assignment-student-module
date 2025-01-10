import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>, 
      ) {}
    
    async createStudent(studentData: Partial<Student>): Promise<Student> {
        const student = this.studentRepository.create(studentData);
        return this.studentRepository.save(student);
    }

    async getAllStudents(): Promise<Student[]> { 
        return this.studentRepository.find();
    }

    async getStudentById(id: number): Promise<Student> { //specific student
        return this.studentRepository.findOne({ where: { id } });
    }
      
}
