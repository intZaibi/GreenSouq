"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

type Favorite = {
  id: number;
  title: string;
};

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [adding, setAdding] = useState(false); // ✅ for spinner

  // Load favorites
  useEffect(() => {
    async function fetchFavorites() {
      
      try {
        const res = await axios.get("/api/favorites");
        setFavorites(res.data);
      } catch (err) {
        console.error("Error fetching favorites", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFavorites();
  }, []);

  // Add new favorite
  async function addFavorite(e: React.FormEvent) {
    e.preventDefault();
    if (!newTitle.trim() || adding) return; // ✅ avoid double click
    setAdding(true);

    try {
      const res = await axios.post("/api/favorites", { title: newTitle });
      setFavorites((prev) => [res.data, ...prev]);
      setNewTitle("");
    } catch {
      alert("Error adding favorite");
    } finally {
      setAdding(false);
    }
  }

  // Delete favorite
  async function deleteFavorite(id: number) {
    try {
      await axios.delete(`/api/favorites/${id}`);
      setFavorites((prev) => prev.filter((f) => f.id !== id));
    } catch {
      alert("Error deleting");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col items-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-green-100"
      >
        <h1 className="text-3xl font-extrabold mb-6 text-center text-green-700">
          🌿 My Favorite Songs
        </h1>

        {/* Add Favorite Form */}
        <form
          onSubmit={addFavorite}
          className="flex flex-col sm:flex-row items-center gap-3 mb-6"
        >
          <input
            type="text"
            name="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Enter your favorite song name..."
            className="border border-green-200 px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 shadow-sm cursor-text"
          />
          <button
            type="submit"
            disabled={adding}
            className={`flex justify-center items-center gap-2 px-6 py-2 font-semibold rounded-lg shadow-md text-white transition duration-300 ease-in-out ${
              adding
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 cursor-pointer"
            }`}
          >
            {adding ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Adding...
              </>
            ) : (
              "Add"
            )}
          </button>
        </form>

        {/* Favorites List */}
        {loading ? (
          <p className="text-center text-gray-500 animate-pulse">
            Loading favorites...
          </p>
        ) : favorites.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 mb-2 text-lg">No favorites yet 😢</p>
            <p className="text-gray-400 text-sm">
              Start adding songs you love 🎶
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <AnimatePresence>
              {favorites.map((f) => (
                <motion.div
                  key={f.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex justify-between items-center bg-white border border-green-100 shadow-sm hover:shadow-md rounded-xl px-5 py-3 transition duration-200"
                >
                  <span className="text-gray-800 font-medium">
                    🎵 {f.title}
                  </span>
                  <button
                    onClick={() => deleteFavorite(f.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-semibold transition cursor-pointer"
                  >
                    Delete
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </motion.div>
    </div>
  );
}