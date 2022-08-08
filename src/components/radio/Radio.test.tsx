import { render, screen } from '@testing-library/react';
import Radio from '.';

describe('Test Radio', () => {
	test('without attr', () => {
		render(<Radio />);
		const input = screen.getByTestId('radio');
		expect(input.classList.length).toBe(3);
		expect(input.classList.contains('radio')).toBe(true);
		expect(input.classList.contains('radio--medium')).toBe(true);
		expect(input.getAttribute('disabled')).toBeNull();
		expect(input).toMatchSnapshot();
	});
});
