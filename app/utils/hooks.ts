import { redirect } from "next/navigation";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "./db";

export async function requireSession() {
  const { isAuthenticated } = getKindeServerSession();
  const authBoolean = await isAuthenticated();
  if (!authBoolean) {
    redirect("/login");
  }
  return authBoolean;
}

export async function getUser() {
  const sesion = await requireSession();

  const data = await prisma.user.findMany();
  return data;
}
