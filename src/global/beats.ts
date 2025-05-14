export type Beat = {
  id: number;
  name: string;
  tags: string[];
  youtubeId: string;
};

export const beats: Beat[] = [
  {
    id: 1,
    name: "Adictivo",
    tags: ["reggaeton", "fiesta"],
    youtubeId: "vmQYPAsdghU",
  },
  {
    id: 2,
    name: "En la Nota",
    tags: ["reggaeton", "fiesta"],
    youtubeId: "FAOAoulrYzA",
  },
  {
    id: 3,
    name: "Mia",
    tags: ["Afrobeat", "caribleño"],
    youtubeId: "GKCjc_IM7Bo",
  },
];
