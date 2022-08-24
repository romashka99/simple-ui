import { render, screen, within } from '@testing-library/react';
import Progress from '.';

describe('Test Progress', () => {
	test('without attr', () => {
		render(<Progress value={10} />);
		const progress = screen.getByTestId('progress');
		const inner = within(progress).getByTestId('progress-inner');
		const label = within(progress).getByTestId('progress-label');
		expect(inner).not.toBeNull();
		expect(label).not.toBeNull();
		expect(progress.classList.length).toBe(1);
		expect(progress.classList.contains('progress')).toBe(true);
		expect(progress).toMatchSnapshot();
	});
});
