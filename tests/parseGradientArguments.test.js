import _ from 'lodash';
import tinyColor from 'tinycolor2';
import parseGradientArguments from '../src/parseGradientArguments';
import { red, blue, green, black, white } from './testColors';

// ==================================================

describe('parseGradientArguments', () => {
  var parsedArguments = parseGradientArguments('to right', 'red', 'blue', 20);
  it('returns an object with keys for colors, direction, and amount', () => {
    expect(parsedArguments.hasOwnProperty('colors')).toBe(true);
    expect(parsedArguments.hasOwnProperty('direction')).toBe(true);
    expect(parsedArguments.hasOwnProperty('amount')).toBe(true);
  });

  it('has an array of tinyColor objects for for colors', () => {
    expect(Array.isArray(parsedArguments.colors)).toBe(true);
    expect(parsedArguments.colors[0] instanceof tinyColor).toBe(true);
  });

  it('has a number or null for amount', () => {
    const nullAmount = parseGradientArguments('#ff0', 'to top');
    expect(nullAmount.amount).toBe(null);

    const numberAmount = parseGradientArguments('#ff0', 0.5, 'top');
    expect(typeof numberAmount.amount).toBe('number');
  });

  it('has a number or valid string for direction', () => {
    const numberDirection = parseGradientArguments('#ff0', 0.5, 45);
    expect(typeof numberDirection.direction).toBe('number');

    const stringDirection = parseGradientArguments('#ff0', 'to top');
    expect(typeof stringDirection.direction).toBe('string');
  });

  it('falls back to left-to-right for direction if none is present', () => {
    const noDirection = parseGradientArguments('#ff0', 0.5);
    expect(noDirection.direction).toBe('to right');
  });

  it('parses arguments in any order, so long as there is no conflict between values', () => {
    const directionFirst = parseGradientArguments(45, '#ff0', '#f00', 0.5);
    expect(directionFirst.amount).toBe(0.5);
    expect(directionFirst.direction).toBe(45);

    const amountFirst = parseGradientArguments('#ff0', '#f00', 0.2, 55);
    expect(amountFirst.amount).toBe(0.2);
    expect(amountFirst.direction).toBe(55);

    const conflictResolution = parseGradientArguments('#ff0', '#f00', 0.2, 0);
    expect(conflictResolution.amount).toBe(0.2);
    expect(conflictResolution.direction).toBe(0);
  });

  it('returns null if not enough valid colors are passed in', () => {
    const badColors = parseGradientArguments(45, 'reeeeeeeed', 0.2);
    expect(badColors).toBe(null);
  });
});
