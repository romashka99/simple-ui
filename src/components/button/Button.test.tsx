import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Button from '.';

describe('Test Button', () => {
	describe('default', () => {
		test('without attr', () => {
			render(<Button>Click</Button>);
			const button: HTMLButtonElement = screen.getByRole('button');
			expect(button.classList.length).toBe(1);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.disabled).toEqual(false);
			expect(button).toMatchSnapshot();
		});

		test('plain', () => {
			render(<Button plain>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(2);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('is-plain')).toBe(true);
			expect(button).toMatchSnapshot();
		});

		test('round', () => {
			render(<Button round>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(2);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('is-round')).toBe(true);
			expect(button).toMatchSnapshot();
		});

		test('disabled', () => {
			render(<Button disabled>Click</Button>);
			const button: HTMLButtonElement = screen.getByRole('button');
			expect(button.disabled).toEqual(true);
			expect(button).toMatchSnapshot();
		});

		test('custom className', () => {
			render(<Button className='test-class'>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(2);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('test-class')).toBe(true);
			expect(button).toMatchSnapshot();
		});

		test('onClick', () => {
			let value = 0;
			render(
				<Button
					onClick={() => {
						value = 1;
					}}
				>
					Click
				</Button>
			);
			const button = screen.getByRole('button');
			expect(value).toBe(0);
			userEvent.click(button);
			expect(value).toBe(1);
			expect(button).toMatchSnapshot();
		});

		test('onClick with disabled', () => {
			let value = 0;
			render(
				<Button
					onClick={() => {
						value = 1;
					}}
					disabled
				>
					Click
				</Button>
			);
			const button = screen.getByRole('button');
			expect(value).toBe(0);
			userEvent.click(button);
			expect(value).toBe(0);
			expect(button).toMatchSnapshot();
		});
	});
});
