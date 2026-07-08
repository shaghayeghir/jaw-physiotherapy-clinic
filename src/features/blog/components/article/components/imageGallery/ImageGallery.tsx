// src/components/imageGallery/ImageGallery.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {images.length > 0 ? (
        <div className="rounded-[2.5rem] border border-[#eadfda] bg-white p-6">
          <h3 className="text-base font-bold text-[#2b2b2b]">تصاویر مرتبط</h3>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {images.slice(0, 6).map((src) => (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedImage(src)}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-[#eadfda] bg-[#f7f4f1] transition-opacity hover:opacity-80"
              >
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-[2.5rem] border border-[#eadfda] bg-white p-6">
          <h3 className="text-base font-bold text-[#2b2b2b]">تصاویر</h3>
          <p className="mt-3 text-sm leading-7 text-[#6b6b6b]">
            تصویری برای این مقاله در دسترس نیست.
          </p>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={title}
              width={900}
              height={900}
              className="max-h-[90vh] w-auto rounded-2xl object-contain"
            />
            <button
              type="button"
              className="absolute -top-10 right-0 text-white font-bold"
              onClick={() => setSelectedImage(null)}
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </>
  );
}
