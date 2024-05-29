"use client";

import { User , Stream } from '@prisma/client';
import { cn } from "@/lib/utils";

import React from 'react'
import { useViewerToken } from '@/hooks/use-viewer-token';
import { LiveKitRoom } from "@livekit/components-react";
import { Video, VideoSkeleton } from "./video";




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

    const {token , name  , identity} = useViewerToken(user.id);


      if(!token || !name || !identity){ 
        return (
          <div>
            Cannot Watch the stream
          </div>
        ) 
      }

  return (
    <>
     <LiveKitRoom 
            token={token}
            serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL!}
            className={cn(
              "grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full",
              // collapsed && "lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
            )}
     > 
       <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
       Allowed StreamPlayer
       <Video hostName={user.username} hostIdentity={user.id} />

       </div>
     </LiveKitRoom>
    
     
     </>
  )
}

