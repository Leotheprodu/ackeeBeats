"use client";
/* eslint-disable @next/next/no-img-element */
import { beats } from "@global/beats";
import { BuyButton } from "./BuyButton";
import { $PlayList, $SelectedSong } from "@stores/player";
import { useEffect, useState, useMemo } from "react";
import { useStore } from "@nanostores/react";
import { PlayIcon } from "@/icons/PlayIcon";
import { SearchInput } from "./SearchInput";

export const BeatsSection = () => {
  const selectedSong = useStore($SelectedSong);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBeats = useMemo(() => {
    if (!searchTerm) return beats || [];
    const term = searchTerm.toLowerCase();
    return beats.filter(
      (beat) =>
        beat.name.toLowerCase().includes(term) ||
        beat.tags.some((tag) => tag.toLowerCase().includes(term)) ||
        beat.producer.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const sortedBeats = useMemo(
    () => [...filteredBeats].sort((a, b) => b.id - a.id),
    [filteredBeats]
  );

  const trendingBeats = useMemo(() => sortedBeats.slice(0, 4), [sortedBeats]);
  const otherBeats = useMemo(() => sortedBeats.slice(4), [sortedBeats]);

  useEffect(() => {
    const songsWithYoutubeId = beats?.filter((song) => song.youtubeId);

    if (songsWithYoutubeId && songsWithYoutubeId.length > 0) {
      const songsToPlaylists = songsWithYoutubeId.map((song) => ({
        id: song.id,
        youtubeId: song.youtubeId,
        name: song.name,
        tags: song.tags,
      }));
      $PlayList.set(songsToPlaylists);
    }
  }, []);

  const handleSelectBeat = (beat: any) => {
    $SelectedSong.set({
      id: beat.id,
      name: beat.name,
      youtubeId: beat.youtubeId,
      tags: beat.tags,
    });
  };

  return (
    <section
      id="beats"
      className="py-16 px-6 max-w-7xl mx-auto w-full flex flex-col items-center gap-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-900">
          Explora el Catálogo
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Encuentra el ritmo perfecto para tu próximo éxito musical. Filtra por
          nombre, género o estilo.
        </p>
      </div>

      <SearchInput value={searchTerm} onChange={setSearchTerm} />

      {trendingBeats.length > 0 && (
        <div className="w-full space-y-8">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-secundario">🔥</span> Tendencias
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingBeats.map((beat) => (
              <div
                key={beat.id}
                onClick={() => handleSelectBeat(beat)}
                className={`group relative bg-white rounded-2xl p-4 transition-all duration-300 hover:shadow-2xl border-2 ${
                  selectedSong?.id === beat.id
                    ? "border-secundario"
                    : "border-transparent shadow-lg"
                } cursor-pointer`}
              >
                <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
                  <img
                    src={`https://img.youtube.com/vi/${beat.youtubeId}/maxresdefault.jpg`}
                    alt={beat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (
                        e.target as HTMLImageElement
                      ).src = `https://img.youtube.com/vi/${beat.youtubeId}/mqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 p-4 rounded-full scale-75 group-hover:scale-100 transition-transform">
                      <PlayIcon className="w-8 h-8 text-secundario" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold truncate">{beat.name}</h4>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">
                      {beat.producer}
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                      {beat.bpm} BPM
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {beat.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-secundario/10 text-secundario px-2 py-0.5 rounded-full font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-gray-50 mt-2">
                    <BuyButton id={beat.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {otherBeats.length > 0 && (
        <div className="w-full space-y-8 mt-12">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h3 className="text-2xl font-bold">Más Recientes</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {otherBeats.map((beat) => (
              <div
                key={beat.id}
                onClick={() => handleSelectBeat(beat)}
                className={`flex items-center gap-6 bg-white p-3 rounded-xl transition-all hover:shadow-md cursor-pointer group border-l-4 ${
                  selectedSong?.id === beat.id
                    ? "border-secundario bg-secundario/5"
                    : "border-transparent hover:border-gray-200"
                }`}
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <img
                    src={`https://img.youtube.com/vi/${beat.youtubeId}/mqdefault.jpg`}
                    alt={beat.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow min-w-0 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                  <div>
                    <h4 className="font-bold truncate">{beat.name}</h4>
                    <p className="text-xs text-gray-500">{beat.producer}</p>
                  </div>
                  <div className="hidden md:flex flex-wrap gap-2">
                    {beat.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-gray-400 border border-gray-200 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-end gap-6 h-full">
                    <span className="hidden sm:block text-sm font-medium text-gray-400">
                      {beat.bpm} BPM
                    </span>
                    <span className="hidden sm:block text-sm font-medium text-gray-400">
                      {beat.scale}
                    </span>
                    <BuyButton id={beat.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredBeats.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-xl font-medium">
            No se encontraron beats que coincidan con tu búsqueda.
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="text-secundario font-bold mt-2 hover:underline"
          >
            Limpiar búsqueda
          </button>
        </div>
      )}
    </section>
  );
};
