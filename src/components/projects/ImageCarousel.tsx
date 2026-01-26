import { useState } from "react"

type Props = {
  images: string[]
}

export default function ImageCarousel({ images }: Props) {
  const [index, setIndex] = useState(0)

  return (
    <div className="relative">
      <img
        src={images[index]}
        className="w-full rounded-lg object-contain"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={() => setIndex((index - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 py-1 rounded"
          >
            ‹
          </button>

          <button
            onClick={() => setIndex((index + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 py-1 rounded"
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}
