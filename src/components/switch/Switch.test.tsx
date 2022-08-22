import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Switch from '.';

describe('Test Switch', () => {
	test('without attr', () => {
		render(<Switch />);
		const switcher = screen.getByTestId('switch');
		const inner: HTMLInputElement =
			within(switcher).getByTestId('switch-inner');
		expect(inner).not.toBeNull();
		expect(inner.disabled).toEqual(false);
		expect(switcher.classList.length).toBe(1);
		expect(switcher.classList.contains('switch')).toBe(true);
		expect(switcher).toMatchSnapshot();
	});

	test('has label', () => {
		render(<Switch label='Label' />);
		const switcher = screen.getByTestId('switch');
		const label = within(switcher).getByText('Label');
		expect(label).not.toBeNull();
		expect(switcher).toMatchSnapshot();
	});

	test('checked', () => {
		render(<Switch />);
		const switcher = screen.getByTestId('switch');
		const inner: HTMLInputElement =
			within(switcher).getByTestId('switch-inner');
		expect(inner.checked).toEqual(false);
		userEvent.click(inner);
		expect(inner.checked).toEqual(true);
		expect(switcher).toMatchSnapshot();
	});

	test('disabled', () => {
		render(<Switch disabled />);
		const switcher = screen.getByTestId('switch');
		const inner: HTMLInputElement =
			within(switcher).getByTestId('switch-inner');
		expect(inner.disabled).toEqual(true);
		expect(inner.checked).toEqual(false);
		userEvent.click(inner);
		expect(inner.checked).toEqual(false);
		expect(switcher).toMatchSnapshot();
	});

	test('onChange', () => {
		let value = 0;
		render(
			<Switch
				onChange={() => {
					value = 1;
				}}
			/>
		);
		const switcher = screen.getByTestId('switch');
		expect(value).toBe(0);
		userEvent.click(switcher);
		expect(value).toBe(1);
		expect(switcher).toMatchSnapshot();
	});
});
