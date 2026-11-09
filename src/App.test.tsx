import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "@/App";

describe("hero", () => {
  it("shows the headline, the logo and a call to action that opens the photobook editor", () => {
    render(<App />);

    const hero = within(
      screen.getByRole("region", { name: "Tus fotos merecen algo más que una galería llena" }),
    );

    expect(
      hero.getByRole("heading", {
        level: 1,
        name: "Tus fotos merecen algo más que una galería llena",
      }),
    ).toBeInTheDocument();
    expect(hero.getByRole("img", { name: "Wiski Photobook" })).toBeInTheDocument();
    expect(hero.getByRole("link", { name: "Imprime tu álbum" })).toHaveAttribute(
      "href",
      "https://annchoa.github.io/wiski-album",
    );
  });
});

describe("navigation", () => {
  it.each([
    ["Productos", "#products"],
    ["Cómo funciona", "#how-it-works"],
    ["Testimonios", "#testimonials"],
    ["FAQ", "#faq"],
  ])("links %s to the section %s", (name, href) => {
    render(<App />);

    const nav = screen.getByRole("navigation");

    expect(within(nav).getByRole("link", { name })).toHaveAttribute("href", href);
  });

  it.each(["products", "how-it-works", "testimonials", "faq"])(
    "has a section with the id %s for its link",
    (id) => {
      render(<App />);

      expect(document.getElementById(id)).toBeInTheDocument();
    },
  );
});

describe("language switcher", () => {
  it("shows the current language and switches the page text to English", async () => {
    const user = userEvent.setup();
    render(<App />);

    const select = screen.getByRole("combobox", { name: "Idioma" });
    expect(select).toHaveValue("es");

    await user.selectOptions(select, "en");

    const hero = within(
      screen.getByRole("region", { name: "Your photos deserve more than a full gallery" }),
    );
    expect(
      hero.getByRole("heading", {
        level: 1,
        name: "Your photos deserve more than a full gallery",
      }),
    ).toBeInTheDocument();
    expect(hero.getByRole("link", { name: "Print your photobook" })).toBeInTheDocument();
  });

  it("remembers the chosen language in localStorage", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.selectOptions(screen.getByRole("combobox", { name: "Idioma" }), "en");

    expect(window.localStorage.getItem("wiski-language")).toBe("en");
  });
});

describe("mobile menu", () => {
  it("opens and closes with a button whose name says what it does", async () => {
    const user = userEvent.setup();
    render(<App />);

    const open = screen.getByRole("button", { name: "Abrir menú" });
    expect(open).toHaveAttribute("aria-expanded", "false");

    await user.click(open);

    const close = screen.getByRole("button", { name: "Cerrar menú" });
    expect(close).toHaveAttribute("aria-expanded", "true");

    await user.click(close);

    expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("closes when a link of the menu is activated", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Abrir menú" }));
    await user.click(within(screen.getByRole("navigation")).getByRole("link", { name: "FAQ" }));

    expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});

describe("header background", () => {
  function scrollTo(y: number) {
    Object.defineProperty(window, "scrollY", { value: y, configurable: true, writable: true });
    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });
  }

  afterEach(() => scrollTo(0));

  it("is transparent at the top of the page and solid after scrolling", () => {
    render(<App />);
    const header = screen.getByRole("banner");

    expect(header).toHaveAttribute("data-scrolled", "false");

    scrollTo(100);

    expect(header).toHaveAttribute("data-scrolled", "true");
  });
});

describe("cart", () => {
  it("links to the photobook editor", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: "Carrito" })).toHaveAttribute(
      "href",
      "https://annchoa.github.io/wiski-album",
    );
  });
});

describe("showcase", () => {
  function showcase() {
    return screen.getByRole("region", { name: "Tus fotos, ya en papel" });
  }

  it("shows 12 photobook photos, and hides the copy that closes the loop", () => {
    render(<App />);

    const photos = within(showcase()).getAllByRole("img");

    expect(photos).toHaveLength(12);
    expect(
      within(showcase()).getByRole("img", { name: "Portada del álbum de Nueva York" }),
    ).toBeInTheDocument();
  });

  it("pauses and resumes the movement with a button", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(showcase()).toHaveAttribute("data-paused", "false");

    await user.click(within(showcase()).getByRole("button", { name: "Pausar" }));
    expect(showcase()).toHaveAttribute("data-paused", "true");

    await user.click(within(showcase()).getByRole("button", { name: "Reanudar" }));
    expect(showcase()).toHaveAttribute("data-paused", "false");
  });
});

describe("products", () => {
  function product(name: string) {
    return within(screen.getByRole("article", { name }));
  }

  it("presents Wiski Ruta with the photos of its Miami photobook", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 2, name: "Elige tu álbum" })).toBeInTheDocument();
    const ruta = product("Wiski Ruta");
    expect(ruta.getByText("Más vendido")).toBeInTheDocument();
    expect(
      ruta.getByText("De la maleta al librero: tus viajes impresos en un álbum de tapa dura."),
    ).toBeInTheDocument();
    expect(ruta.getByText("Tapa dura · 21x30 cm")).toBeInTheDocument();
    expect(ruta.getByRole("link", { name: "Empecemos" })).toHaveAttribute(
      "href",
      "https://annchoa.github.io/wiski-album",
    );
    expect(ruta.getAllByRole("img").map((photo) => photo.getAttribute("alt"))).toEqual([
      "Páginas abiertas del álbum de Miami",
      "Portada del álbum de Miami",
      "Contraportada del álbum de Miami",
    ]);
  });

  it("presents Wiski Momento", () => {
    render(<App />);

    const momento = product("Wiski Momento");
    expect(momento.getByText("Para regalar")).toBeInTheDocument();
    expect(
      momento.getByText("Una fecha que importa, en un regalo que no se queda en el celular."),
    ).toBeInTheDocument();
    expect(momento.getByText("Formato cuadrado · 20x20 cm")).toBeInTheDocument();
    expect(momento.getByRole("link", { name: "Empecemos" })).toHaveAttribute(
      "href",
      "https://annchoa.github.io/wiski-album",
    );
  });
});

describe("how it works", () => {
  it("lists the five steps in order", () => {
    render(<App />);

    const section = screen.getByRole("region", { name: "Cómo funciona" });
    const steps = within(within(section).getByRole("list")).getAllByRole("listitem");

    expect(
      steps.map((step) => within(step).getByRole("heading", { level: 3 }).textContent),
    ).toEqual(["Elige tu álbum", "Sube tus fotos", "Personaliza", "Paga", "Espéralo en casa"]);
  });
});

describe("testimonials", () => {
  it.each([
    [
      "Camila R.",
      "Quito",
      "Armé el álbum de nuestro viaje a Perú y ahora vive en la sala.",
      "Páginas abiertas del álbum de Perú",
    ],
    [
      "Andrés M.",
      "Cuenca",
      "Roma entera en un solo libro. Lo hojeo cada vez que quiero volver.",
      "Páginas abiertas del álbum de Roma, vista 1",
    ],
    [
      "Daniela V.",
      "Guayaquil",
      "Armarlo en el editor me tomó menos de diez minutos. Las fotos de Orlando quedaron mejor de lo que esperaba.",
      "Páginas abiertas del álbum de Orlando",
    ],
  ])("shows the testimonial of %s with its photo and rating", (name, city, quote, photo) => {
    render(<App />);

    const section = screen.getByRole("region", { name: "Lo que dicen quienes ya imprimieron" });
    const testimonial = within(within(section).getByRole("article", { name }));

    expect(testimonial.getByText(city)).toBeInTheDocument();
    expect(testimonial.getByText(quote)).toBeInTheDocument();
    expect(testimonial.getByRole("img", { name: "5 de 5 estrellas" })).toBeInTheDocument();
    expect(testimonial.getByRole("img", { name: photo })).toBeInTheDocument();
  });
});

describe("faq", () => {
  const answer =
    "Elige tu álbum, sube tus fotos y personalízalo en el editor. Confirma el pago y nosotros lo imprimimos y te lo llevamos hasta tu puerta.";

  it("opens the first question by default and lets the visitor close it", async () => {
    const user = userEvent.setup();
    render(<App />);

    const question = screen.getByRole("button", { name: "¿Cómo hago mi pedido?" });
    expect(question).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(answer)).toBeInTheDocument();

    await user.click(question);

    expect(question).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText(answer)).not.toBeInTheDocument();
  });
});

describe("final call to action", () => {
  it("closes the page with a headline and a link to the photobook editor", () => {
    render(<App />);

    const section = screen.getByRole("region", { name: "Tus fotos ya están listas. Imprímelas." });

    expect(within(section).getByRole("link", { name: "Imprime tu álbum" })).toHaveAttribute(
      "href",
      "https://annchoa.github.io/wiski-album",
    );
  });
});

describe("footer", () => {
  it("shows the logo, the legal links, the contact email and the copyright", () => {
    render(<App />);

    const footer = within(screen.getByRole("contentinfo"));

    expect(footer.getByRole("img", { name: "Wiski Photobook" })).toBeInTheDocument();
    expect(footer.getByText("Álbumes impresos para todo el Ecuador")).toBeInTheDocument();
    expect(footer.getByRole("link", { name: "Términos y condiciones" })).toHaveAttribute(
      "href",
      "#",
    );
    expect(footer.getByRole("link", { name: "Política de privacidad" })).toHaveAttribute(
      "href",
      "#",
    );
    expect(footer.getByRole("link", { name: "hola@wiski.ec" })).toHaveAttribute(
      "href",
      "mailto:hola@wiski.ec",
    );
    expect(footer.getByText("© 2026 Wiski Photobook")).toBeInTheDocument();
  });
});
