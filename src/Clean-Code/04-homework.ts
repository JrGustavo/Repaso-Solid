(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {

        const redFruits = ['manzana', 'cereza', 'ciruela'];

        if ( redFruits.includes(fruit)) {
            return true;
        } else {
            return false;
        }
    }

    type FruitColor = 'red' |'yellow' | 'purple';
    function getFruitsByColor( color: string ): string[] {

        const fruitsByColor = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas'],
        };

        if ( !Object.keys(fruitsByColor).includes(color)) throw Error('The color must be: red, yellow, purple');


        // @ts-ignore
        return fruitsByColor[color];
    }

    function workingSteps() {

        if (!isFirstStepWorking) return 'First step broken.';

        if (!isFirstStepWorking) return 'First step broken.';

        if (!isFirstStepWorking) return 'First step broken.';

        if (!isFirstStepWorking) return 'First step broken.';

        return 'Working properly!';

    }



    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();

