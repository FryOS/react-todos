import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, push, set, get, query, remove } from "firebase/database";

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

export async function add(user, deed){
  const task = await push( ref(getDatabase(), `user/${user.id}/todos`));
  await set(task, deed);
  const snapshot = await get(query(task));
  console.log(task);
  const oDeed = snapshot.val();
  oDeed.key = task.key;
  return oDeed;
}

export async function getList(user){
  const snapshot = await get(query(ref(getDatabase(),`user/${user.id}/todos`)));
  const tasks = [];
  let deed;
  snapshot.forEach((item) => {
    deed = item.val();
    deed.key = item.key;
    tasks.push(deed);
  });
  return tasks;
}

export function setDone(user, key){
  return set((ref(getDatabase(),`user/${user.uid}/todos/${key}/done`), true))
}

export function deleteTaks(user, key){
  return remove(ref(getDatabase(),`user/${user.uid}/todos/${key}`))
}




