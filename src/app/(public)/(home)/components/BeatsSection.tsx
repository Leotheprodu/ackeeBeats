"use client";
/* eslint-disable @next/next/no-img-element */
import { beats } from "@global/beats";
import { BuyButton } from "./BuyButton";
import { $PlayList, $SelectedSong } from "@stores/player";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { useSearchParams } from "next/navigation";
import { PlayIcon } from "@/icons/PlayIcon";
export const BeatsSection = () => {
  const selectedSong = useStore($SelectedSong);
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      $SelectedSong.set(beats.find((beat) => beat.id === parseInt(id)) || null);
    }
  }, [searchParams]);

  useEffect(() => {
    const songsWithYoutubeId = beats?.filter((song) => song.youtubeId);

    if (songsWithYoutubeId && songsWithYoutubeId.length > 0) {
      const songsToPlaylists = songsWithYoutubeId.map((song) => ({
        id: song.id,
        youtubeId: song.youtubeId,
        name: song.name,
        tags: song.tags,
      }));
      console.log("songsToPlaylists", songsToPlaylists);
      $PlayList.set(songsToPlaylists);
    }
  }, []);
  return (
    <section id="beats" className="py-16">
      <div className="flex flex-wrap gap-6 justify-center ">
        {beats?.map((beat) => (
          <div
            key={beat.id}
            onClick={() =>
              $SelectedSong.set({
                id: beat.id,
                name: beat.name,
                youtubeId: beat.youtubeId,
                tags: beat.tags,
              })
            }
            className={`${
              selectedSong?.id === beat.id
                ? "scale-105 border-b-2 border-b-secundario/80 shadow-lg"
                : ""
            } transition-transform duration-300 hover:cursor-pointer hover:shadow-xl rounded-md flex flex-col gap-1 p-4 w-60 h-64 rounded-b-md bg-white group`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{beat.name}</h3>
              <small className="group-hover:scale-150 rounded-full p-1 transition-all duration-300 ">
                <PlayIcon />
              </small>
            </div>
            <p className="text-sm text-gray-600">{beat.tags.join(", ")}</p>
            <div className="flex flex-col items-center gap-4 justify-center w-full">
              <img
                src={`https://img.youtube.com/vi/${beat?.youtubeId}/mqdefault.jpg`}
                alt={`imagen de ${beat.name}`}
                className="h-full w-full rounded-sm object-cover"
              />
              <BuyButton id={beat.id} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
