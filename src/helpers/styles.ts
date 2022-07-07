import { Size } from '../types/types';

export function getFontSize(size: Size) {
	return size === 'large' ? '1.5em' : size === 'medium' ? '1.25em' : '1em';
}
