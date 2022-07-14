import { render, screen } from '@testing-library/react';
import React from 'react';
import Input from './Input';
import userEvent from '@testing-library/user-event';

describe('Test Input', () => {
	describe('type text', () => {
		test('without attr', () => {
			render(<Input />);
			const input = screen.getByTestId('input');
			expect(input.classList.length).toBe(2);
			expect(input.classList.contains('input')).toBe(true);
			expect(input.classList.contains('input--medium')).toBe(true);
			expect(input.getAttribute('disabled')).toBeNull();
			expect(input).toMatchSnapshot();
		});

		test('size large', () => {
			render(<Input scale='large' />);
			const input = screen.getByTestId('input');
			expect(input.classList.length).toBe(2);
			expect(input.classList.contains('input')).toBe(true);
			expect(input.classList.contains('input--large')).toBe(true);
			expect(input.getAttribute('disabled')).toBeNull();
			expect(input).toMatchSnapshot();
		});

		test('size small', () => {
			render(<Input scale='small' />);
			const input = screen.getByTestId('input');
			expect(input.classList.length).toBe(2);
			expect(input.classList.contains('input')).toBe(true);
			expect(input.classList.contains('input--small')).toBe(true);
			expect(input.getAttribute('disabled')).toBeNull();
			expect(input).toMatchSnapshot();
		});
	});
});
