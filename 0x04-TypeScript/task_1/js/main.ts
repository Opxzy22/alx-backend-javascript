// Create teacher interface
export interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    location: string,
    [index:string]: any
  };
  
  export interface Directors extends Teacher {
    numberOfReports: number;
  };
  
  export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
  }
  
  export interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  export interface StdConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  export class StudentClass {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    };
  
    workOnHomework(): string {
      return "Currently Working";
    };
  
    displayName(): string {
      return this.firstName;
    }
  }