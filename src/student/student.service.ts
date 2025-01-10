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

    async updateStudent(id: number, updateData: Partial<Student>): Promise<Student> {
        await this.studentRepository.update(id, updateData);
        return this.studentRepository.findOne({ where: { id } });
    }

    async deleteStudent(id: number): Promise<string> {
        await this.studentRepository.delete(id);
        return `Student with ID ${id} has been successfully deleted.`;
    }
      
      
      
      
}
