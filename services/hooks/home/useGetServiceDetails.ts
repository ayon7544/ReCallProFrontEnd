export interface MediaItem {
  id: string;
  uri: string;
  type: "image" | "video";
}

export interface ServiceDetails {
  id: string;
  date: string;
  name: string;
  items: string[];
  media: MediaItem[];
  serviceType: string[];
  serviceNotes: string;
  personalNotes: string;
  duration: string;
  servicePrice: number;
  tip: number;
  total: number;
}

const serviceDetails: ServiceDetails[] = [
  // Isabella Rossi (id: 1)
  {
    id: "t1-1",
    date: "2026-02-09",
    name: "Balayage & Cut",
    items: ["Used formula 7B + 6N on roots", "Toner 9V", "Blow dry finish"],
    media: [
      {
        id: "t1-1-m1",
        uri: "https://media.istockphoto.com/id/1158647615/video/close-up-view-of-unrecognisable-female-customer-choosing-a-color-sample-at-a-paint-shop.mp4?s=mp4-640x640-is&k=20&c=OO3UW6frNcHdZvy3unpsfpgh1nzLR6GbrZ7JVw62OqI=",
        type: "video",
      },
      {
        id: "t1-1-m2",
        uri: "https://i.pravatar.cc/200?u=isabella-t1-1b",
        type: "image",
      },
    ],
    serviceType: ["Balayage", "Haircut"],
    serviceNotes:
      "Formula 7B + 6N on roots, Toner 9V applied, blow dry finish.",
    personalNotes:
      "Prefers warm tones. Sensitive scalp — used gentle developer.",
    duration: "2.30",
    servicePrice: 180,
    tip: 30,
    total: 210,
  },
  {
    id: "t1-2",
    date: "2026-01-25",
    name: "Balayage & Cut",
    items: ["Used formula 7B + 6N on roots", "Toner 9V", "Trim 2cm"],
    media: [
      {
        id: "t1-2-m1",
        uri: "https://i.pravatar.cc/200?u=isabella-t1-2a",
        type: "image",
      },
      {
        id: "t1-2-m2",
        uri: "https://i.pravatar.cc/200?u=isabella-t1-2b",
        type: "image",
      },
    ],
    serviceType: ["Balayage", "Haircut"],
    serviceNotes: "Formula 7B + 6N on roots, Toner 9V, trimmed 2cm off ends.",
    personalNotes: "Happy with last result — keep same formula.",
    duration: "2.30",
    servicePrice: 180,
    tip: 20,
    total: 200,
  },
  {
    id: "t1-3",
    date: "2025-12-10",
    name: "Gloss Treatment",
    items: ["Clear gloss applied", "20 min processing"],
    media: [
      {
        id: "t1-3-m1",
        uri: "https://i.pravatar.cc/200?u=isabella-t1-3a",
        type: "image",
      },
    ],
    serviceType: ["Gloss Treatment"],
    serviceNotes: "Clear gloss applied, 20 min processing time.",
    personalNotes: "Wanted shine boost before the holidays.",
    duration: "0.45",
    servicePrice: 60,
    tip: 10,
    total: 70,
  },

  // Sophia Chen (id: 2)
  {
    id: "t2-1",
    date: "2026-02-10",
    name: "Full Highlights",
    items: ["Bleach + 20vol", "Toner T18", "Gloss finish"],
    media: [
      {
        id: "t2-1-m1",
        uri: "https://i.pravatar.cc/200?u=sophia-t2-1a",
        type: "image",
      },
      {
        id: "t2-1-m2",
        uri: "https://i.pravatar.cc/200?u=sophia-t2-1b",
        type: "image",
      },
    ],
    serviceType: ["Full Highlights"],
    serviceNotes: "Bleach + 20vol, Toner T18, gloss finish applied.",
    personalNotes: "PPD-free formula used. Loves cool ash result.",
    duration: "2.00",
    servicePrice: 200,
    tip: 40,
    total: 240,
  },
  {
    id: "t2-2",
    date: "2026-01-15",
    name: "Full Highlights",
    items: ["Bleach + 20vol", "Toner T18"],
    media: [
      {
        id: "t2-2-m1",
        uri: "https://i.pravatar.cc/200?u=sophia-t2-2a",
        type: "image",
      },
    ],
    serviceType: ["Full Highlights"],
    serviceNotes: "Bleach + 20vol, Toner T18. No gloss this time.",
    personalNotes: "Morning appointment preferred.",
    duration: "2.00",
    servicePrice: 180,
    tip: 30,
    total: 210,
  },
  {
    id: "t2-3",
    date: "2025-11-20",
    name: "Toner Refresh",
    items: ["Toner T18 reapplied", "10 min processing"],
    media: [],
    serviceType: ["Toner Refresh"],
    serviceNotes: "Toner T18 reapplied, 10 min processing.",
    personalNotes: "Quick toner refresh between full appointments.",
    duration: "0.30",
    servicePrice: 50,
    tip: 10,
    total: 60,
  },

  // Marcello V. (id: 3)
  {
    id: "t3-1",
    date: "2026-02-05",
    name: "Men's Fade",
    items: ["Guard 1 to skin fade", "Scissor finish on top", "Beard line-up"],
    media: [
      {
        id: "t3-1-m1",
        uri: "https://i.pravatar.cc/200?u=marcello-t3-1a",
        type: "image",
      },
      {
        id: "t3-1-m2",
        uri: "https://i.pravatar.cc/200?u=marcello-t3-1b",
        type: "image",
      },
    ],
    serviceType: ["Haircut", "Beard Trim"],
    serviceNotes:
      "Guard 1 to skin fade on sides, scissor finish on top, beard line-up.",
    personalNotes: "No product applied as per preference.",
    duration: "1.00",
    servicePrice: 55,
    tip: 10,
    total: 65,
  },
  {
    id: "t3-2",
    date: "2026-01-10",
    name: "Men's Fade",
    items: ["Guard 1 to skin fade", "Beard trim"],
    media: [
      {
        id: "t3-2-m1",
        uri: "https://i.pravatar.cc/200?u=marcello-t3-2a",
        type: "image",
      },
    ],
    serviceType: ["Haircut", "Beard Trim"],
    serviceNotes: "Guard 1 to skin fade, beard trim.",
    personalNotes: "Comes every 3 weeks. No styling product.",
    duration: "0.45",
    servicePrice: 45,
    tip: 10,
    total: 55,
  },

  // Isabella Rossi (id: 4)
  {
    id: "t4-1",
    date: "2026-02-09",
    name: "Balayage & Cut",
    items: ["Used formula 7B + 6N on roots", "Toner 9V"],
    media: [
      {
        id: "t4-1-m1",
        uri: "https://i.pravatar.cc/200?u=isabella4-t1a",
        type: "image",
      },
      {
        id: "t4-1-m2",
        uri: "https://i.pravatar.cc/200?u=isabella4-t1b",
        type: "image",
      },
    ],
    serviceType: ["Balayage", "Haircut"],
    serviceNotes: "Formula 7B + 6N on roots, Toner 9V.",
    personalNotes: "Sensitive scalp — gentle developer used.",
    duration: "2.30",
    servicePrice: 180,
    tip: 30,
    total: 210,
  },
  {
    id: "t4-2",
    date: "2026-01-25",
    name: "Balayage & Cut",
    items: ["Used formula 7B + 6N on roots", "Toner 9V"],
    media: [
      {
        id: "t4-2-m1",
        uri: "https://i.pravatar.cc/200?u=isabella4-t2a",
        type: "image",
      },
    ],
    serviceType: ["Balayage", "Haircut"],
    serviceNotes: "Formula 7B + 6N on roots, Toner 9V.",
    personalNotes: "Warm tones preferred. Book 2.5hr slot.",
    duration: "2.30",
    servicePrice: 180,
    tip: 20,
    total: 200,
  },

  // Sophia Chen (id: 5)
  {
    id: "t5-1",
    date: "2026-02-10",
    name: "Full Highlights",
    items: ["Bleach + 20vol", "Toner T18"],
    media: [
      {
        id: "t5-1-m1",
        uri: "https://i.pravatar.cc/200?u=sophia5-t1a",
        type: "image",
      },
    ],
    serviceType: ["Full Highlights"],
    serviceNotes: "Bleach + 20vol, Toner T18.",
    personalNotes: "PPD-free formula only.",
    duration: "2.00",
    servicePrice: 180,
    tip: 30,
    total: 210,
  },
  {
    id: "t5-2",
    date: "2026-01-15",
    name: "Full Highlights",
    items: ["Bleach + 20vol", "Gloss finish"],
    media: [
      {
        id: "t5-2-m1",
        uri: "https://i.pravatar.cc/200?u=sophia5-t2a",
        type: "image",
      },
    ],
    serviceType: ["Full Highlights"],
    serviceNotes: "Bleach + 20vol, gloss finish applied.",
    personalNotes: "Cool ash tones. Morning slot preferred.",
    duration: "2.00",
    servicePrice: 180,
    tip: 25,
    total: 205,
  },

  // Marcello V. (id: 6)
  {
    id: "t6-1",
    date: "2026-02-05",
    name: "Men's Fade",
    items: ["Skin fade", "Scissor finish on top"],
    media: [
      {
        id: "t6-1-m1",
        uri: "https://i.pravatar.cc/200?u=marcello6-t1a",
        type: "image",
      },
    ],
    serviceType: ["Haircut"],
    serviceNotes: "Skin fade on sides, scissor finish on top.",
    personalNotes: "No product. Tight fade.",
    duration: "0.45",
    servicePrice: 45,
    tip: 5,
    total: 50,
  },

  // Isabella Rossi (id: 7)
  {
    id: "t7-1",
    date: "2026-02-09",
    name: "Balayage & Cut",
    items: ["Formula 7B + 6N", "Toner 9V", "Blow dry"],
    media: [
      {
        id: "t7-1-m1",
        uri: "https://i.pravatar.cc/200?u=isabella7-t1a",
        type: "image",
      },
      {
        id: "t7-1-m2",
        uri: "https://i.pravatar.cc/200?u=isabella7-t1b",
        type: "image",
      },
    ],
    serviceType: ["Balayage", "Haircut"],
    serviceNotes: "Formula 7B + 6N, Toner 9V, blow dry finish.",
    personalNotes: "Warm tones. Sensitive scalp.",
    duration: "2.30",
    servicePrice: 180,
    tip: 30,
    total: 210,
  },

  // Sophia Chen (id: 8)
  {
    id: "t8-1",
    date: "2026-02-10",
    name: "Full Highlights",
    items: ["Bleach + 20vol", "Toner T18"],
    media: [
      {
        id: "t8-1-m1",
        uri: "https://i.pravatar.cc/200?u=sophia8-t1a",
        type: "image",
      },
    ],
    serviceType: ["Full Highlights"],
    serviceNotes: "Bleach + 20vol, Toner T18.",
    personalNotes: "Cool ash. No PPD ever.",
    duration: "2.00",
    servicePrice: 180,
    tip: 20,
    total: 200,
  },

  // Marcello V. (id: 9)
  {
    id: "t9-1",
    date: "2026-02-05",
    name: "Men's Fade",
    items: ["Guard 1 fade", "Beard trim"],
    media: [
      {
        id: "t9-1-m1",
        uri: "https://i.pravatar.cc/200?u=marcello9-t1a",
        type: "image",
      },
    ],
    serviceType: ["Haircut", "Beard Trim"],
    serviceNotes: "Guard 1 fade on sides, beard trim.",
    personalNotes: "Beard line-up optional this visit.",
    duration: "1.00",
    servicePrice: 55,
    tip: 10,
    total: 65,
  },

  // Isabella Rossi (id: 10)
  {
    id: "t10-1",
    date: "2026-02-09",
    name: "Balayage & Cut",
    items: ["Formula 7B + 6N", "Toner 9V"],
    media: [
      {
        id: "t10-1-m1",
        uri: "https://i.pravatar.cc/200?u=isabella10-t1a",
        type: "image",
      },
      {
        id: "t10-1-m2",
        uri: "https://i.pravatar.cc/200?u=isabella10-t1b",
        type: "image",
      },
    ],
    serviceType: ["Balayage", "Haircut"],
    serviceNotes: "Formula 7B + 6N, Toner 9V.",
    personalNotes: "Very sensitive scalp. Warm tones only.",
    duration: "2.30",
    servicePrice: 180,
    tip: 30,
    total: 210,
  },

  // Sophia Chen (id: 11)
  {
    id: "t11-1",
    date: "2026-02-10",
    name: "Full Highlights",
    items: ["Bleach + 20vol", "Toner T18", "Conditioning mask"],
    media: [
      {
        id: "t11-1-m1",
        uri: "https://i.pravatar.cc/200?u=sophia11-t1a",
        type: "image",
      },
    ],
    serviceType: ["Full Highlights"],
    serviceNotes: "Bleach + 20vol, Toner T18, conditioning mask applied.",
    personalNotes: "Olaplex treatment preferred. PPD-free formula.",
    duration: "2.30",
    servicePrice: 220,
    tip: 40,
    total: 260,
  },

  // Marcello V. (id: 12)
  {
    id: "t12-1",
    date: "2026-02-05",
    name: "Men's Fade",
    items: ["Skin fade", "Scissor finish", "Beard shape"],
    media: [
      {
        id: "t12-1-m1",
        uri: "https://i.pravatar.cc/200?u=marcello12-t1a",
        type: "image",
      },
      {
        id: "t12-1-m2",
        uri: "https://i.pravatar.cc/200?u=marcello12-t1b",
        type: "image",
      },
    ],
    serviceType: ["Haircut", "Beard Trim"],
    serviceNotes: "Skin fade on sides, scissor finish on top, beard shape.",
    personalNotes: "No product. Skin fade sides, scissor top.",
    duration: "1.00",
    servicePrice: 60,
    tip: 10,
    total: 70,
  },
];

export const useGetServiceDetails = (
  id?: string,
): ServiceDetails | ServiceDetails[] => {
  if (id) {
    const service = serviceDetails.find((s) => s.id === id);
    if (!service) throw new Error(`Service with id "${id}" not found.`);
    return service;
  }
  return serviceDetails;
};
