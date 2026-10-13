import { useState } from "react";
import { PHOTOS_CLOUD_URL } from "../../config";

// Локальные фото: src/assets/lecturers/<id>.jpg
const local = import.meta.glob("../../assets/lecturers/*.jpg", {
  eager: true,
  import: "default",
});

const localSrc = (id) => local[`../../assets/lecturers/${id}.jpg`];

// Если задан VITE_PHOTOS_URL, фото берётся из облака; при ошибке — локальный файл.
export const Photo = ({ id, name, className }) => {
  const [cloudFailed, setCloudFailed] = useState(false);
  const useCloud = PHOTOS_CLOUD_URL && !cloudFailed;
  const src = useCloud
    ? `${PHOTOS_CLOUD_URL.replace(/\/$/, "")}/${id}.jpg`
    : localSrc(id);

  return (
    <img
      className={className}
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setCloudFailed(true)}
    />
  );
};
