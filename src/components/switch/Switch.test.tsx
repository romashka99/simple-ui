import { render, screen } from '@testing-library/react';
import Switch from './index';

describe('Test Switch', () => {
	test('without attr', () => {
		render(<Switch />);
		const input = screen.getByTestId('switch');
		expect(input.classList.length).toBe(3);
		expect(input.classList.contains('switch')).toBe(true);
		expect(input.classList.contains('switch--medium')).toBe(true);
		expect(input.getAttribute('disabled')).toBeNull();
		expect(input).toMatchSnapshot();
	});
});
