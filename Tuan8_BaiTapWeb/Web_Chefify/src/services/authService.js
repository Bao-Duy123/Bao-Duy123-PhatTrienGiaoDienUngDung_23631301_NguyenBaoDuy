// Simple auth service that reads from public/users.json and authenticates by email
const API_DELAY = 250;

async function fetchUsers() {
  // users.json is placed in /public so it is served at runtime
  const res = await fetch('/users.json');
  if (!res.ok) throw new Error('Failed to load users');
  const data = await res.json();
  return data;
}

export async function loginByEmail(email) {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await fetchUsers();
      const found = users.find((u) => u.email.toLowerCase() === String(email).toLowerCase());
      setTimeout(() => {
        if (found) resolve(found);
        else reject(new Error('User not found'));
      }, API_DELAY);
    } catch (err) {
      reject(err);
    }
  });
}

export async function getUsers() {
  return fetchUsers();
}
