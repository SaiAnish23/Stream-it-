import { User , Stream } from '@prisma/client';
import React from 'react'


type CustomStream = {
  id: string;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
  isLive: boolean;
  // thumbnail: string | null;
  // title: string;
};

type CustomUser = {
  id: string;
  username: string;
  bio: string | null;
  stream: CustomStream | null;
  imageUrl: string;
  _count: { followedBy: number };
};

interface StreamPlayerProps {
  user: CustomUser;
  stream: CustomStream;
  isFollowing: boolean;
}


export const StreamPlayer = ( {user  , stream , isFollowing} : StreamPlayerProps) => {
  return (
    <div>StreamPlayer</div>
  )
}

