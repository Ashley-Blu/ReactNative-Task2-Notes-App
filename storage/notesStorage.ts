// storage/notesStorage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
const NOTES_KEY = '@notes';

export const getNotes = async () => {
  const notes = await AsyncStorage.getItem(NOTES_KEY);
  return notes ? JSON.parse(notes) : [];
};

export const saveNotes = async (notes: any[]) => {
  await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
};

export const addNote = async (note: any) => {
  const notes = await getNotes();
  notes.push(note);
  await saveNotes(notes);
};

export const updateNote = async (updatedNote: any) => {
  const notes = await getNotes();
  const newNotes = notes.map((n: any) => n.id === updatedNote.id ? updatedNote : n);
  await saveNotes(newNotes);
};

export const deleteNote = async (id: string) => {
  const notes = await getNotes();
  const newNotes = notes.filter((n: any) => n.id !== id);
  await saveNotes(newNotes);
};
