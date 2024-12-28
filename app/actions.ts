"use server";

import { redirect } from "next/navigation";
import prisma from "./utils/db";
import { revalidatePath } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { requireSession } from "./utils/hooks";

export async function createPost(formData: FormData) {
  const session = await requireSession();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await prisma.post.create({
    data: {
      content: content,
      title: title,
    },
  });

  revalidatePath("/blog");

  return redirect("/blog");
}
