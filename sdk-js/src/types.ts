export interface Asset {
  asset_type: 'native' | 'credit_alphanum4' | 'credit_alphanum12';
  asset_code?: string;
  asset_issuer?: string;
}

export interface TradingPair {
  base: string;
  counter: string;
  base_asset: string;
  counter_asset: string;
  offer_count: number;
  last_updated?: string;
}

export interface PairsResponse {
  pairs: TradingPair[];
  total: number;
}

export interface OrderbookEntry {
  price: string;
  amount: string;
  total: string;
}

export interface Orderbook {
  base_asset: Asset;
  quote_asset: Asset;
  bids: OrderbookEntry[];
  asks: OrderbookEntry[];
  timestamp: number;
}

export type QuoteType = 'sell' | 'buy';

export interface PathStep {
  from_asset: Asset;
  to_asset: Asset;
  price: string;
  source: string;
}

export interface PriceQuote {
  base_asset: Asset;
  quote_asset: Asset;
  amount: string;
  price: string;
  total: string;
  quote_type: QuoteType;
  path: PathStep[];
  timestamp: number;
}

export interface HealthStatus {
  status: 'healthy' | 'unhealthy';
  version: string;
  timestamp: string;
  components: Record<string, string>;
}

export interface ApiError {
  error: string;
  message: string;
  details?: unknown;
}
