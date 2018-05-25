import { base2pos, pos2base } from './consts'; 
import { Base64 } from 'js-base64';

const postiveValueEncoder = {
	decode: (str) => {
		if (str.length % 2) return '';
		let posDecoded = '';
		for (let i = 0 ; i < str.length ; i += 2) {
			const baseMap = pos2base[str.charAt(i) + str.charAt(i + 1)];
			if (baseMap) {
				posDecoded += baseMap;
			} else {
				return '';
			}
		}
		return Base64.decode(posDecoded);
	},
	encode: (str) => {
		let base64Encoded = Base64.encode(str);
		let posEncoded = '';
		for (let c of base64Encoded) {
			posEncoded += base2pos[c];
		}
		return posEncoded;
	}
}

export default postiveValueEncoder;