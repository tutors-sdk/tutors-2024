import type { Lo, Course } from "$lib/services/models/lo-types";
import { rune } from "./services/utils/runes.svelte";

export const transitionKey = rune("");

export const layout = rune("expanded");
export const lightMode = rune("light");
export const currentTheme = rune("tutors");
export const currentCodeTheme = rune("ayu-dark");
export const currentWallType = rune("");

export const currentLo = rune<Lo | null>(null);
export const currentCourse = rune<Course | null>(null);
export const courseUrl = rune("");
export const currentLabStepIndex = rune(0);

export const cardHeight = rune("380px");
export const headingText = rune("!text-lg font-semibold");
export const cardWidths = rune("w-60 h-[21rem]");
export const iconHeight = rune("160");
export const imageHeight = rune("h-40");
export const textSize = rune("text-base");
export const avatarWidth = rune("w-12");

export const adobeLoaded = rune(false);

export const animationDelay = rune(200);
