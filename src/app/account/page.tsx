import type { Metadata } from "next";
import { Suspense } from "react";
import { Account } from "@/components/Account";

export const metadata: Metadata = { title: "My account" };

export default function AccountPage() {
  return (
    <Suspense>
      <Account />
    </Suspense>
  );
}
