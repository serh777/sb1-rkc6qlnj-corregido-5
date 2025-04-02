export interface SocialWeb3Platform {
  name: string;
  connected: boolean;
  followers: number;
  posts: number;
  engagement: number;
}

export interface SocialWeb3Data {
  metrics: {
    engagement: number;
    reach: number;
    influence: number;
    consistency: number;
  };
  platforms: SocialWeb3Platform[];
  recommendations: Array<{
    platform: string;
    tips: string[];
  }>;
}

export interface SocialWeb3AnalysisResult {
  type: 'social-web3';
  data: SocialWeb3Data;
  score: number;
}