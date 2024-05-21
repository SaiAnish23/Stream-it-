import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

// export const Logo = () => {
//   return (
//     <div className="flex flex-col items-center gap-y-4 text-white">
//       <div className="bg-white rounded-full p-1">
//         <Image src="/spooky.svg" alt="Gamehub" height="80" width="80" />
//       </div>
//       <div className={`flex flex-col items-center ${font.className}`}>
//         <p className="text-xl font-semibold">Gamehub</p>
//         <p className="text-sm text-muted-foreground text-slate-100">
//           Let&apos;s play
//         </p>
//       </div>
//     </div>
//   );
// };

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden lg:flex items-center gap-x-4 hover:opacity-75">
        <div className="bg-white rounded-full  p-1">
          <Image src="/spooky.svg" alt="Stream-It" height="32" width="32" />
        </div>

        <div>
          <p className="text-lg font-semibold">Stream-It</p>
          <p className="text-slate-100 opacity-75 text-xs">Let&apos;s Rock</p>
        </div>

        {/* </Image> */}
      </div>
    </Link>
  );
};
