:bowling: [@set-theory/powerset](https://set-theory.github.io/powerset)
==

Powerset operator for JavaScript.
See [docs](https://set-theory.github.io/powerset/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {count} from '@iterable-iterator/count';
import {powerset as subsets} from '@set-theory/powerset';

const naturalNumbers = count(0n, 1n);

for (const subset of subsets(naturalNumbers)) ... ;
```

[![License](https://img.shields.io/github/license/set-theory/powerset.svg)](https://raw.githubusercontent.com/set-theory/powerset/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@set-theory/powerset.svg)](https://www.npmjs.org/package/@set-theory/powerset)
[![Tests](https://img.shields.io/github/workflow/status/set-theory/powerset/ci:test?event=push&label=tests)](https://github.com/set-theory/powerset/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/set-theory/powerset.svg)](https://david-dm.org/set-theory/powerset)
[![Dev dependencies](https://img.shields.io/david/dev/set-theory/powerset.svg)](https://david-dm.org/set-theory/powerset?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/set-theory/powerset.svg)](https://github.com/set-theory/powerset/issues)
[![Downloads](https://img.shields.io/npm/dm/@set-theory/powerset.svg)](https://www.npmjs.org/package/@set-theory/powerset)

[![Code issues](https://img.shields.io/codeclimate/issues/set-theory/powerset.svg)](https://codeclimate.com/github/set-theory/powerset/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/set-theory/powerset.svg)](https://codeclimate.com/github/set-theory/powerset/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/set-theory/powerset/main.svg)](https://codecov.io/gh/set-theory/powerset)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/set-theory/powerset.svg)](https://codeclimate.com/github/set-theory/powerset/trends/technical_debt)
[![Documentation](https://set-theory.github.io/powerset/badge.svg)](https://set-theory.github.io/powerset/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@set-theory/powerset)](https://bundlephobia.com/result?p=@set-theory/powerset)
