import { useTranslation } from "react-i18next";
import type { PhotobookPhoto as Photo } from "@/content/photobooks";

export function PhotobookPhoto({ photo, className }: { photo: Photo; className?: string }) {
  const { t } = useTranslation();
  const place = t(`places.${photo.place}`);
  const alt = photo.view
    ? t(`photos.${photo.part}View`, { place, view: photo.view })
    : t(`photos.${photo.part}`, { place });

  return <img src={photo.src} alt={alt} className={className} />;
}
