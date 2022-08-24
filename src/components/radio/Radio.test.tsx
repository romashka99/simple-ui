import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from '.';

describe('Test Radio', () => {
	test('without attr', () => {
		render(<Radio />);
		const radio = screen.getByTestId('radio');
		const inner: HTMLInputElement = within(radio).getByTestId('radio-inner');
		expect(inner).not.toBeNull();
		expect(inner.disabled).toEqual(false);
		expect(radio.classList.length).toBe(1);
		expect(radio.classList.contains('radio')).toBe(true);
		expect(radio).toMatchSnapshot();
	});

	test('has label', () => {
		render(<Radio label='Label' />);
		const radio = screen.getByTestId('radio');
		const label = within(radio).getByText('Label');
		expect(label).not.toBeNull();
		expect(radio).toMatchSnapshot();
	});

	test('checked', () => {
		render(<Radio />);
		const radio = screen.getByTestId('radio');
		const inner: HTMLInputElement = within(radio).getByTestId('radio-inner');
		expect(inner.checked).toEqual(false);
		userEvent.click(inner);
		expect(inner.checked).toEqual(true);
		expect(radio).toMatchSnapshot();
	});

	test('disabled', () => {
		render(<Radio disabled />);
		const radio = screen.getByTestId('radio');
		const inner: HTMLInputElement = within(radio).getByTestId('radio-inner');
		expect(inner.disabled).toEqual(true);
		expect(inner.checked).toEqual(false);
		userEvent.click(inner);
		expect(inner.checked).toEqual(false);
		expect(radio).toMatchSnapshot();
	});

	test('onChange', () => {
		let value = 0;
		render(
			<Radio
				onChange={() => {
					value = 1;
				}}
			/>
		);
		const radio = screen.getByTestId('radio');
		expect(value).toBe(0);
		userEvent.click(radio);
		expect(value).toBe(1);
		expect(radio).toMatchSnapshot();
	});
});
