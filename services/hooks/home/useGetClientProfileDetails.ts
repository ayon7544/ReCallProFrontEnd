export interface TimelineItem {
  id: string;
  date: string;
  name: string;
  items: string[];
  media: string[];
}

export interface PhotoMedia {
  id: string;
  uri: string;
  type: "image" | "video";
}

export interface Notes {
  phoneNumber: string;
  email: string;
  totalSpent: number;
  preferences: string;
}

export interface ClientProfileDetails {
  id: string;
  name: string;
  image: string;
  clientSince: number;
  visits: number;
  preferences: string;
  timeline: TimelineItem[];
  media: PhotoMedia[];
  notes: Notes;
}

const clientProfiles: ClientProfileDetails[] = [
  {
    id: "1",
    name: "Isabella Rossi",
    image: "https://i.pravatar.cc/150?u=isabella",
    clientSince: 2022,
    visits: 12,
    preferences: "Prefers warm tones. Sensitive scalp.",
    timeline: [
      {
        id: "t1-1",
        date: "2026-02-09",
        name: "Balayage & Cut",
        items: ["Used formula 7B + 6N on roots", "Toner 9V", "Blow dry finish"],
        media: [
          "https://i.pravatar.cc/200?u=isabella-t1-1a",
          "https://i.pravatar.cc/200?u=isabella-t1-1b",
        ],
      },
      {
        id: "t1-2",
        date: "2026-01-25",
        name: "Balayage & Cut",
        items: ["Used formula 7B + 6N on roots", "Toner 9V", "Trim 2cm"],
        media: [
          "https://i.pravatar.cc/200?u=isabella-t1-2a",
          "https://i.pravatar.cc/200?u=isabella-t1-2b",
        ],
      },
      {
        id: "t1-3",
        date: "2025-12-10",
        name: "Gloss Treatment",
        items: ["Clear gloss applied", "20 min processing"],
        media: ["https://i.pravatar.cc/200?u=isabella-t1-3a"],
      },
    ],
    media: [
      {
        id: "p1-1",
        uri: "https://i.pravatar.cc/300?u=isabella-photo-1",
        type: "image",
      },
      {
        id: "p1-2",
        uri: "https://i.pravatar.cc/300?u=isabella-photo-2",
        type: "image",
      },
      {
        id: "p1-3",
        uri: "https://i.pravatar.cc/300?u=isabella-photo-3",
        type: "video",
      },
      {
        id: "p1-4",
        uri: "https://i.pravatar.cc/300?u=isabella-photo-4",
        type: "image",
      },
    ],
    notes: {
      phoneNumber: "+39 333 123 4567",
      email: "isabella.rossi@email.com",
      totalSpent: 1240,
      preferences:
        "Prefers warm tones. Sensitive scalp. Always book 2.5hr slot.",
    },
  },
  {
    id: "2",
    name: "Sophia Chen",
    image: "https://i.pravatar.cc/150?u=sophia",
    clientSince: 2021,
    visits: 8,
    preferences: "Loves cool ash tones. Allergic to PPD.",
    timeline: [
      {
        id: "t2-1",
        date: "2026-02-10",
        name: "Full Highlights",
        items: ["Bleach + 20vol", "Toner T18", "Gloss finish"],
        media: [
          "https://i.pravatar.cc/200?u=sophia-t2-1a",
          "https://i.pravatar.cc/200?u=sophia-t2-1b",
        ],
      },
      {
        id: "t2-2",
        date: "2026-01-15",
        name: "Full Highlights",
        items: ["Bleach + 20vol", "Toner T18"],
        media: ["https://i.pravatar.cc/200?u=sophia-t2-2a"],
      },
      {
        id: "t2-3",
        date: "2025-11-20",
        name: "Toner Refresh",
        items: ["Toner T18 reapplied", "10 min processing"],
        media: [],
      },
    ],
    media: [
      {
        id: "p2-1",
        uri: "https://i.pravatar.cc/300?u=sophia-photo-1",
        type: "image",
      },
      {
        id: "p2-2",
        uri: "https://media.istockphoto.com/id/1158647615/video/close-up-view-of-unrecognisable-female-customer-choosing-a-color-sample-at-a-paint-shop.mp4?s=mp4-640x640-is&k=20&c=OO3UW6frNcHdZvy3unpsfpgh1nzLR6GbrZ7JVw62OqI=",
        type: "video",
      },
      {
        id: "p2-3",
        uri: "https://i.pravatar.cc/300?u=sophia-photo-3",
        type: "image",
      },
    ],
    notes: {
      phoneNumber: "+1 415 234 5678",
      email: "sophia.chen@email.com",
      totalSpent: 890,
      preferences:
        "Cool ash only. PPD allergy — use PPD-free colour. Prefers morning slots.",
    },
  },
  {
    id: "3",
    name: "Marcello V.",
    image: "https://i.pravatar.cc/150?u=marcello",
    clientSince: 2023,
    visits: 5,
    preferences: "Prefers tight fade on sides. No product.",
    timeline: [
      {
        id: "t3-1",
        date: "2026-02-05",
        name: "Men's Fade",
        items: [
          "Guard 1 to skin fade",
          "Scissor finish on top",
          "Beard line-up",
        ],
        media: [
          "https://i.pravatar.cc/200?u=marcello-t3-1a",
          "https://i.pravatar.cc/200?u=marcello-t3-1b",
        ],
      },
      {
        id: "t3-2",
        date: "2026-01-10",
        name: "Men's Fade",
        items: ["Guard 1 to skin fade", "Beard trim"],
        media: ["https://i.pravatar.cc/200?u=marcello-t3-2a"],
      },
    ],
    media: [
      {
        id: "p3-1",
        uri: "https://i.pravatar.cc/300?u=marcello-photo-1",
        type: "image",
      },
      {
        id: "p3-2",
        uri: "https://i.pravatar.cc/300?u=marcello-photo-2",
        type: "image",
      },
    ],
    notes: {
      phoneNumber: "+39 347 987 6543",
      email: "marcello.v@email.com",
      totalSpent: 275,
      preferences:
        "No product. Tight fade, keep length on top. Comes every 3 weeks.",
    },
  },
  {
    id: "4",
    name: "Isabella Rossi",
    image: "https://i.pravatar.cc/150?u=isabella",
    clientSince: 2022,
    visits: 12,
    preferences: "Prefers warm tones. Sensitive scalp.",
    timeline: [
      {
        id: "t4-1",
        date: "2026-02-09",
        name: "Balayage & Cut",
        items: ["Used formula 7B + 6N on roots", "Toner 9V"],
        media: [
          "https://i.pravatar.cc/200?u=isabella4-t1a",
          "https://i.pravatar.cc/200?u=isabella4-t1b",
        ],
      },
      {
        id: "t4-2",
        date: "2026-01-25",
        name: "Balayage & Cut",
        items: ["Used formula 7B + 6N on roots", "Toner 9V"],
        media: ["https://i.pravatar.cc/200?u=isabella4-t2a"],
      },
    ],
    media: [
      {
        id: "p4-1",
        uri: "https://i.pravatar.cc/300?u=isabella4-photo-1",
        type: "image",
      },
      {
        id: "p4-2",
        uri: "https://i.pravatar.cc/300?u=isabella4-photo-2",
        type: "video",
      },
    ],
    notes: {
      phoneNumber: "+39 333 111 2222",
      email: "isabella.r2@email.com",
      totalSpent: 1240,
      preferences:
        "Warm tones preferred. Sensitive scalp — use gentle developer.",
    },
  },
  {
    id: "5",
    name: "Sophia Chen",
    image: "https://i.pravatar.cc/150?u=sophia",
    clientSince: 2021,
    visits: 8,
    preferences: "Loves cool ash tones. Allergic to PPD.",
    timeline: [
      {
        id: "t5-1",
        date: "2026-02-10",
        name: "Full Highlights",
        items: ["Bleach + 20vol", "Toner T18"],
        media: ["https://i.pravatar.cc/200?u=sophia5-t1a"],
      },
      {
        id: "t5-2",
        date: "2026-01-15",
        name: "Full Highlights",
        items: ["Bleach + 20vol", "Gloss finish"],
        media: ["https://i.pravatar.cc/200?u=sophia5-t2a"],
      },
    ],
    media: [
      {
        id: "p5-1",
        uri: "https://i.pravatar.cc/300?u=sophia5-photo-1",
        type: "image",
      },
      {
        id: "p5-2",
        uri: "https://i.pravatar.cc/300?u=sophia5-photo-2",
        type: "image",
      },
    ],
    notes: {
      phoneNumber: "+1 415 555 9988",
      email: "sophiac5@email.com",
      totalSpent: 890,
      preferences: "Cool ash tones only. PPD-free formula required.",
    },
  },
  {
    id: "6",
    name: "Marcello V.",
    image: "https://i.pravatar.cc/150?u=marcello",
    clientSince: 2023,
    visits: 5,
    preferences: "Prefers tight fade on sides. No product.",
    timeline: [
      {
        id: "t6-1",
        date: "2026-02-05",
        name: "Men's Fade",
        items: ["Skin fade", "Scissor finish on top"],
        media: ["https://i.pravatar.cc/200?u=marcello6-t1a"],
      },
    ],
    media: [
      {
        id: "p6-1",
        uri: "https://i.pravatar.cc/300?u=marcello6-photo-1",
        type: "image",
      },
    ],
    notes: {
      phoneNumber: "+39 347 111 3333",
      email: "marcello6@email.com",
      totalSpent: 275,
      preferences: "No styling product. Tight fade preferred.",
    },
  },
  {
    id: "7",
    name: "Isabella Rossi",
    image: "https://i.pravatar.cc/150?u=isabella",
    clientSince: 2022,
    visits: 12,
    preferences: "Prefers warm tones. Sensitive scalp.",
    timeline: [
      {
        id: "t7-1",
        date: "2026-02-09",
        name: "Balayage & Cut",
        items: ["Formula 7B + 6N", "Toner 9V", "Blow dry"],
        media: [
          "https://i.pravatar.cc/200?u=isabella7-t1a",
          "https://i.pravatar.cc/200?u=isabella7-t1b",
        ],
      },
    ],
    media: [
      {
        id: "p7-1",
        uri: "https://i.pravatar.cc/300?u=isabella7-photo-1",
        type: "image",
      },
      {
        id: "p7-2",
        uri: "https://i.pravatar.cc/300?u=isabella7-photo-2",
        type: "video",
      },
    ],
    notes: {
      phoneNumber: "+39 333 777 8888",
      email: "isa.rossi7@email.com",
      totalSpent: 1240,
      preferences: "Warm tones. Sensitive scalp.",
    },
  },
  {
    id: "8",
    name: "Sophia Chen",
    image: "https://i.pravatar.cc/150?u=sophia",
    clientSince: 2021,
    visits: 8,
    preferences: "Loves cool ash tones. Allergic to PPD.",
    timeline: [
      {
        id: "t8-1",
        date: "2026-02-10",
        name: "Full Highlights",
        items: ["Bleach + 20vol", "Toner T18"],
        media: ["https://i.pravatar.cc/200?u=sophia8-t1a"],
      },
    ],
    media: [
      {
        id: "p8-1",
        uri: "https://i.pravatar.cc/300?u=sophia8-photo-1",
        type: "image",
      },
    ],
    notes: {
      phoneNumber: "+1 415 888 1122",
      email: "sophia8@email.com",
      totalSpent: 890,
      preferences: "Cool ash. No PPD ever.",
    },
  },
  {
    id: "9",
    name: "Marcello V.",
    image: "https://i.pravatar.cc/150?u=marcello",
    clientSince: 2023,
    visits: 5,
    preferences: "Prefers tight fade on sides. No product.",
    timeline: [
      {
        id: "t9-1",
        date: "2026-02-05",
        name: "Men's Fade",
        items: ["Guard 1 fade", "Beard trim"],
        media: ["https://i.pravatar.cc/200?u=marcello9-t1a"],
      },
    ],
    media: [
      {
        id: "p9-1",
        uri: "https://i.pravatar.cc/300?u=marcello9-photo-1",
        type: "image",
      },
    ],
    notes: {
      phoneNumber: "+39 347 999 4444",
      email: "marcello9@email.com",
      totalSpent: 275,
      preferences: "Tight fade, no product, beard line-up optional.",
    },
  },
  {
    id: "10",
    name: "Isabella Rossi",
    image: "https://i.pravatar.cc/150?u=isabella",
    clientSince: 2022,
    visits: 12,
    preferences: "Prefers warm tones. Sensitive scalp.",
    timeline: [
      {
        id: "t10-1",
        date: "2026-02-09",
        name: "Balayage & Cut",
        items: ["Formula 7B + 6N", "Toner 9V"],
        media: [
          "https://i.pravatar.cc/200?u=isabella10-t1a",
          "https://i.pravatar.cc/200?u=isabella10-t1b",
        ],
      },
    ],
    media: [
      {
        id: "p10-1",
        uri: "https://i.pravatar.cc/300?u=isabella10-photo-1",
        type: "image",
      },
      {
        id: "p10-2",
        uri: "https://i.pravatar.cc/300?u=isabella10-photo-2",
        type: "image",
      },
    ],
    notes: {
      phoneNumber: "+39 333 100 2000",
      email: "isabella10@email.com",
      totalSpent: 1240,
      preferences: "Warm tones only. Very sensitive scalp.",
    },
  },
  {
    id: "11",
    name: "Sophia Chen",
    image: "https://i.pravatar.cc/150?u=sophia",
    clientSince: 2021,
    visits: 8,
    preferences: "Loves cool ash tones. Allergic to PPD.",
    timeline: [
      {
        id: "t11-1",
        date: "2026-02-10",
        name: "Full Highlights",
        items: ["Bleach + 20vol", "Toner T18", "Conditioning mask"],
        media: ["https://i.pravatar.cc/200?u=sophia11-t1a"],
      },
    ],
    media: [
      {
        id: "p11-1",
        uri: "https://i.pravatar.cc/300?u=sophia11-photo-1",
        type: "video",
      },
      {
        id: "p11-2",
        uri: "https://i.pravatar.cc/300?u=sophia11-photo-2",
        type: "image",
      },
    ],
    notes: {
      phoneNumber: "+1 415 011 1100",
      email: "sophia11@email.com",
      totalSpent: 890,
      preferences:
        "Cool ash tones. PPD-free formula. Olaplex treatment preferred.",
    },
  },
  {
    id: "12",
    name: "Marcello V.",
    image: "https://i.pravatar.cc/150?u=marcello",
    clientSince: 2023,
    visits: 5,
    preferences: "Prefers tight fade on sides. No product.",
    timeline: [
      {
        id: "t12-1",
        date: "2026-02-05",
        name: "Men's Fade",
        items: ["Skin fade", "Scissor finish", "Beard shape"],
        media: [
          "https://i.pravatar.cc/200?u=marcello12-t1a",
          "https://i.pravatar.cc/200?u=marcello12-t1b",
        ],
      },
    ],
    media: [
      {
        id: "p12-1",
        uri: "https://i.pravatar.cc/300?u=marcello12-photo-1",
        type: "image",
      },
    ],
    notes: {
      phoneNumber: "+39 347 012 3456",
      email: "marcello12@email.com",
      totalSpent: 275,
      preferences: "No product. Skin fade sides, scissor top.",
    },
  },
];

export const useGetClientProfileDetails = (
  id?: string,
): ClientProfileDetails | ClientProfileDetails[] => {
  if (id) {
    const client = clientProfiles.find((c) => c.id === id);
    if (!client) throw new Error(`Client with id "${id}" not found.`);
    return client;
  }
  return clientProfiles;
};
