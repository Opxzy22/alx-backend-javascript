export interface Teacher {
    experienceTeachinJava?: number;
}

namespace Subjects {
    export class Class {
       
        getAvailableTeacher() {
            return `Available Teacher: ${this.Teacher.firstName}`
        }
    }
}