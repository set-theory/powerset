export default function* _bitsets() {
	const bitset = [];
	while (true) {
		yield new Progress(VALUE, bitset);
		yield* _increment(bitset);
	}
}

function* _increment(bitset) {
	const n = bitset.length;
	for (let i = 0; i < n; ++i) {
		if (bitset[i] === 0) {
			bitset[i] = 1;
			yield new Progress(ADD, i);
			return;
		}

		bitset[i] = 0;
		yield new Progress(REMOVE, i);
	}

	bitset.push(1);
	yield new Progress(ADD, n);
}

class Progress {
	constructor(type, value) {
		this.type = type;
		this.value = value;
	}
}

export const VALUE = 0;
export const ADD = 1;
export const REMOVE = 2;
