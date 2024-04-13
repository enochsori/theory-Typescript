interface Either {
  left: () => number;
  right: () => number;
}

class SimplEither implements Either {
  constructor(private leftValue: number, private rightValue: number) {}
  left(): number {
    return this.leftValue;
  }
  right(): number {
    return this.leftValue;
  }
}

// => using Generic

interface EitherG<L, R> {
  left: () => L;
  right: () => R;
}

class SinmpEitherG<L, R> implements EitherG<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}
