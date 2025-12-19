// storage/authStorage.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

export type StoredUser = {
  email: string;
  username: string;
  password: string;
};

const USERS_KEY = "@users";
const LOGGED_IN_KEY = "@logged_in_user";

/**
 * Register a new user
 * - Prevents duplicate emails
 */
export const registerUser = async (user: StoredUser): Promise<boolean> => {
  const stored = await AsyncStorage.getItem(USERS_KEY);
  const users: StoredUser[] = stored ? JSON.parse(stored) : [];

  const alreadyExists = users.some(u => u.email === user.email);
  if (alreadyExists) {
    return false;
  }

  users.push(user);
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
};

/**
 * Login user with email & password
 */
export const loginUser = async (
  email: string,
  password: string
): Promise<StoredUser | null> => {
  const stored = await AsyncStorage.getItem(USERS_KEY);
  const users: StoredUser[] = stored ? JSON.parse(stored) : [];

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) return null;

  await AsyncStorage.setItem(LOGGED_IN_KEY, JSON.stringify(user));
  return user;
};

/**
 * Get currently logged-in user
 */
export const getLoggedInUser = async (): Promise<StoredUser | null> => {
  const user = await AsyncStorage.getItem(LOGGED_IN_KEY);
  return user ? JSON.parse(user) : null;
};

/**
 * Logout user
 */
export const logoutUser = async (): Promise<void> => {
  await AsyncStorage.removeItem(LOGGED_IN_KEY);
};
