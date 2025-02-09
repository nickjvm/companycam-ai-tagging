"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";
import axios from "axios";
import "@tensorflow/tfjs";
import { useAuth } from "@/lib/hooks/useAuth";
import pickPhoto from "@/utils/pickPhoto";
import { analyzeImage } from "@/utils/tagging";
import { getAllTags, getPhoto, savePhotoTags } from "@/utils/indexedDB";

export type PhotoWithTags = Photo & { tags: string[] };

type Context = {
  photos: PhotoWithTags[];
  loading: boolean;
  tags: string[];
};
// Create the context
const PhotosContext = createContext<Context>({
  loading: true,
  photos: [],
  tags: [],
});

// Provider Component
export const PhotosProvider = ({ children }: { children: React.ReactNode }) => {
  const [photos, setPhotos] = useState<PhotoWithTags[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, startTransition] = useTransition();
  const { token } = useAuth();

  const fetchAndProcessPhotos = useCallback(() => {
    if (!token) {
      return;
    }
    startTransition(async () => {
      try {
        const response = await axios.get<Photo[]>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/photos`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const fetchedPhotos = response.data;
        const taggedPhotos: PhotoWithTags[] = [];

        for (const photo of fetchedPhotos) {
          const imageElement = new Image();
          imageElement.crossOrigin = "anonymous";
          imageElement.src = pickPhoto(photo.uris, "original")!.url;

          const taggedPhoto = await getPhoto(photo.id);
          if (!taggedPhoto) {
            const tags = await analyzeImage(imageElement);

            await savePhotoTags(
              photo.id,
              pickPhoto(photo.uris, "original")!.url,
              tags.map((tag) => tag.split(", ")).flat()
            );
            taggedPhotos.push({ ...photo, tags });
          } else {
            taggedPhotos.push({ ...photo, tags: taggedPhoto.tags });
          }
        }

        const tags = await getAllTags();
        setPhotos(taggedPhotos); // Load stored data
        setTags(tags);
      } catch (e) {
        console.log(e);
      }
    });
  }, [token]);

  useEffect(() => {
    fetchAndProcessPhotos();
  }, [fetchAndProcessPhotos]);

  return (
    <PhotosContext.Provider value={{ photos, loading, tags }}>
      {children}
    </PhotosContext.Provider>
  );
};

// Hook to use the context
export const usePhotos = () => useContext(PhotosContext);
