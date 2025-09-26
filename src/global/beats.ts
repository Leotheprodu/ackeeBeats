export type Beat = {
  id: number;
  name: string;
  tags: string[];
  youtubeId: string;
  producer: string;
  bpm: number;
  scale: string;
};

export const beats: Beat[] = [
  {
    id: 1,
    name: "New West",
    producer: "LeoTheProdu",
    tags: ["Dancehall", "Experimental", "Trap", "Guitarrra"],
    bpm: 110,
    scale: "C#m",
    youtubeId: "RZpoWOVAJkU",
  },
  {
    id: 2,
    name: "Playita",
    producer: "LeoTheProdu",
    tags: ["Afrobeat", "Caribeño", "Dancehall", "Guitarra", "Beéle"],
    bpm: 101,
    scale: "Fm",
    youtubeId: "ijSX5p7hS4s",
  },
  {
    id: 3,
    name: "Kintsugi",
    producer: "LeoTheProdu",
    tags: ["Reggaeton", "Mode Up"],
    bpm: 95,
    scale: "Em",
    youtubeId: "43a63wMYPYE",
  },
  {
    id: 4,
    name: "Bruma",
    producer: "LeoTheProdu",
    tags: ["Afrobeat", "Dancehall", "Guitarra"],
    bpm: 103,
    scale: "A#m",
    youtubeId: "QsztNReZYK4",
  },
  {
    id: 5,
    name: "Twilight Riddim",
    producer: "LeoTheProdu",
    tags: ["DanceHall", "Trap"],
    bpm: 95,
    scale: "D#m",
    youtubeId: "Wg7xLPozJS4",
  },
  {
    id: 6,
    name: "Slow Ride",
    producer: "LeoTheProdu",
    tags: ["Hip Hop", "Soul"],
    bpm: 90,
    scale: "Am",
    youtubeId: "fO_8qSVPGE8",
  },
  {
    id: 7,
    name: "Bloque 153",
    producer: "LeoTheProdu",
    tags: ["Drill", "Latino"],
    bpm: 153,
    scale: "Am",
    youtubeId: "wuIjvJpM_lo",
  },
  {
    id: 8,
    name: "Eterno",
    producer: "LeoTheProdu",
    tags: ["Reggaeton", "Guitarra"],
    bpm: 93,
    scale: "Bm",
    youtubeId: "AQEhM7p369M",
  },
  {
    id: 9,
    name: "Ayanda",
    producer: "LeoTheProdu",
    tags: ["Afrobeat", "Guitarra"],
    bpm: 102,
    scale: "E",
    youtubeId: "wql8tud1feg",
  },
  {
    id: 10,
    name: "A fuego",
    producer: "LeoTheProdu",
    tags: ["Reggaeton", "Tiktok"],
    bpm: 88,
    scale: "Cm",
    youtubeId: "8NKmKZ1tUI0",
  },
  {
    id: 11,
    name: "Cocles",
    producer: "LeoTheProdu",
    tags: ["Reggae", "Tiktok", "Roots"],
    bpm: 80,
    scale: "Bm",
    youtubeId: "fLXe97kFFgY",
  },
];
