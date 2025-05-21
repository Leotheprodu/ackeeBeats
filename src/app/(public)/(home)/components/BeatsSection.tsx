"use client";
/* eslint-disable @next/next/no-img-element */
import { beats } from "@global/beats";
import { BuyButton } from "./BuyButton";
import { $PlayList, $SelectedSong } from "@stores/player";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { PlayIcon } from "@/icons/PlayIcon";
export const BeatsSection = () => {
  const selectedSong = useStore($SelectedSong);
  const sortedBeats = beats?.sort((a, b) => b.id - a.id);
  const beatLimit = 4;
  const latestBeats = sortedBeats?.slice(0, beatLimit);
  const allBeats = sortedBeats?.slice(beatLimit);
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
    <section
      id="beats"
      className="py-16 flex items-center justify-center flex-col gap-6 w-full h-full overflow-hidden"
    >
      <div className="snap-always flex flex-col items-center md:flex-row md:flex-wrap gap-6 md:justify-center w-full">
        {latestBeats.map((beat) => (
          <div
            id={`beat-${beat.id}`}
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
            } snap-x transition-transform duration-300 hover:cursor-pointer hover:shadow-xl rounded-md flex flex-col  gap-1 p-4 w-[15rem] h-[12rem] md:h-[20rem] rounded-b-md bg-white group`}
          >
            <div className="flex md:items-center justify-between h-2/4 md:h-1/5 w-full">
              <div className="">
                <div className="flex flex-wrap gap-1 items-center">
                  <h3 className="text-lg font-semibold p-0 m-0">{beat.name}</h3>
                  <p className="text-sm text-gray-500">{beat.producer}</p>
                </div>

                <div className="flex gap-2">
                  <small className="bg-gray-200 p-1 rounded-md">
                    {beat.scale}
                  </small>
                  <small className="bg-gray-200 p-1 rounded-md">
                    {beat.bpm}bpm
                  </small>
                </div>
              </div>
              <small className="group-hover:scale-150 rounded-full p-1 transition-all duration-300 ">
                <PlayIcon />
              </small>
            </div>
            <p className="h-1/4 md:h-1/5 w-full text-sm text-gray-600">
              {beat.tags.join(", ")}
            </p>
            <div className="flex md:flex-col items-center gap-4 justify-center md:h-3/5 h-1/4 w-full">
              <img
                src={`https://img.youtube.com/vi/${beat?.youtubeId}/mqdefault.jpg`}
                alt={`imagen de ${beat.name}`}
                className="rounded-full md:h-full md:w-full max-h-28 h-10 w-10  md:rounded-sm object-cover"
              />
              <BuyButton id={beat.id} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-[50rem] gap-1">
        {allBeats.map((beat) => (
          <div
            id={`beat-${beat.id}`}
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
                ? "bg-secundario/40 border-b-2 border-b-secundario/80 shadow-lg"
                : "bg-white"
            } relative snap-x transition-transform duration-300 hover:cursor-pointer hover:shadow-xl justify-center items-center flex gap-1 p-4 w-full md:h-[5rem] group`}
          >
            <div className="flex items-center w-2/5 md:w-1/5 h-full">
              <div className="flex flex-col ">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">{beat.name}</h3>
                  <p className="hidden md:flex text-sm text-center text-gray-500">
                    por {beat.producer}
                  </p>
                </div>
              </div>
              <small className="group-hover:scale-150 flex items-center justify-center rounded-full p-1 transition-all duration-300 absolute right-2">
                <PlayIcon />
              </small>
            </div>
            <div className="flex w-1/5 md:w-2/5 justify-center text-center h-full">
              <p className=" hidden md:flex text-sm text-gray-600 ">
                {beat.tags.join(", ")}
              </p>
              <div className="flex gap-2 items-center justify-center">
                <small className=" md:hidden flex">{beat.tags[0]}</small>
                <small className=" md:flex md:p-1 md:rounded-md md:h-7 md:bg-gray-100">
                  {beat.scale}
                </small>
                <small className=" md:flex md:p-1 md:rounded-md md:h-7 md:bg-gray-100">
                  {beat.bpm}bpm
                </small>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center w-2/5 h-full">
              <img
                src={`https://img.youtube.com/vi/${beat?.youtubeId}/mqdefault.jpg`}
                alt={`imagen de ${beat.name}`}
                className="h-15 w-15 object-cover border-1 border-secundario shadow hidden md:flex"
              />
              <BuyButton id={beat.id} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
