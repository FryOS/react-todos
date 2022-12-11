import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export async function register(email, password) {
  try {
    const userAuth = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    return userAuth.user;
  } catch (error) {
    return error.code;
  }
}
