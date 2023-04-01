(() => {

    type Gender = 'M' | 'F';

    interface PersonProps {
        name     : string;
        gender   : Gender;
        birthdate : Date;

    }
    class Person {
        public name      : string;
        public gender    : Gender;
        public birthdate : Date;
        
        constructor({ name, gender, birthdate }: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email:     string,
        role:      string,
        name:      string,
        gender:    Gender,
        birthdate: Date,

    }
    class User extends Person {

        public lastAccess: Date;
        public email: string;
        public role: string;
        constructor({
         email,
         role,
         name,
         gender,
         birthdate,

        }: UserProps ){
           super({name, gender, birthdate});
           this.lastAccess = new Date();
           this.email = email;
           this.role = role;
        }
        checkCredentials(){
             return true;
        }
    }

})();