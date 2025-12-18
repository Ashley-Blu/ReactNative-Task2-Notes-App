// storage/authStorage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = '@users';
const LOGGED_IN_KEY = '@logged_in_user';

export const registerUser = async (user: { email: string; username: string; password: string }) => {
  const users = JSON.parse((await AsyncStorage.getItem(USERS_KEY)) || '[]');
  users.push(user);
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
};

export const loginUser = async (email: string, password: string) => {
  const users = JSON.parse((await AsyncStorage.getItem(USERS_KEY)) || '[]');
  const user = users.find((u: any) => u.email === email && u.password === password);
  if (user) {
    await AsyncStorage.setItem(LOGGED_IN_KEY, JSON.stringify(user));
    return user;
  }
  return null;
};

export const getLoggedInUser = async () => {
  const user = await AsyncStorage.getItem(LOGGED_IN_KEY);
  return user ? JSON.parse(user) : null;
};

export const logoutUser = async () => {
  await AsyncStorage.removeItem(LOGGED_IN_KEY);
};
