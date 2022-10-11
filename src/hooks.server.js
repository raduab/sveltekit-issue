import { foo } from './foo';

export const handle = ({ event, resolve }) => {
	// do something with foo
	console.log(foo);

	return resolve(event);
};
