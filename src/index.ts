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

export function isInRange(date: Date, range: { start: Date; end: Date }): boolean {
    return date >= range.start && date <= range.end;
}

export function getDaysBetween(start: Date, end: Date): number {
    const diff = end.getTime() - start.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function getDateList(start: Date, end: Date): Date[] {
    const dates: Date[] = [];
    let current = new Date(start);
    while (current <= end) {
        dates.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }
    return dates;
}