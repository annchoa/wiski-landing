import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { PhotobookPhoto } from "@/components/PhotobookPhoto";
import type { PhotobookPhoto as Photo } from "@/content/photobooks";
import { cn } from "@/lib/utils";

const ARROW_CLASS =
  "absolute top-1/2 z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-foreground shadow-md transition-all hover:scale-110 focus-visible:opacity-100 group-hover/carousel:opacity-100 md:flex md:opacity-0";

/** Show each photo whole, one at a time. The customer swipes or uses the arrows. */
export function PhotoCarousel({ photos }: { photos: Photo[] }) {
  const { t } = useTranslation();
  const track = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function updateActiveIndex() {
    const element = track.current;
    if (element) setActiveIndex(Math.round(element.scrollLeft / element.clientWidth));
  }

  function showNext(direction: 1 | -1) {
    const element = track.current;
    if (element) element.scrollBy({ left: direction * element.clientWidth });
  }

  return (
    <div className="group/carousel relative bg-muted">
      <div
        ref={track}
        onScroll={updateActiveIndex}
        className="flex snap-x snap-mandatory overflow-x-auto motion-safe:scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo) => (
          <div key={photo.id} className="aspect-[3/2] w-full shrink-0 snap-center">
            <PhotobookPhoto photo={photo} className="size-full object-contain" />
          </div>
        ))}
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-3 flex justify-center gap-2 md:hidden">
        {photos.map((photo, index) => (
          <span
            key={photo.id}
            className={cn(
              "size-2 rounded-full shadow-sm",
              index === activeIndex ? "bg-white" : "bg-muted-foreground/40",
            )}
          />
        ))}
      </div>
      <button
        type="button"
        aria-label={t("products.previousPhoto")}
        onClick={() => showNext(-1)}
        className={`${ARROW_CLASS} left-3`}
      >
        <CaretLeftIcon aria-hidden className="size-5" weight="bold" />
      </button>
      <button
        type="button"
        aria-label={t("products.nextPhoto")}
        onClick={() => showNext(1)}
        className={`${ARROW_CLASS} right-3`}
      >
        <CaretRightIcon aria-hidden className="size-5" weight="bold" />
      </button>
    </div>
  );
}
