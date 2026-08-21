export type OpenGraphOptionsImage = {
  alt: string;
  src: string;
  width?: number;
  height?: number;
};

export type OpenGraphOptions = {
  author?: string;
  description?: string;
  title?: string;
  pathname?: string;
  image?: {
    default?: OpenGraphOptionsImage;
    square?: OpenGraphOptionsImage;
  };
};
