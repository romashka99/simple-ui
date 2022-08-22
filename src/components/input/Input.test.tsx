import { render, screen, within } from '@testing-library/react';
import React from 'react';
import Input from '.';
import userEvent from '@testing-library/user-event';

describe('Test Input', () => {
	test('without attr', () => {
		render(<Input />);
		const input = screen.getByTestId('input');
		const inner: HTMLInputElement = within(input).getByTestId('input-inner');
		expect(inner.disabled).toEqual(false);
		expect(input.classList.length).toBe(1);
		expect(input.classList.contains('input')).toBe(true);
		expect(input).toMatchSnapshot();
	});

	test('has label', () => {
		render(<Input label='Label' />);
		const input = screen.getByTestId('input');
		const label = within(input).getByText('Label');
		expect(label).not.toBeNull();
		expect(input).toMatchSnapshot();
	});

	test('disabled', () => {
		render(<Input disabled />);
		const input = screen.getByTestId('input');
		const inner: HTMLInputElement = within(input).getByTestId('input-inner');
		expect(inner.disabled).toEqual(true);
		expect(inner.value).toEqual('');
		userEvent.type(inner, 'abc');
		expect(inner.value).toEqual('');
		expect(input).toMatchSnapshot();
	});

	test('readOnly', () => {
		render(<Input readOnly />);
		const input = screen.getByTestId('input');
		const inner: HTMLInputElement = within(input).getByTestId('input-inner');
		expect(inner.readOnly).toEqual(true);
		expect(inner.value).toEqual('');
		userEvent.type(inner, 'abc');
		expect(inner.value).toEqual('');
		expect(input).toMatchSnapshot();
	});

	test('onChange', () => {
		let value = 0;
		render(
			<Input
				onChange={() => {
					value = 1;
				}}
			/>
		);
		const input = screen.getByTestId('input');
		const inner: HTMLInputElement = within(input).getByTestId('input-inner');
		expect(value).toBe(0);
		userEvent.type(inner, 'abc');
		expect(value).toBe(1);
		expect(inner.value).toBe('abc');
		expect(input).toMatchSnapshot();
	});
});
