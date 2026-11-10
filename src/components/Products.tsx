import { useTranslation } from "react-i18next";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { Button } from "@/components/ui/button";
import { PHOTOBOOK_EDITOR_URL } from "@/config";
import { RUTA_PHOTOS } from "@/content/photobooks";

// TODO: confirm the formats (sizes) of both product lines.
const PRODUCT_LINES = [
  { id: "ruta", name: "Wiski Ruta" },
  { id: "momento", name: "Wiski Momento" },
] as const;

const RUTA_CAROUSEL_PHOTOS = [RUTA_PHOTOS.open, RUTA_PHOTOS.front, RUTA_PHOTOS.back];

export function Products() {
  const { t } = useTranslation();

  return (
    <section
      id="products"
      aria-labelledby="products-title"
      className="scroll-mt-20 px-6 py-16 md:py-24"
    >
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10 md:gap-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2
            id="products-title"
            className="font-heading text-[32px] leading-[1.1] font-bold md:text-[40px]"
          >
            {t("products.title")}
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">{t("products.subtitle")}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {PRODUCT_LINES.map(({ id, name }) => (
            <article
              key={id}
              aria-labelledby={`product-${id}`}
              className="flex flex-col overflow-hidden rounded-lg border bg-card"
            >
              {id === "ruta" ? (
                <PhotoCarousel photos={RUTA_CAROUSEL_PHOTOS} />
              ) : (
                // TODO: replace this box with the photos of Wiski Momento.
                <div aria-hidden className="aspect-[548/376] bg-primary" />
              )}
              <div className="flex flex-col items-start gap-3 p-5 md:p-6">
                <span className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
                  {t(`products.${id}.badge`)}
                </span>
                <h3
                  id={`product-${id}`}
                  className="font-heading text-[26px] font-bold md:text-[28px]"
                >
                  {name}
                </h3>
                <p className="text-base text-muted-foreground md:text-lg">
                  {t(`products.${id}.description`)}
                </p>
                <p className="text-sm font-semibold">{t(`products.${id}.format`)}</p>
                <Button
                  asChild
                  size="lg"
                  className="mt-1 h-[54px] w-full px-8 text-lg font-semibold md:w-auto"
                >
                  <a href={PHOTOBOOK_EDITOR_URL}>{t("products.cta")}</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
