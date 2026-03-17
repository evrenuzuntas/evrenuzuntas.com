export type BentoItemData = {
  id: string;
  spanX?: 1 | 2;
  spanY?: 1 | 2;
  /** İkon anahtarı – normal boyutta gösterilir */
  icon?: string;
  /** İkon anahtarı – aynı ikon 2 kat büyük gösterilir (bulunduğu konumda) */
  bigIcon?: string;
  stat?: string;
  image?: string;
  label?: string;
  sublabel?: string;
  link?: string;
};
