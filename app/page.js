'use client';

import { useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function BirthdayPage() {
  useEffect(() => {
    import("canvas-confetti").then((module) => {
      const confetti = module.default;
      confetti();
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-red-100 flex flex-col items-center justify-center p-6">
      <audio autoPlay loop>
  <source src="/bg-music.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
      <h1 className="text-4xl md:text-5xl font-bold text-rose-700 text-center mb-4 animate-pulse">
        🎉 Happy Birthday, Sayang! 🎂
      </h1>
      <p className="text-center text-lg md:text-xl max-w-xl text-gray-800 mb-6">
        Happy birthday my beloved hubby. Thank you sudah selalu sabar
        dan penuh cinta. May this year be filled with joy, love,
        and unexpected blessings. I love you, always. Lets grow old together❤️
      </p>
      
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-6">
        <img
          src="/husband-photo.jpg"
          alt="Foto Suami"
          className="rounded-xl mb-4 shadow-md border w-60 h-auto object-cover mx-auto"
        />
        <p className="text-md text-gray-700 text-center">
          Happy Birthday! 🥰
        </p>
      </div>

      <button className="mt-8 flex items-center px-4 py-2 text-white bg-rose-500 hover:bg-rose-600 rounded-lg shadow-md">
        <Sparkles className="mr-2 h-5 w-5" /> Peluk Virtual
      </button>
    </div>
  );
}
