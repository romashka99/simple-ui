import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Slider from '.';

describe('Test Slider', () => {
	test('without attr', () => {
		render(<Slider />);
		const slider = screen.getByTestId('slider');
		const inner: HTMLDivElement = within(slider).getByTestId('slider-inner');
		const filled: HTMLDivElement = within(slider).getByTestId('slider-filled');
		const control: HTMLButtonElement =
			within(slider).getByTestId('slider-control');
		expect(inner).not.toBeNull();
		expect(filled).not.toBeNull();
		expect(control).not.toBeNull();
		expect(slider.classList.length).toBe(1);
		expect(slider.classList.contains('slider')).toBe(true);
		expect(slider).toMatchSnapshot();
	});

	test('disabled', () => {
		render(<Slider disabled />);
		const slider = screen.getByTestId('slider');
		expect(slider.classList.length).toBe(2);
		expect(slider.classList.contains('slider')).toBe(true);
		expect(slider.classList.contains('is-disabled')).toBe(true);
		expect(slider).toMatchSnapshot();
	});

	test('onChange', () => {
		let value = 0;
		render(
			<Slider
				onChange={() => {
					value = 1;
				}}
			/>
		);
		const slider = screen.getByTestId('slider');
		const inner: HTMLDivElement = within(slider).getByTestId('slider-inner');
		expect(value).toBe(0);
		userEvent.click(inner);
		expect(value).toBe(1);
		expect(slider).toMatchSnapshot();
	});
});
