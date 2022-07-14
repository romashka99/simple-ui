import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Button from './Button';

describe('Test Button', () => {
	describe('default', () => {
		test('without attr', () => {
			render(<Button>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(3);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('button--default')).toBe(true);
			expect(button.classList.contains('button--medium')).toBe(true);
			expect(button.getAttribute('disabled')).toBeNull();
			expect(button).toMatchSnapshot();
		});

		test('plain', () => {
			render(<Button plain>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(4);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('button--default')).toBe(true);
			expect(button.classList.contains('button--medium')).toBe(true);
			expect(button.classList.contains('is-plain')).toBe(true);
			expect(button.getAttribute('disabled')).toBeNull();
			expect(button).toMatchSnapshot();
		});

		test('round', () => {
			render(<Button round>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(4);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('button--default')).toBe(true);
			expect(button.classList.contains('button--medium')).toBe(true);
			expect(button.classList.contains('is-round')).toBe(true);
			expect(button.getAttribute('disabled')).toBeNull();
			expect(button).toMatchSnapshot();
		});

		test('disabled', () => {
			render(<Button disabled>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(3);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('button--default')).toBe(true);
			expect(button.classList.contains('button--medium')).toBe(true);
			expect(button.getAttribute('disabled')).not.toBeNull();
			expect(button).toMatchSnapshot();
		});

		test('link', () => {
			render(<Button link>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(4);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('button--default')).toBe(true);
			expect(button.classList.contains('button--medium')).toBe(true);
			expect(button.classList.contains('is-link')).toBe(true);
			expect(button.getAttribute('disabled')).toBeNull();
			expect(button).toMatchSnapshot();
		});

		test('small', () => {
			render(<Button scale='small'>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(3);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('button--default')).toBe(true);
			expect(button.classList.contains('button--small')).toBe(true);
			expect(button.getAttribute('disabled')).toBeNull();
			expect(button).toMatchSnapshot();
		});

		test('large', () => {
			render(<Button scale='large'>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(3);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('button--default')).toBe(true);
			expect(button.classList.contains('button--large')).toBe(true);
			expect(button.getAttribute('disabled')).toBeNull();
			expect(button).toMatchSnapshot();
		});

		test('custom className', () => {
			render(<Button className='test-class'>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(4);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('button--default')).toBe(true);
			expect(button.classList.contains('button--medium')).toBe(true);
			expect(button.classList.contains('test-class')).toBe(true);
			expect(button.getAttribute('disabled')).toBeNull();
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
			expect(button.classList.length).toBe(3);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('button--default')).toBe(true);
			expect(button.classList.contains('button--medium')).toBe(true);
			expect(button.getAttribute('disabled')).toBeNull();
			expect(value).toBe(0);
			userEvent.click(button);
			expect(value).toBe(1);
			expect(button).toMatchSnapshot();
		});
	});

	describe('color', () => {
		test('primary', () => {
			render(<Button color='primary'>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(3);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('button--primary')).toBe(true);
			expect(button.classList.contains('button--medium')).toBe(true);
			expect(button.getAttribute('disabled')).toBeNull();
			expect(button).toMatchSnapshot();
		});

		test('success', () => {
			render(<Button color='success'>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(3);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('button--success')).toBe(true);
			expect(button.classList.contains('button--medium')).toBe(true);
			expect(button.getAttribute('disabled')).toBeNull();
			expect(button).toMatchSnapshot();
		});

		test('error', () => {
			render(<Button color='error'>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(3);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('button--error')).toBe(true);
			expect(button.classList.contains('button--medium')).toBe(true);
			expect(button.getAttribute('disabled')).toBeNull();
			expect(button).toMatchSnapshot();
		});

		test('info', () => {
			render(<Button color='info'>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(3);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('button--info')).toBe(true);
			expect(button.classList.contains('button--medium')).toBe(true);
			expect(button.getAttribute('disabled')).toBeNull();
			expect(button).toMatchSnapshot();
		});

		test('warning', () => {
			render(<Button color='warning'>Click</Button>);
			const button = screen.getByRole('button');
			expect(button.classList.length).toBe(3);
			expect(button.classList.contains('button')).toBe(true);
			expect(button.classList.contains('button--warning')).toBe(true);
			expect(button.classList.contains('button--medium')).toBe(true);
			expect(button.getAttribute('disabled')).toBeNull();
			expect(button).toMatchSnapshot();
		});
	});
});
