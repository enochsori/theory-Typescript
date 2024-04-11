{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // to save memory use 'static'
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    // when you make an instance using this class, you have to call!
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      // in order to use static member variable, use class name instead of this key word
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // make a new object namely 'maker'
  //  call the class's constructor
  const maker = new CoffeeMaker(32);
  console.log(maker);

  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  // without make a new obj, you can use this static function in the class
  // it will make a object but different way
  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3);

  
}
