(() => {

    function getMovieByID( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMoviesCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioByID( ActorId: string ) {
        console.log({ ActorId });
    }

    // Crear una película
    interaface Movie {
        cast:           string[];
        description:    string;
        rating:         number;
        title:          string;
    }

    function movie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }


    // Crea un nuevo actor
    function checkFullName( fullName:string ) {
        console.log({fullName});
        return true;
    }
    function createActor ( fullName: string, birthdate: Date ): boolean {


        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;

    }

    //Continuar

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {

        if ( isDead ) return 1500;

        if (isSeparated) return 2500;

        return (isRetired) ? 3000 : 4000;


        
})();




