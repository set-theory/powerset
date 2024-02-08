import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';
import {count} from '@iterable-iterator/count';
import {take} from '@iterable-iterator/slice';
import {powerset} from '#module';

const repr = (x) => (Array.isArray(x) ? JSON.stringify(x) : x.toString());

const whole = (t, set, expected) => {
	const result = list(powerset(set));
	t.deepEqual(result, expected);
};

whole.title = (title, set, expected) =>
	title ?? `powerset(${repr(set)}) is ${repr(expected)}`;

test(whole, range(0), [[]]);

test(whole, range(1), [[], [0]]);

test(whole, range(2), [[], [0], [1], [0, 1]]);

test(whole, range(3), [[], [0], [1], [0, 1], [2], [0, 2], [1, 2], [0, 1, 2]]);

const startsWith = (t, set, expected) => {
	const result = list(take(powerset(set), expected.length));
	t.deepEqual(result, expected);
};

startsWith.title = (title, set, expected) =>
	title ?? `powerset(${repr(set)}) starts with ${repr(expected)}`;

test('All subsets of NN!', startsWith, count(), [
	[],
	[0],
	[1],
	[0, 1],
	[2],
	[0, 2],
	[1, 2],
	[0, 1, 2],
	[3],
	[0, 3],
	[1, 3],
	[0, 1, 3],
	[2, 3],
	[0, 2, 3],
	[1, 2, 3],
	[0, 1, 2, 3],
]);
