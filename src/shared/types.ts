export interface GifType {
  id: string;
  title: string;
  url?: string;
}

export interface GifResponse {
  id: string;
  title: string;
  images?: {
    downsized_medium?: {
      url?: string;
    };
  };
}

export interface JSONResponse {
  data?: GifResponse[];
  errors?: Array<{ message: string; }>;
}
