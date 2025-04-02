# @danielgtmn/date-range-helper

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![npm version](https://img.shields.io/npm/v/@danielgtmn/date-range-helper)](https://www.npmjs.com/package/@danielgtmn/date-range-helper)

A lightweight, zero-dependency library for working with date ranges in JavaScript and TypeScript.

## 📦 Installation

```bash
npm install @danielgtmn/date-range-helper
# or
pnpm install @danielgtmn/date-range-helper
# or
yarn add @danielgtmn/date-range-helper
```

## 🧠 Funktionen

### getCurrentMonthRange()

Returns the start and end time of the current month.

```bash
const { start, end } = getCurrentMonthRange();
```

### getPreviousMonthRange()
Returns the start and end time of the previous month.
```bash
const { start, end } = getPreviousMonthRange();
```

### getNextMonthRange()
Returns the start and end time of the next month.
```bash
const { start, end } = getNextMonthRange();
```

### getCurrentWeekRange()

Returns the start and end time of the current week (Monday to Sunday).

```bash
const { start, end } = getCurrentWeekRange();
```

### getPreviousWeekRange()
Returns the start and end time of the previous week (Monday to Sunday).
```bash
const { start, end } = getPreviousWeekRange();
```

### getNextWeekRange()
Returns the start and end time of the next week (Monday to Sunday).
```bash
const { start, end } = getNextWeekRange();
```

## Utility Functions

### isInRange(date, { start, end })

Checks whether a date is within a range.

```bash
const isTodayInRange = isInRange(new Date(), { start, end });
```

### getDaysBetween(start, end)

Calculates the number of full days between two dates.

```bash
const days = getDaysBetween(new Date('2025-03-01'), new Date('2025-03-10'));
```

### getDateList(start, end)

Generates a list of all data between two points in time.

```bash
const dates = getDateList(new Date('2025-03-01'), new Date('2025-03-03'));
// [2025-03-01, 2025-03-02, 2025-03-03]
```

### normalizeDate(date)
Converts a date to a string in the format 'YYYY-MM-DD'.
```bash
const normalizedDate = normalizeDate(new Date('2025-03-01'));
// '2025-03-01'
```

## Timezone Support 
This library is timezone-aware. All date operations are performed in the local timezone of the device.
## toTimezone(date, timezone)
Converts a date to a specific timezone.
```bash
const dateInNewYork = toTimezone(new Date(), 'America/New_York');
```

## getCurrentMonthRangeInTimezone(timezone)
Returns the start and end time of the current month in a specific timezone.
```bash
const { start, end } = getCurrentMonthRangeInTimezone('America/New_York');
```

## getCurrentWeekRangeInTimezone(timezone)
Returns the start and end time of the current week in a specific timezone.
```bash
const { start, end } = getCurrentWeekRangeInTimezone('America/New_York');
```



## 🤝 Contributing
Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## 🧪 Beispiel

```bash
import {
  getCurrentWeekRange,
  isInRange,
  getDateList
} from '@danielgtmn/date-range-helper';

const { start, end } = getCurrentWeekRange();
console.log(getDateList(start, end)); // Alle Tage dieser Woche
```

## 📝 License

[MIT](https://choosealicense.com/licenses/mit/)

## 🤝 Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📫 Support

- Create a [GitHub issue](https://github.com/danielgtmn/date-range-helper/issues) for bug reports and feature requests
- Follow [@danielgtmn](https://github.com/danielgtmn) for announcements


