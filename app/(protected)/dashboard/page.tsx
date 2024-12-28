import { createPost } from "@/app/actions";
import { getUser } from "@/app/utils/hooks";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserCard } from "@/components/web/UserCard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

const DashboardPage = async () => {
  const data = await getUser();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
        <CardDescription>Create a new post to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-y-4" action={createPost}>
          <div className="flex flex-col gap-2">
            <Label>Title</Label>
            <Input name="title" placeholder="Title" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Content</Label>
            <Input name="content" placeholder="Content" />
          </div>
          <Button className="w-fit" type="submit">
            Create
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DashboardPage;
