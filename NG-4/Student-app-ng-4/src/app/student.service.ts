import { Injectable } from '@angular/core';
import { Student } from "./student.model";

@Injectable()
export class StudentService {

  students: Student[];
      constructor(){       //private students: Students
        this.students = [
            new Student("A" , "abc@gmail.com", 28),
            new Student("Abcddd" , "abcdddd@gmail.com", 48), 
            new Student("Abcde" , "abcde@gmail.com", 22)             
    ];
       console.log('this.students: ', this.students );
    }
    //Registeration
    getRegistered(e, fullName:string, email:string, age:number ){
        e.preventDefault();
        this.students.push( new Student(fullName, email, age)); 
        //console.log(this.students , 'student');
 }


     delete(i){
        //  e.preventDefault();
         this.students.splice(i , 1);
     }

     edit(students, i, fullName, email, age){
         console.log(students)
         fullName.value = students.fullName;
         email.value = students.email;
         age.value = students.age;
         console.log('Calling update inside edit',this.update)
     }

     update(students, i, fullName, email, age){
         this.students[i].fullName = fullName.value;
         this.students[i].email = email.value;
         this.students[i].age = age.value
     }

    toggle(students){
        students.hide = !students.hide;
    }
  
}
