function createTest() {
  return {
    test() {
      console.log('hi');
    },
  };
}

export const {
  test,
} = createTest();
