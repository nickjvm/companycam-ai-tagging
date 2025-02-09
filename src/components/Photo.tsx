import { PhotoWithTags } from "@/lib/context/PhotosContext";
import pickPhoto from "@/utils/pickPhoto";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  photo: PhotoWithTags;
};

const Photo = ({ photo }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const url = pickPhoto(photo.uris, "original")!.url;

  return (
    <>
      <div key={photo.id}>
        <div className="pt-[100%] overflow-hidden relative">
          <Image
            src={url}
            alt={photo.tags.join(", ")}
            className="cursor-pointer absolute w-full object-cover top-0 left-0 h-full"
            height="400"
            width="400"
            onClick={() => dialogRef.current?.showModal()}
          />
        </div>
      </div>
      <dialog
        className="backdrop:bg-slate-500 backdrop:bg-opacity-90"
        ref={dialogRef}
        onClick={(event) => {
          const rect = dialogRef.current?.getBoundingClientRect();
          if (!rect) return;

          const isInDialog =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;

          if (!isInDialog) {
            dialogRef.current?.close();
          }
        }}
      >
        <button
          className="absolute right-[5px] top-[5px] bg-slate-500 bg-opacity-90 text-white"
          onClick={() => dialogRef.current?.close()}
          autoFocus
          aria-label="close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Image
          src={url}
          alt={photo.tags.join(", ")}
          className="block w-[1024px] max-w-[90vw]"
          height="400"
          width="400"
          onClick={() => dialogRef.current?.showModal()}
        />
        <p className="p-3">
          <strong>Tags:</strong> {photo.tags.join(", ")}
        </p>
      </dialog>
    </>
  );
};

export default Photo;
