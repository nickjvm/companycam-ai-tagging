import { usePhotos } from "@/lib/context/PhotosContext";
import Photo from "./Photo";

const PhotoGallery = () => {
  const { photos, loading } = usePhotos();

  if (loading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  return (
    <div>
      <h2>CompanyCam Photos</h2>
      <div className="grid grid-cols-4 gap-3">
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
