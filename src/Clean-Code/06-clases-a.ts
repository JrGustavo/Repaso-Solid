(() => {



    type Gender = 'M' | 'F';
    class Person {
        constructor(
        public name = string,
        public gender = Gender,
        public birthdate =  Date
        ){}
    }

    class User extends Person {
        constructor(
            public workingDirectory:  string,
            public lastOpenFolder  :  string,
            email                  :  string,
            role                   :  string,
            gender                 : Gender,
            birthdate              : Date
        ){
            super( email, role, name, gender, birthdate );
    }

    const userSettings = new UserSettings(
        '/usr/home',
         '/home',
         'gustavo@google.com',
         'Admin',
         'Gustavo',
         'M',
         new Date('1994-10-2021')
        );

        console.log({userSettings});
}



})();