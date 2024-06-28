import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName: string, lastName: string, fileName: string) {
    const promises = [
        signUpUser(firstName, lastName),
        uploadPhoto(fileName),
    ];

    const results = await Promise.allSettled(promises);

    return results.map((result) => {
        if (result.status === 'fulfilled') {
            return { status: result.status, value: result.value };
        }
        return { status: result.status, value: `${result.reason}` };
    });
}
