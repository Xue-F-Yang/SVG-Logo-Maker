import { Triangle, Circle, Square } from './shapes.js';

describe('Shapes', () => {
  test('Triangle should render correctly', () => {
    const triangle = new Triangle(0, 0, 100);
    const expected = '<path d="M 0 -57.73502691896258 L -50 28.86751345948129 L 50 28.86751345948129 Z" fill="undefined" />';
    expect(triangle.render()).toBe(expected);
  });

  test('Circle should render correctly', () => {
    const circle = new Circle(0, 0, 50);
    const expected = '<circle cx="0" cy="0" r="50" fill="undefined" />';
    expect(circle.render()).toBe(expected);
  });

  test('Square should render correctly', () => {
    const square = new Square(0, 0, 100);
    const expected = '<rect x="-50" y="-50" width="100" height="100" fill="undefined" />';
    expect(square.render()).toBe(expected);
  });
});          
