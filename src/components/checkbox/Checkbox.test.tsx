import { render, screen } from '@testing-library/react';
import Checkbox from './index';

describe('Test Checkbox', () => {
	test('without attr', () => {
		render(<Checkbox />);
		const input = screen.getByTestId('checkbox');
		expect(input.classList.length).toBe(3);
		expect(input.classList.contains('checkbox')).toBe(true);
		expect(input.classList.contains('checkbox--medium')).toBe(true);
		expect(input.getAttribute('disabled')).toBeNull();
		expect(input).toMatchSnapshot();
	});
});
