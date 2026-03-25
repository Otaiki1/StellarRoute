export type SupportedWallet = "freighter" | "xbull";

export type WalletSession = {
  walletId: SupportedWallet | null;
  address: string | null;
  network: string | null;
  isConnected: boolean;
};