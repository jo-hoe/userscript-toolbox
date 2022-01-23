const { fibonacciSequence } = require('./waitForXPathElements');

test('Test fibonacciSequence', () => {
    expect(fibonacciSequence.next().value).toBe(0);
    expect(fibonacciSequence.next().value).toBe(1);
    expect(fibonacciSequence.next().value).toBe(1);
    expect(fibonacciSequence.next().value).toBe(2);
    expect(fibonacciSequence.next().value).toBe(3);
    expect(fibonacciSequence.next().value).toBe(5);
    expect(fibonacciSequence.next().value).toBe(8);
    expect(fibonacciSequence.next().value).toBe(13);
    expect(fibonacciSequence.next().value).toBe(21);
});