import { render, screen, within } from '@testing-library/react';
import React from 'react';
import TextArea from '.';
import userEvent from '@testing-library/user-event';

describe('Test TextArea', () => {
	test('without attr', () => {
		render(<TextArea />);
		const textarea = screen.getByTestId('textarea');
		const inner: HTMLInputElement =
			within(textarea).getByTestId('textarea-inner');
		expect(inner.disabled).toEqual(false);
		expect(textarea.classList.length).toBe(1);
		expect(textarea.classList.contains('textarea')).toBe(true);
		expect(textarea).toMatchSnapshot();
	});

	test('has label', () => {
		render(<TextArea label='Label' />);
		const textarea = screen.getByTestId('textarea');
		const label = within(textarea).getByText('Label');
		expect(label).not.toBeNull();
		expect(textarea).toMatchSnapshot();
	});

	test('has help text', () => {
		render(<TextArea helpText='Help text' />);
		const textarea = screen.getByTestId('textarea');
		const helpText = within(textarea).getByText('Help text');
		expect(helpText).not.toBeNull();
		expect(textarea).toMatchSnapshot();
	});

	test('disabled', () => {
		render(<TextArea disabled />);
		const textarea = screen.getByTestId('textarea');
		const inner: HTMLInputElement =
			within(textarea).getByTestId('textarea-inner');
		expect(inner.disabled).toEqual(true);
		expect(inner.value).toEqual('');
		userEvent.type(inner, 'abc');
		expect(inner.value).toEqual('');
		expect(textarea).toMatchSnapshot();
	});

	test('readOnly', () => {
		render(<TextArea readOnly />);
		const textarea = screen.getByTestId('textarea');
		const inner: HTMLInputElement =
			within(textarea).getByTestId('textarea-inner');
		expect(inner.readOnly).toEqual(true);
		expect(inner.value).toEqual('');
		userEvent.type(inner, 'abc');
		expect(inner.value).toEqual('');
		expect(textarea).toMatchSnapshot();
	});

	test('onChange', () => {
		let value = 0;
		render(
			<TextArea
				onChange={() => {
					value = 1;
				}}
			/>
		);
		const textarea = screen.getByTestId('textarea');
		const inner: HTMLInputElement =
			within(textarea).getByTestId('textarea-inner');
		expect(value).toBe(0);
		userEvent.type(inner, 'abc');
		expect(value).toBe(1);
		expect(inner.value).toBe('abc');
		expect(textarea).toMatchSnapshot();
	});
});
