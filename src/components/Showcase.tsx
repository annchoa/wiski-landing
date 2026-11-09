import { PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PhotobookPhoto } from "@/components/PhotobookPhoto";
import { SHOWCASE_PHOTOS } from "@/content/photobooks";

export function Showcase() {
  const { t } = useTranslation();
  const [paused, setPaused] = useState(false);
  const ControlIcon = paused ? PlayIcon : PauseIcon;

  return (
    <section
      id="showcase"
      data-paused={paused}
      aria-labelledby="showcase-title"
      className="group scroll-mt-20 bg-muted py-16 md:py-24"
    >
      <h2
        id="showcase-title"
        className="px-6 text-center font-heading text-[32px] leading-[1.1] font-bold md:text-[40px]"
      >
        {t("showcase.title")}
      </h2>
      <div className="mt-10 overflow-hidden motion-reduce:overflow-x-auto md:mt-14">
        <ul className="flex w-max animate-marquee group-data-[paused=true]:[animation-play-state:paused] hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:[&>li[aria-hidden]]:hidden">
          {[false, true].flatMap((isCopy) =>
            SHOWCASE_PHOTOS.map((photo) => (
              <li
                key={`${isCopy ? "copy" : "original"}-${photo.id}`}
                aria-hidden={isCopy || undefined}
                className="pr-4 md:pr-6"
              >
                <PhotobookPhoto photo={photo} className="h-60 w-auto rounded-lg md:h-80" />
              </li>
            )),
          )}
        </ul>
      </div>
      <div className="mx-auto mt-6 flex max-w-[1120px] justify-end px-6">
        <button
          type="button"
          aria-label={paused ? t("showcase.resume") : t("showcase.pause")}
          onClick={() => setPaused(!paused)}
          className="flex size-11 items-center justify-center rounded-full border bg-background"
        >
          <ControlIcon aria-hidden className="size-5" />
        </button>
      </div>
    </section>
  );
}
