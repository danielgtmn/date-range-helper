export function getCurrentMonthRange(): { start: Date; end: Date } {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return { start, end };
}

export function getCurrentWeekRange(): { start: Date; end: Date } {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday
    const diffToMonday = (day + 6) % 7;
    const start = new Date(now);
    start.setDate(now.getDate() - diffToMonday);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return { start, end };
}

export function getPreviousMonthRange(): { start: Date; end: Date } {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const end = new Date(now.getFullYear(), now.getMonth(), 0);
    return { start, end };
}

export function getNextMonthRange(): { start: Date; end: Date } {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 2, 0);
    return { start, end };
}

export function getPreviousWeekRange(): { start: Date; end: Date } {
    const now = new Date();
    now.setDate(now.getDate() - 7);
    return getCurrentWeekRangeForDate(now);
}

export function getNextWeekRange(): { start: Date; end: Date } {
    const now = new Date();
    now.setDate(now.getDate() + 7);
    return getCurrentWeekRangeForDate(now);
}

function getCurrentWeekRangeForDate(date: Date): { start: Date; end: Date } {
    const day = date.getDay();
    const diffToMonday = (day + 6) % 7;
    const start = new Date(date);
    start.setDate(date.getDate() - diffToMonday);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return { start, end };
}

export function normalizeDate(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function isInRange(date: Date, range: { start: Date; end: Date }): boolean {
    const normalizedDate = normalizeDate(date);
    const normalizedStart = normalizeDate(range.start);
    const normalizedEnd = normalizeDate(range.end);
    return normalizedDate >= normalizedStart && normalizedDate <= normalizedEnd;
}

export function getDaysBetween(start: Date, end: Date): number {
    if (start > end) throw new Error('Start date must be before end date');
    const diff = normalizeDate(end).getTime() - normalizeDate(start).getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function getDateList(start: Date, end: Date): Date[] {
    if (start > end) throw new Error('Start date must be before end date');
    const dates: Date[] = [];
    let current = new Date(start);
    while (current <= end) {
        dates.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }
    return dates;
}

export function toTimezone(date: Date, timeZone: string): Date {
    return new Date(date.toLocaleString('en-US', { timeZone }));
}

export function getCurrentMonthRangeInTimezone(timeZone: string): { start: Date; end: Date } {
    const now = toTimezone(new Date(), timeZone);
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return { start, end };
}

export function getCurrentWeekRangeInTimezone(timeZone: string): { start: Date; end: Date } {
    const now = toTimezone(new Date(), timeZone);
    return getCurrentWeekRangeForDate(now);
}