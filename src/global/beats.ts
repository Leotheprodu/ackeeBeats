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
    tags: ["Dancehall", "Experimental", "Trap", "Guitar"],
    bpm: 110,
    scale: "C#m",
    youtubeId: "RZpoWOVAJkU",
  },
];
