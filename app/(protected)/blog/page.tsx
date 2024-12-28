/* eslint-disable @next/next/no-img-element */
import prisma from "@/app/utils/db";
import { Card } from "@/components/ui/card";
import Link from "next/link";

import React from "react";

async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

const BlogRoute = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">My Simple Blog</h1>
      <Link href="/dashboard">Create Post</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className=" rounded-lg shadow-md overflow-hidden">
            <img
              src="https://random.imagecdn.app/500/500"
              alt={post.title}
              style={{ objectFit: "cover" }}
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-black">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.content}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogRoute;
