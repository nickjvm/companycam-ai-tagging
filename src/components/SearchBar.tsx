import { useState } from "react";
import Fuse from "fuse.js";
import { usePhotos } from "@/lib/context/PhotosContext";
import Photo from "./Photo";
import Autocomplete from "./Autocomplete";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { photos, tags } = usePhotos();

  const fuse = new Fuse(photos, { keys: ["tags"], threshold: 0.3 });

  const results = query ? fuse.search(query).map(({ item }) => item) : photos;

  return (
    <div className="space-y-4">
      <div className="relative">
        <Autocomplete
          placeholder="Start typing to search..."
          value={query}
          options={tags}
          onChange={(value) => setQuery(value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {results.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
