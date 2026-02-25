"use client"

import { Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useWallet } from "@/components/providers/wallet-provider"

/**
 * Formats a Stellar address for display
 * Shows first 4 and last 4 characters with ellipsis
 */
function formatAddress(address: string): string {
  if (address.length <= 12) return address
  return `${address.slice(0, 4)}...${address.slice(-4)}`
}

/**
 * Wallet connect button component
 *
 * Displays "Connect Wallet" when disconnected or truncated address when connected
 */
export function WalletButton() {
  const { address, isConnected, connect, disconnect } = useWallet()

  if (isConnected && address) {
    return (
      <Button
        variant="outline"
        onClick={disconnect}
        className="gap-2"
        aria-label="Disconnect wallet"
      >
        <Wallet className="h-4 w-4" />
        <span className="hidden sm:inline">{formatAddress(address)}</span>
        <span className="sm:hidden">{formatAddress(address)}</span>
      </Button>
    )
  }

  return (
    <Button
      onClick={connect}
      className="gap-2"
      aria-label="Connect wallet"
    >
      <Wallet className="h-4 w-4" />
      <span>Connect Wallet</span>
    </Button>
  )
}
