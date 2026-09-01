Product shelf card: image, name, price, one supporting line.

```jsx
<ProductInfoCard title="Wiski Ruta" price="$39" body="Tapa dura 21×30 cm" image="../assets/photo-03.jpg" />
```

- 240px min width, 8px radius, 1px #d9d9d9 border, 16px padding and 16px gap; media slot is 247px tall.
- `showDescription={false}` drops the supporting line.
- The homepage stretches this card to 512/525px wide and pairs it with a "Más vendido" badge and a ghost CTA.
