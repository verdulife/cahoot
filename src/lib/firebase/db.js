import { collection, getDocs } from 'firebase/firestore';
import { getDb } from '$lib/firebase/config';

export async function getAdmin() {
	const { db } = getDb();
	const adminRef = collection(db, 'admins');
	const snapshoot = await getDocs(adminRef);

	return snapshoot.docs.map((doc) => {
		return doc.data();
	});
}
