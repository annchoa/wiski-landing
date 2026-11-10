import { StarIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { PhotobookPhoto } from "@/components/PhotobookPhoto";
import { TESTIMONIALS } from "@/content/testimonials";

const RATING = 5;
const STAR_CLASS = "size-5 text-primary";

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="scroll-mt-20 px-6 py-16 md:py-24"
    >
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10 md:gap-14">
        <h2
          id="testimonials-title"
          className="text-center font-heading text-[32px] leading-[1.1] font-bold md:text-[40px]"
        >
          {t("testimonials.title")}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ id, name, city, photo }) => (
            <article
              key={id}
              aria-labelledby={`testimonial-${id}`}
              className="flex flex-col overflow-hidden rounded-lg border bg-card"
            >
              <PhotobookPhoto photo={photo} className="aspect-[357/240] w-full object-cover" />
              <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
                <div
                  role="img"
                  aria-label={t("testimonials.rating", { rating: RATING })}
                  className="flex gap-1"
                >
                  {Array.from({ length: RATING }, (_, index) => (
                    // The stars never change and never reorder, so the index is a stable key.
                    // biome-ignore lint/suspicious/noArrayIndexKey: see the comment above.
                    <StarIcon key={index} aria-hidden weight="fill" className={STAR_CLASS} />
                  ))}
                </div>
                <p className="text-base md:text-lg">{t(`testimonials.items.${id}`)}</p>
                <div className="mt-auto flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex size-12 items-center justify-center rounded-full bg-muted font-semibold"
                  >
                    {name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </span>
                  <div className="flex flex-col">
                    <h3 id={`testimonial-${id}`} className="font-semibold">
                      {name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{city}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
