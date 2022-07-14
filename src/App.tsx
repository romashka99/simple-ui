import React, { useState } from 'react';
import { Button, Input } from './components';

export default function App() {
	const [value, setValue] = useState('');
	const [value1, setValue1] = useState('');
	const [value2, setValue2] = useState('');
	return (
		<>
			{/* <Button>Click</Button>
			<br />
			<Button color='primary'>Click</Button>
			<br />
			<Button color='success'>Click</Button>
			<br />
			<Button color='error'>Click</Button>
			<br />
			<Button color='info'>Click</Button>
			<br />
			<Button color='warning'>Click</Button>
			<br />

			<Button plain>Click</Button>
			<br />
			<Button color='primary' plain>
				Click
			</Button>
			<br />
			<Button color='success' plain>
				Click
			</Button>
			<br />
			<Button color='error' plain>
				Click
			</Button>
			<br />
			<Button color='info' plain>
				Click
			</Button>
			<br />
			<Button color='warning' plain>
				Click
			</Button>
			<br />

			<Button round plain>
				Click
			</Button>
			<br />
			<Button color='primary' round plain>
				Click
			</Button>
			<br />
			<Button color='success' round plain>
				Click
			</Button>
			<br />
			<Button color='error' round plain>
				Click
			</Button>
			<br />
			<Button color='info' round plain>
				Click
			</Button>
			<br />
			<Button color='warning' round plain>
				Click
			</Button>
			<br />

			<Button size='large'>Click</Button>
			<br />
			<Button>Click</Button>
			<br />
			<Button size='small'>Click</Button>
			<br />

			<Button size='large' round>
				Click
			</Button>
			<br />
			<Button round>Click</Button>
			<br />
			<Button size='small' round>
				Click
			</Button>
			<br /> */}
			<Button>Click</Button>
			<Input value={value} onChange={event => setValue(event.target.value)} />
			<Input value={value1} onChange={event => setValue1(event.target.value)} />
			<Input value={value2} onChange={event => setValue2(event.target.value)} />
		</>
	);
}
