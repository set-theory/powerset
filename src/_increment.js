/**
 * _increment.
 *
 * @param {Array} bitset
 * @return {number} The index of the first bit flipped to 1. All preceding bits
 * have been flipped to 0.
 */
const _increment = (bitset) => {
	const n = bitset.length;
	for (let i = 0; i < n; ++i) {
		if (bitset[i] === 0) {
			bitset[i] = 1;
			return i;
		}

		bitset[i] = 0;
	}

	bitset.push(1);
	return n;
};

export default _increment;
