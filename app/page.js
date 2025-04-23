'use client';

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function BirthdayPage() {
  useEffect(() => {
    const confetti = () => {
      import("canvas-confetti").then((module) => {
        const confetti = module.default;
        confetti();
      });
    };
    confetti();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-red-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-rose-700 text-center mb-4 animate-pulse">
        🎉 Happy Birthday, Sayang! 🎂
      </h1>
      <p className="text-center text-lg md:text-xl max-w-xl text-gray-800 mb-6">
        Selamat ulang tahun untuk my beloved hubby. Terima kasih selalu sabar dan penuh cinta. Semoga tahun ini penuh berkah, tawa,
        dan impian yang jadi nyata. I love you till jannah, always. ❤️
      </p>
      <Card className="bg-white shadow-lg rounded-2xl w-full max-w-sm">
        <CardContent className="flex flex-col items-center p-6">
          <img
            src="/husband-photo.jpg"
            alt="Foto Suami"
            className="rounded-xl mb-4 shadow-md border w-60 h-auto object-cover"
          />
          <p className="text-md text-gray-700 text-center">
            Ini foto kamu yang paling aku suka. Selalu terlihat hangat dan penuh cinta, so adorable 🥰
          </p>
        </CardContent>
      </Card>
      <Button className="mt-8 text-white bg-rose-500 hover:bg-rose-600">
        <Sparkles className="mr-2 h-5 w-5" /> Peluk Virtual
      </Button>
    </div>
  );
}
