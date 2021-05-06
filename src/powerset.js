import {map} from '@iterable-iterator/map';
import {list} from '@iterable-iterator/list';
import {reversed} from '@iterable-iterator/reversed';
import _powerset from './_powerset.js';

const powerset = (set) =>
	map((subset) => list(reversed(subset)), _powerset(set));
export default powerset;
