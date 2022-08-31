<script>
	import { app } from '$lib/firebase.config';
	import { getFirestore, getDocs, collection } from 'firebase/firestore';

	const db = getFirestore(app);

	const collectionRef = collection(db, 'admins');

	(async function () {
		const docsSnap = await getDocs(collectionRef);
		docsSnap.forEach((doc) => {
			console.log(doc.data());
		});
	})();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
