import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import config from './config.json';

export const app = initializeApp(config);
export const auth = getAuth(app);
export const createUserWithEmail = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth as any, email, password);
};