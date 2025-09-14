namespace Subjects {
  export interface Subject {
    setTeacher(teacher: Teacher): void;
  }

  export class SubjectClass implements Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
