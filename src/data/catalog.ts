import type { Pack, Prompt } from "@/lib/game/types";
import { partsBin } from "./packs/parts-bin";
import { materialsLab } from "./packs/materials-lab";
import { thermoFluids } from "./packs/thermo-fluids";
import { shopFloor } from "./packs/shop-floor";
import { mechanisms } from "./packs/mechanisms";

export const PACKS: Pack[] = [
  { id: "parts-bin", title: "The Parts Bin", tagline: "gears, bearings, bolts & bits", stamp: "MACHINE ELEMENTS", chapters: partsBin },
  { id: "materials-lab", title: "Materials Lab", tagline: "steel, polymers & how they break", stamp: "MATERIALS", chapters: materialsLab },
  { id: "thermo-fluids", title: "Thermo & Fluids", tagline: "cycles, pumps & things that flow", stamp: "THERMOFLUIDS", chapters: thermoFluids },
  { id: "shop-floor", title: "The Shop Floor", tagline: "chips, welds & tight tolerances", stamp: "MANUFACTURING", chapters: shopFloor },
  { id: "mechanisms", title: "Mechanisms & Machines", tagline: "linkages, engines & legends", stamp: "DESIGN & DYNAMICS", chapters: mechanisms },
];

export const ALL_PROMPTS: Prompt[] = PACKS.flatMap((pk) => pk.chapters.flat());

const BY_ID = new Map(ALL_PROMPTS.map((pr) => [pr.id, pr]));

export function promptById(id: string): Prompt | undefined {
  return BY_ID.get(id);
}

export function packById(id: string): Pack | undefined {
  return PACKS.find((pk) => pk.id === id);
}
