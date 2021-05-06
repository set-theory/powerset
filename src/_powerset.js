import assert from 'assert';

import _increment from './_increment.js';

/**
 * _powerset.
 *
 * @param {Iterator} source
 * @return {IterableIterator<Array>}
 */
export default function* _powerset(source) {
	const bitset = [];
	const buffer = [];
	const stack = [];
	while (true) {
		yield stack;

		const i = _increment(bitset);

		if (i === buffer.length) {
			assert(stack.length === buffer.length);
			const {done, value} = source.next();
			if (done) return;
			buffer.push(value);
		}

		assert(i < buffer.length);
		for (let j = 0; j < i; ++j) stack.pop();
		stack.push(buffer[i]);
	}
}
