import React, { useState } from 'react';
import { Button, Input } from './components';

export default function App() {
	const [value, setValue] = useState('');

	return (
		<>
			<p></p>
			<Button size='large'>Click</Button>
			<Button color='primary'>Click</Button>
			<Button color='success' size='small'>
				Click
			</Button>
			<Button color='info'>Click</Button>
			<Button color='error'>Click</Button>
			<Button color='warning'>Click</Button>

			<p></p>
			<Button plain>Click</Button>
			<Button color='primary' plain>
				Click
			</Button>
			<Button color='success' plain>
				Click
			</Button>
			<Button color='info' plain>
				Click
			</Button>
			<Button color='error' plain>
				Click
			</Button>
			<Button color='warning' plain>
				Click
			</Button>

			<p></p>
			<Button round>Click</Button>
			<Button color='primary' round>
				Click
			</Button>
			<Button color='success' round>
				Click
			</Button>
			<Button color='info' round>
				Click
			</Button>
			<Button color='error' round>
				Click
			</Button>
			<Button color='warning' round>
				Click
			</Button>

			<p></p>
			<Button disabled>Click</Button>
			<Button color='primary' disabled>
				Click
			</Button>
			<Button color='success' disabled>
				Click
			</Button>
			<Button color='info' disabled>
				Click
			</Button>
			<Button color='error' disabled>
				Click
			</Button>
			<Button color='warning' disabled>
				Click
			</Button>

			<p></p>
			<Button link>link</Button>
			<Button color='primary' link>
				link
			</Button>
			<Button color='success' link>
				link
			</Button>
			<Button color='info' link>
				link
			</Button>
			<Button color='error' link>
				link
			</Button>
			<Button color='warning' link>
				link
			</Button>

			<Input value={value} onChange={event => setValue(event.target.value)} />
		</>
	);
}
