import {
  requestAccess,
  getAddress,
  getNetworkDetails,
  isAllowed,
} from "@stellar/freighter-api";

import type { SupportedWallet, WalletSession } from "./types";

export const WALLET_LABELS: Record<SupportedWallet, string> = {
  freighter: "Freighter",
  xbull: "xBull",
};

export async function getAvailableWallets() {
  const wallets: { id: SupportedWallet; label: string }[] = [];

  try {
    const allowed = await isAllowed();
    if (allowed) {
      wallets.push({ id: "freighter", label: "Freighter" });
    }
  } catch {
    // Freighter not available
  }

  if (typeof window !== "undefined" && (window as any).xbull) {
    wallets.push({ id: "xbull", label: "xBull" });
  }

  return wallets;
}

export async function connectWallet(
  walletId: SupportedWallet
): Promise<WalletSession> {
  if (walletId === "freighter") {
    const access = await requestAccess();

    if (access.error) {
      throw new Error(access.error);
    }

    const addressRes = await getAddress();
    const networkRes = await getNetworkDetails();

    return {
      walletId,
      address: addressRes.address,
      network: networkRes.network,
      isConnected: true,
    };
  }

  throw new Error("xBull not implemented yet");
}

export async function disconnectWallet(): Promise<WalletSession> {
  return {
    walletId: null,
    address: null,
    network: null,
    isConnected: false,
  };
}

export async function signTransactionStub(xdr: string) {
  return {
    ok: false,
    message: "Signing stub only (out of scope)",
    xdr,
  };
}