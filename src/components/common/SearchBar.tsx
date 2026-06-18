"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { searchChannel } from "@/services/channelService";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder = "Search a YouTube channel..." }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      return;
    }

    setIsSearching(true);
    try {
      const result = await searchChannel(trimmedQuery);
      router.push(`/channel/${result.slug}`);
    } catch (error) {
      console.error("Search failed", error);
    } finally {
      setIsSearching(false);
    }
  }

  return (
    <form className="flex min-w-0 flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
      <input
        aria-label="Search channel"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 rounded-xl border border-slate-300 px-6 py-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="min-w-0 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-indigo-700 hover:shadow-xl sm:whitespace-nowrap"
        disabled={isSearching}
      >
        <span className="truncate">{isSearching ? "Searching..." : "Analyze Channel"}</span>
      </button>
    </form>
  );
}
