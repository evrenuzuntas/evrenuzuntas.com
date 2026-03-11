import NextImage from "next/image";
import type { BentoItemData } from "@/constants/bentoItems";

export function ImageCard({ image }: BentoItemData) {
  if (!image) return null;
  return <NextImage src={image} alt="" fill className="object-cover" />;
}
