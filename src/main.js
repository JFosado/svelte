import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Jose ',
		lastName: 'Fosado '
	}
});

export default app;