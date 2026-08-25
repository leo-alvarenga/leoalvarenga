export type OpenGraphOptionsImage = {
  alt: string;
  src: string;
  width?: number;
  height?: number;
};

export type OpenGraphOptions = {
  title?: string;
  author?: string;
  pathname?: string;
  description?: string;
  image?: {
    default?: OpenGraphOptionsImage;
    square?: OpenGraphOptionsImage;
  };
};
