"use client";

import { Search } from "@/icons/Search";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchInput = ({
  value,
  onChange,
  placeholder = "Buscar beats, géneros...",
}: SearchInputProps) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8 group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-secundario transition-colors" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-12 pr-4 py-4 bg-white border-2 border-transparent shadow-xl rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-secundario transition-all text-lg"
        placeholder={placeholder}
      />
    </div>
  );
};
