export const logger = (txt: string) => {
  enum Color {
    RED = 'red',
    GREEN = 'green',
    BLUE = 'blue',
  }
  console.log('logger', Color, Color['RED']);
};

export default {
  logger,
};
