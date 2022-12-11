import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

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

export async function login(email, password) {
  try {
    const auth = await signInWithEmailAndPassword(getAuth(), email, password);
    return auth.user;
  } catch (error) {
    return error.code;
  }
}

export async function logout(){
  await signOut(getAuth())
}


