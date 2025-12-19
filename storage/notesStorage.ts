// storage/notesStorage.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

export type NoteCategory = "Work" | "Study" | "Personal";

export type StoredNote = {
  id: string;
  title?: string;
  content: string;
  category: NoteCategory;
  createdAt: string;
};

const NOTES_KEY = "@notes";

/**
 * Get all notes
 */
export const getNotes = async (): Promise<StoredNote[]> => {
  const stored = await AsyncStorage.getItem(NOTES_KEY);
  return stored ? JSON.parse(stored) : [];
};

/**
 * Save notes list
 */
export const saveNotes = async (notes: StoredNote[]): Promise<void> => {
  await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
};

/**
 * Add a new note
 */
export const addNote = async (note: StoredNote): Promise<void> => {
  const notes = await getNotes();
  notes.push(note);
  await saveNotes(notes);
};

/**
 * Update an existing note
 */
export const updateNote = async (updatedNote: StoredNote): Promise<void> => {
  const notes = await getNotes();
  const updated = notes.map(note =>
    note.id === updatedNote.id ? updatedNote : note
  );
  await saveNotes(updated);
};

/**
 * Delete a note by ID
 */
export const deleteNote = async (id: string): Promise<void> => {
  const notes = await getNotes();
  const filtered = notes.filter(note => note.id !== id);
  await saveNotes(filtered);
};

/**
 * Get notes by category
 */
export const getNotesByCategory = async (
  category: NoteCategory
): Promise<StoredNote[]> => {
  const notes = await getNotes();
  return notes.filter(note => note.category === category);
};
