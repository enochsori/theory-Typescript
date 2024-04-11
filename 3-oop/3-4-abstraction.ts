{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 나는 이런 규칙, 규약, 행동들을 할수있어 contract 계약서 같은 것
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // public -> open to access
  // private -> hide from exterior

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMaker(coffeeBeans);
    }

    // better to change state in the class through function / make state as private
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("Value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number): void {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      console.log("Grinding coffee beans....");
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating the machine...");
    }

    private extract(shots: number): CoffeeCup {
      console.log("pulling ${shots} shots..");
      return {
        shots,
        hasMilk: false,
      };
    }

    // 내부동작 함수들, 변수들을 모두 안보이게 private으로!!!
    // 사용자가사용하기 편하다, 유지보수도 편하다
    // 실제로 사용하기에 아주 단순함

    makeCoffee(shots: number): CoffeeCup {
      // 1. grind coffee beans
      this.grindBeans(shots);
      // 2. warm coffee machine
      this.preheat();
      // 3. extract coffee
      return this.extract(shots);
    }
  }

  const maker: CoffeeMachine = new CoffeeMachine(32);
  // instead of maker.coffeeBeans = 30;
  // use function to change private state
  maker.fillCoffeeBeans(30);
  console.log(maker);

  // interface를 활용해서 
}
