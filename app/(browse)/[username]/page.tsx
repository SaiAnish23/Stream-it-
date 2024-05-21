// import React from "react";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { isFollowingUser } from "@/lib/follow-service";
import { Actions } from "./_components/actions";
interface userPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: userPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    return notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div>UserPage : {user.username} </div>
        <div>UserPage : {user.id} </div>
        <p>is following: {isFollowing ? "yes" : "no"}</p>
        <Actions isFollowing={isFollowing} userId={user.id} />
      </div>
    </>
  );
};

export default UserPage;
