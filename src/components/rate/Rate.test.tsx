import { render, screen, within } from '@testing-library/react';
import React from 'react';
import Rate from '.';
import userEvent from '@testing-library/user-event';

describe('Test Input', () => {
	test('without attr', () => {
		render(<Rate />);
		const rate: HTMLButtonElement = screen.getByTestId('rate');
		expect(rate.classList.length).toBe(1);
		expect(rate.classList.contains('rate')).toEqual(true);
		expect(rate.disabled).toEqual(false);
		expect(rate).toMatchSnapshot();
	});

	test('disabled', () => {
		render(<Rate disabled />);
		const rate: HTMLButtonElement = screen.getByTestId('rate');
		expect(rate.disabled).toEqual(true);
		expect(rate).toMatchSnapshot();
	});

	test('onChange', () => {
		let value = 0;
		render(
			<Rate
				onChange={valueRate => {
					value = valueRate;
				}}
			/>
		);
		const rate: HTMLButtonElement = screen.getByTestId('rate');
		let star: HTMLSpanElement = within(rate).getByTestId('rate-star-0');
		expect(value).toEqual(0);
		userEvent.click(star);
		expect(value).toEqual(1);
		expect(rate).toMatchSnapshot();
	});
});
