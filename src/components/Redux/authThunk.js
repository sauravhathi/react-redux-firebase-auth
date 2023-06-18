import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../Firebase/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { saveUserToLocalStorage, removeUserFromLocalStorage } from '../../utils/localStorage';
import { validateCredentials } from '../../utils/validateCredentials';

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            validateCredentials(email, password);
            const response = await signInWithEmailAndPassword(auth, email, password);
            const { uid, email: userEmail } = response.user;
            saveUserToLocalStorage({ uid, email: userEmail });
            return { uid, email: userEmail };
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                return rejectWithValue('User not registered');
            }
            if (error.code === 'auth/wrong-password') {
                return rejectWithValue('Incorrect email or password');
            }
            return rejectWithValue(error.message);
        }
    }
);

export const signupUser = createAsyncThunk(
    'auth/signupUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            validateCredentials(email, password);
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const { uid, email: userEmail } = response.user;
            saveUserToLocalStorage({ uid, email: userEmail });
            return { uid, email: userEmail };
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                return rejectWithValue('Email is already in use');
            }
            return rejectWithValue(error.message);
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, { rejectWithValue }) => {
        try {
            await signOut(auth);
            removeUserFromLocalStorage();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);