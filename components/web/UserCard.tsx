"use client";

import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

interface iAppProps {
  user: string | null;
}
export function UserCard({ user }: iAppProps) {
  return <div>{user}</div>;
}
