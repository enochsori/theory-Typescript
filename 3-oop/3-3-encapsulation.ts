{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public -> open to access
  // private -> hide from exterior

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // better to change state in the class through function / make state as private
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("Value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
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

  const maker = new CoffeeMaker(32);
  // instead of maker.coffeeBeans = 30;
  // use function to change private state
  maker.fillCoffeeBeans(30);
  console.log(maker);

  class User {
    private internalAge = 3;

    get age(): number {
      return this.internalAge;
    }
    set age(age: number) {
      // 유효성 검사가 가능함.. 
      if (age < 0) {
        throw new Error("Aga must be the greater than 0");
      }
      this.internalAge = age;
    }
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    // private variable could defined in constructor as a argument with private keyword
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Steve", "jobs");
  // call getter function as call variable! like computed in vue
  console.log(user.fullName);
  // call with number to setter function as call member variable
  user.age = 5;
}
