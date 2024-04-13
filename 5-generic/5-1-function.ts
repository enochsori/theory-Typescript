{
  function checkNotNull(arg: number | null): number {
    if (arg == null) {
      throw new Error('Not valid number');
    }
    return arg;
  }

  const result = checkNotNull(123);
  console.log(result);
  checkNotNull(null);

  //  if needed all the different types? will make all different function with different type? instead use Generic Type!

  function checkNotNullWithGeneric<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('Not Valid');
    }
    return arg;
  }

  const number = checkNotNullWithGeneric(123);
  const boal: boolean = checkNotNullWithGeneric(true);
  const string = checkNotNullWithGeneric('hello');
}
