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
    tags: ["Reggaeton", "BadBunny"],
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
];
