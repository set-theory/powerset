import assert from 'assert';
import _bitsets, {ADD, REMOVE, VALUE} from './_bitsets.js';

import {iter} from '@iterable-iterator/iter';
import {next, StopIteration} from '@iterable-iterator/next';
import {filter} from '@iterable-iterator/filter';

export default function* _powerset(set) {
	const source = iter(set);
	const buffer = [];
	const stack = [];
	yield stack;
	for (const progress of filter(({type}) => type !== VALUE, _bitsets())) {
		switch (progress.type) {
			case ADD:
				if (progress.value === buffer.length) {
					try {
						buffer.push(next(source));
					} catch (error) {
						if (error instanceof StopIteration) {
							assert(stack.length === 0);
							return;
						}

						throw error;
					}
				}

				assert(progress.value < buffer.length);
				stack.push(buffer[progress.value]);
				yield stack;
				break;
			default:
				assert(progress.type === REMOVE);
				assert(stack.length > 0);
				assert(stack[stack.length - 1] === buffer[progress.value]);
				stack.pop();
				break;
		}
	}
}
