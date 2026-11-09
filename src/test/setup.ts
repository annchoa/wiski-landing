import "@testing-library/jest-dom/vitest";
import i18n from "@/i18n";

beforeEach(async () => {
  // Tests that run in the node environment (scripts/) have no window.
  if (typeof window === "undefined") return;

  window.localStorage.clear();
  await i18n.changeLanguage("es");
});
