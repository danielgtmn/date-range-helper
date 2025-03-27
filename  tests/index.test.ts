import {
    getCurrentMonthRange,
    getCurrentWeekRange,
    isInRange,
    getDaysBetween,
    getDateList
} from '../src';

describe('date-range-helper', () => {
    test('getCurrentMonthRange returns valid range', () => {
        const { start, end } = getCurrentMonthRange();
        expect(start.getDate()).toBe(1);
        expect(end.getDate()).toBeGreaterThan(27); // Grobtest
    });

    test('getCurrentWeekRange returns 7-day range starting Monday', () => {
        const { start, end } = getCurrentWeekRange();
        expect(start.getDay()).toBe(1); // Monday
        expect(getDaysBetween(start, end)).toBe(6);
    });

    test('isInRange returns true if date in range', () => {
        const range = {
            start: new Date('2025-01-01'),
            end: new Date('2025-01-10')
        };
        const testDate = new Date('2025-01-05');
        expect(isInRange(testDate, range)).toBe(true);
    });

    test('getDaysBetween returns correct number of days', () => {
        const start = new Date('2025-01-01');
        const end = new Date('2025-01-05');
        expect(getDaysBetween(start, end)).toBe(4);
    });

    test('getDateList returns all dates in range', () => {
        const start = new Date('2025-03-01');
        const end = new Date('2025-03-03');
        const dates = getDateList(start, end);
        expect(dates).toHaveLength(3);
        expect(dates[0].getDate()).toBe(1);
        expect(dates[2].getDate()).toBe(3);
    });
});