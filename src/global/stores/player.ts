import { atom } from "nanostores";

export type selectedSongProps = {
  id: number;
  youtubeId?: string;
  name: string;
  tags: string[];
};

export const $SelectedSong = atom<selectedSongProps | null>(null);
export const $PlayList = atom<selectedSongProps[]>([
  {
    id: 0,
    youtubeId: "",
    name: "",
    tags: [],
  },
]);
