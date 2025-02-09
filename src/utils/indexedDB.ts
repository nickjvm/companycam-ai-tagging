import { openDB } from "idb";

const DB_NAME = "photoTaggerDB";
const STORE_NAME = "photos";

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    },
  });
};

export const savePhotoTags = async (photoId: string, url: string, tags: string[]) => {
  const db = await initDB();
  await db.put(STORE_NAME, { id: photoId, url, tags });
};

export const deletePhotoTags = async () => {
  const db = await initDB();
  await db.clear(STORE_NAME)
}

export const getAllPhotos = async (): Promise<TaggedPhoto[]> => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};

export const getAllTags = async (): Promise<string[]> => {
  const db = await initDB();
  const photos: TaggedPhoto[] = await db.getAll(STORE_NAME)
  
  const tags = photos.reduce((acc: string[], photo) => {
    return acc.concat(photo.tags)
  }, [])

  return [...new Set(tags)]
}

export const getPhoto = async (photoId: string): Promise<TaggedPhoto> => {
    const db = await initDB();
    return await db.get(STORE_NAME, photoId)
}