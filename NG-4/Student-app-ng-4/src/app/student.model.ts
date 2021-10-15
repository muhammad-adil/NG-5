export class Student {
    fullName : string;
    email : string;
    age : Number;
    hide : Boolean;

    constructor(fullName:string, email:string, age:Number){
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.hide = true;
    }
    toggle(){
        this.hide = !this.hide;
    }

}
