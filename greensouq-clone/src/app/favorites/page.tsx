"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Favorite = {
  id: number;
  title: string;
};

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const res = await axios.get("/api/favorites");
        setFavorites(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchFavorites();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const titleInput = (e.target as HTMLFormElement).elements.namedItem("title") as HTMLInputElement;
    const title = titleInput.value;
    if (!title) return;
    try {
      const res = await axios.post("/api/favorites", { title });
      setFavorites([...favorites, res.data]);
    } catch {
      alert("Error adding favorite");
    }
  }

  async function deleteFavorite(id: number) {
    try {
      await axios.delete(`/api/favorites/${id}`);
      setFavorites(favorites.filter((f: Favorite) => f.id !== id));
    } catch {
      alert("Error deleting");
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>

      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          name="title"
          placeholder="Enter favorite title"
          className="border px-2 py-1 flex-1 rounded-l"
        />
        <button type="submit" className="bg-green-600 text-white px-4 rounded-r">
          Add
        </button>
      </form>

      {favorites.map((f: Favorite) => (
        <div
          key={f.id}
          className="flex justify-between border-b py-2 items-center"
        >
          <span>{f.title}</span>
          <button
            onClick={() => deleteFavorite(f.id)}
            className="text-red-600 hover:underline"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
