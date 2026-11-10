import { ListIcon, ShoppingCartSimpleIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { PHOTOBOOK_EDITOR_URL } from "@/config";
import { findActiveSection } from "@/lib/active-section";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { key: "products", href: "#products" },
  { key: "howItWorks", href: "#how-it-works" },
  { key: "testimonials", href: "#testimonials" },
  { key: "faq", href: "#faq" },
] as const;

// A section is active when its top is above this line, measured from the viewport top.
const ACTIVE_SECTION_OFFSET = 120;

function readActiveSection() {
  const sections = NAV_LINKS.flatMap(({ href }) => {
    const element = document.querySelector(href);
    return element ? [{ id: href.slice(1), top: element.getBoundingClientRect().top }] : [];
  });
  return findActiveSection(sections, ACTIVE_SECTION_OFFSET);
}

export function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const MenuIcon = menuOpen ? XIcon : ListIcon;

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 0);
      setActiveSection(readActiveSection());
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="group/header fixed inset-x-0 top-0 z-50 grid h-16 grid-cols-[1fr_auto_1fr] items-center border-b border-transparent px-6 transition-colors data-[scrolled=true]:border-border data-[scrolled=true]:bg-background md:h-20 md:px-12"
    >
      <button
        type="button"
        aria-label={menuOpen ? t("header.closeMenu") : t("header.openMenu")}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        onClick={() => setMenuOpen(!menuOpen)}
        className="col-start-1 justify-self-start md:hidden"
      >
        <MenuIcon aria-hidden className="size-7" />
      </button>
      <nav
        id="main-nav"
        className={cn(
          "md:col-start-2 md:flex md:flex-row md:gap-2",
          menuOpen
            ? "fixed inset-x-0 top-16 flex flex-col items-start gap-2 bg-background p-6 text-2xl"
            : "hidden",
        )}
      >
        {NAV_LINKS.map(({ key, href }) => (
          <a
            key={key}
            href={href}
            aria-current={activeSection === href.slice(1) ? "true" : undefined}
            onClick={() => setMenuOpen(false)}
            className="rounded-full px-4 py-2 font-medium text-foreground transition-all group-data-[scrolled=true]/header:text-primary duration-200 hover:bg-secondary/60 motion-safe:hover:-translate-y-0.5 aria-[current=true]:bg-secondary md:text-base"
          >
            {t(`nav.${key}`)}
          </a>
        ))}
      </nav>
      <div className="col-start-3 flex items-center justify-end gap-6">
        <a href={PHOTOBOOK_EDITOR_URL} aria-label={t("header.cart")}>
          <ShoppingCartSimpleIcon aria-hidden className="size-6" />
        </a>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
