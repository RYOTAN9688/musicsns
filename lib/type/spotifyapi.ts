export interface SpotifyAuthApiResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

type TrackItem = {
  album: { href: string; name: string; images: { url: string; height: number; width: number }[] };
  artists: { href: string; name: string }[];
  href: string;
  id: string;
  name: string;
  uri: string;
};

export type SpotifySearchApiResponse = {
  tracks: {
    items: TrackItem[];
  };
};

export type SpotifyRecommendApiResponse = {
  tracks: TrackItem[];
};
