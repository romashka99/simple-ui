import { render, screen } from '@testing-library/react';
import Select from './Select';

describe('Test Select', () => {
	describe('default', () => {
		test('without attr', () => {
			render(<Select>Click</Select>);
			const select = screen.getByTestId('select');
			expect(select.classList.length).toBe(1);
			expect(select.classList.contains('select')).toBe(true);
			expect(select.getAttribute('disabled')).toBeNull();
			expect(select).toMatchSnapshot();
		});
	});

	describe('color', () => {});
});
