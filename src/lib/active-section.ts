export type SectionPosition = {
  id: string;
  /** Distance from the top of the viewport to the top of the section, in pixels. */
  top: number;
};

/**
 * Return the id of the last section whose top has passed the offset line.
 * Return null when no section has passed it, for example in the hero.
 * The sections must be in page order.
 */
export function findActiveSection(sections: SectionPosition[], offset: number): string | null {
  let activeId: string | null = null;
  for (const section of sections) {
    if (section.top <= offset) activeId = section.id;
  }
  return activeId;
}
