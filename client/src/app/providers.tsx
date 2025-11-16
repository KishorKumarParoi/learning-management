"use client";

import StoreProvider from "@/state/redux";
import { ClerkProvider } from "@clerk/nextjs";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export function ClerkProviderClient({ children }: { children: React.ReactNode }) {
  // Keep this minimal and deterministic
  return <ClerkProvider>{children}</ClerkProvider>;
}

export default Providers;
