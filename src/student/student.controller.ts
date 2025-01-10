import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post()
    createStudent(@Body() studentData: Partial<Student>): Promise<Student> {
        return this.studentService.createStudent(studentData);
    }

    @Get() //for showing all students
    getAllStudents(): Promise<Student[]> {
        return this.studentService.getAllStudents();
    }

    @Get(':id') //for showing a specific student
    getStudentById(@Param('id') id: number): Promise<Student> {
        return this.studentService.getStudentById(id);
    }

    @Patch(':id')
    updateStudent(
        @Param('id') id: number,
        @Body() updateData: Partial<Student>,
    ): Promise<Student> {
        return this.studentService.updateStudent(id, updateData);
    }

    @Delete(':id')
        deleteStudent(@Param('id') id: number): Promise<string> {
        return this.studentService.deleteStudent(id);
    }


}
