import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "./ProductCard.jsx";
import photoRuta from "../../assets/photos/photo-02.jpg";
import photoMomento from "../../assets/photos/photo-06.jpg";
import styles from "./ProductShelf.module.css";

const IMAGE_BY_ID = {
  ruta: photoRuta,
  momento: photoMomento,
};

const ProductShelf = forwardRef(function ProductShelf(_props, ref) {
  const { t } = useTranslation();
  const products = t("products.items", { returnObjects: true });

  return (
    <section ref={ref} className={styles.band}>
      <div className={styles.inner}>
        <p className={styles.kicker}>{t("products.kicker")}</p>
        <p className={styles.subtitle}>{t("products.subtitle")}</p>

        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} image={IMAGE_BY_ID[product.id]} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProductShelf;
