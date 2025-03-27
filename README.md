# @danielgtmn/date-range-helper

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

A simple tool for working with date ranges in JavaScript and TypeScript. No dependencies, lightweight, ready to use.


## 📦 Installation

```bash
npm install @danielgtmn/date-range-helper
```

or with PNPM

```bash
pnpm install @danielgtmn/date-range-helper
```

## 🧠 Funktionen

### getCurrentMonthRange()

Returns the start and end time of the current month.

```bash
const { start, end } = getCurrentMonthRange();
```

### getCurrentWeekRange()

Returns the start and end time of the current week (Monday to Sunday).

```bash
const { start, end } = getCurrentWeekRange();
```

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


