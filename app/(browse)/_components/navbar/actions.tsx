import Link from "next/link";
import { Clapperboard } from "lucide-react";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";

export const Actions = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <SignInButton>
          <button className="btn btn-outline btn-white">Login</button>
        </SignInButton>
      )}

      {/* <button className="btn-neutral text-muted-foreground hover:text-primary flex items-center "></button>
</button> */}

      {!!user && (
        <div className="flex items-center gap-x-4">
          <Link href={`/u/${user.username}`} passHref>
            <div className="btn-neutral text-muted-foreground hover:text-primary flex items-center ">
              <Clapperboard className="h-5 w-5 lg:mr-2" />
              <span className="hidden lg:block ">Dashboard</span>
            </div>
          </Link>

          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
};
