import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from '.';

describe('Test Checkbox', () => {
	test('without attr', () => {
		render(<Checkbox />);
		const checkbox = screen.getByTestId('checkbox');
		const inner: HTMLInputElement =
			within(checkbox).getByTestId('checkbox-inner');
		expect(inner).not.toBeNull();
		expect(inner.disabled).toEqual(false);
		expect(checkbox.classList.length).toBe(1);
		expect(checkbox.classList.contains('checkbox')).toBe(true);
		expect(checkbox).toMatchSnapshot();
	});

	test('has label', () => {
		render(<Checkbox label='Label' />);
		const checkbox = screen.getByTestId('checkbox');
		const label = within(checkbox).getByText('Label');
		expect(label).not.toBeNull();
		expect(checkbox).toMatchSnapshot();
	});

	test('checked', () => {
		render(<Checkbox />);
		const checkbox = screen.getByTestId('checkbox');
		const inner: HTMLInputElement =
			within(checkbox).getByTestId('checkbox-inner');
		expect(inner.checked).toEqual(false);
		userEvent.click(inner);
		expect(inner.checked).toEqual(true);
		expect(checkbox).toMatchSnapshot();
	});

	test('disabled', () => {
		render(<Checkbox disabled />);
		const checkbox = screen.getByTestId('checkbox');
		const inner: HTMLInputElement =
			within(checkbox).getByTestId('checkbox-inner');
		expect(inner.disabled).toEqual(true);
		expect(inner.checked).toEqual(false);
		userEvent.click(inner);
		expect(inner.checked).toEqual(false);
		expect(checkbox).toMatchSnapshot();
	});

	test('onChange', () => {
		let value = 0;
		render(
			<Checkbox
				onChange={() => {
					value = 1;
				}}
			/>
		);
		const checkbox = screen.getByTestId('checkbox');
		expect(value).toBe(0);
		userEvent.click(checkbox);
		expect(value).toBe(1);
		expect(checkbox).toMatchSnapshot();
	});
});
