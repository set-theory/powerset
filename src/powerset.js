import {iter} from '@iterable-iterator/iter';
import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';
import {reversed} from '@iterable-iterator/reversed';

import _powerset from './_powerset.js';

/**
 * Powerset operator.
 *
 * @param {Iterable} set
 * @return {IterableIterator<Array>} All subsets of the input set.
 */
const powerset = (set) =>
	map((subset) => list(reversed(subset)), _powerset(iter(set)));
export default powerset;
