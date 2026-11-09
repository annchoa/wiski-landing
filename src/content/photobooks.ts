import miamiBack from "@/assets/photobooks/miami-back.webp";
import miamiFront from "@/assets/photobooks/miami-front.webp";
import miamiOpen from "@/assets/photobooks/miami-open.webp";
import newYorkBack from "@/assets/photobooks/new-york-back.webp";
import newYorkFront from "@/assets/photobooks/new-york-front.webp";
import newYorkOpen from "@/assets/photobooks/new-york-open.webp";
import orlandoBack from "@/assets/photobooks/orlando-back.webp";
import orlandoFront from "@/assets/photobooks/orlando-front.webp";
import orlandoOpen from "@/assets/photobooks/orlando-open.webp";
import peruBack from "@/assets/photobooks/peru-back.webp";
import peruFront from "@/assets/photobooks/peru-front.webp";
import peruOpen from "@/assets/photobooks/peru-open.webp";
import romeBack from "@/assets/photobooks/rome-back.webp";
import romeOpen1 from "@/assets/photobooks/rome-open-1.webp";
import romeOpen2 from "@/assets/photobooks/rome-open-2.webp";

export type Place = "miami" | "newYork" | "orlando" | "peru" | "rome";
export type Part = "front" | "back" | "open";

export interface PhotobookPhoto {
  id: string;
  src: string;
  place: Place;
  part: Part;
  /** Set when a photobook has more than one photo of the same part. */
  view?: number;
}

export const PHOTOS = {
  miamiFront: { id: "miami-front", src: miamiFront, place: "miami", part: "front" },
  miamiBack: { id: "miami-back", src: miamiBack, place: "miami", part: "back" },
  miamiOpen: { id: "miami-open", src: miamiOpen, place: "miami", part: "open" },
  newYorkFront: { id: "new-york-front", src: newYorkFront, place: "newYork", part: "front" },
  newYorkBack: { id: "new-york-back", src: newYorkBack, place: "newYork", part: "back" },
  newYorkOpen: { id: "new-york-open", src: newYorkOpen, place: "newYork", part: "open" },
  orlandoFront: { id: "orlando-front", src: orlandoFront, place: "orlando", part: "front" },
  orlandoBack: { id: "orlando-back", src: orlandoBack, place: "orlando", part: "back" },
  orlandoOpen: { id: "orlando-open", src: orlandoOpen, place: "orlando", part: "open" },
  peruFront: { id: "peru-front", src: peruFront, place: "peru", part: "front" },
  peruBack: { id: "peru-back", src: peruBack, place: "peru", part: "back" },
  peruOpen: { id: "peru-open", src: peruOpen, place: "peru", part: "open" },
  romeBack: { id: "rome-back", src: romeBack, place: "rome", part: "back" },
  romeOpen1: { id: "rome-open-1", src: romeOpen1, place: "rome", part: "open", view: 1 },
  romeOpen2: { id: "rome-open-2", src: romeOpen2, place: "rome", part: "open", view: 2 },
} satisfies Record<string, PhotobookPhoto>;

// Every photobook except Miami. The Miami photobook belongs to Wiski Ruta.
export const SHOWCASE_PHOTOS: PhotobookPhoto[] = [
  PHOTOS.newYorkFront,
  PHOTOS.orlandoOpen,
  PHOTOS.peruBack,
  PHOTOS.romeOpen1,
  PHOTOS.newYorkOpen,
  PHOTOS.peruFront,
  PHOTOS.orlandoBack,
  PHOTOS.romeBack,
  PHOTOS.newYorkBack,
  PHOTOS.orlandoFront,
  PHOTOS.peruOpen,
  PHOTOS.romeOpen2,
];

export const RUTA_PHOTOS = {
  open: PHOTOS.miamiOpen,
  front: PHOTOS.miamiFront,
  back: PHOTOS.miamiBack,
};
