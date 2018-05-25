const assert = require('assert');
const positiveValueEncoder = require('../dist/positive-energy-encoder');

function encodeNdecode(str) {
	let encoded = positiveValueEncoder.encode(str);
	console.log('encoded', encoded);
	let decoded = positiveValueEncoder.decode(encoded);
	assert.strictEqual(str, decoded);
}

describe('Test encode & decode', function() {
	it('Short custom string test', function() {
		const original = 'asdasdweqcpkvrp;[]`.[c猜 测网球额外潇洒册岔路口';
		encodeNdecode(original);
	});
	it('Long ascii string mixed with chinese characters test', function() {
		let asciiStr = function () {
			let str = [];
			for (let i = 0 ; i < 256 ; i++) {
			    str.push(String.fromCharCode(i));
			    str.push(String.fromCodePoint(Math.round(Math.random() * 20901) + 19968));
			}
			return str.join('');
		}();
		encodeNdecode(asciiStr);
		encodeNdecode('暴力血腥');
	});
});