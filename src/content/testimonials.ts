import { PHOTOS, type PhotobookPhoto } from "@/content/photobooks";

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  photo: PhotobookPhoto;
}

// TODO: PLACEHOLDER. These testimonials are invented. Replace them with real
// ones (name, city, text in the locale files, photo of the photobook) before
// the page goes public.
export const TESTIMONIALS: Testimonial[] = [
  { id: "camila", name: "Camila R.", city: "Quito", photo: PHOTOS.peruOpen },
  { id: "andres", name: "Andrés M.", city: "Cuenca", photo: PHOTOS.romeOpen1 },
  { id: "daniela", name: "Daniela V.", city: "Guayaquil", photo: PHOTOS.orlandoOpen },
];
