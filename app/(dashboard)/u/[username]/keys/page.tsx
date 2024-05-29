import {Button} from "@/components/ui/button"
import { UrlCard } from "./_components/url-card";
// import { get } from "http";
import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";
import { KeyCard } from "./_components/key-card";
import { ConnectModal } from "./_components/connect-modal";




const KeysPage = async () =>{

    //  const self = await get- 
    const self = await getSelf();
    const stream = await getStreamByUserId(self.id);

    if (!stream) {
        throw new Error("Stream not found");
    }

    


    return (
        <div
        className="p-6 text-white"
        >

            <div
            className="flex justify-between items-center mb-4"
            >


                <h1
                className="text-2xl font-bold"
                >
                        Keys and urls
                </h1>

                <ConnectModal />


            </div>

            <div className="space-y-4">
        <UrlCard value={stream.serverUrl} />
        <KeyCard value={stream.streamKey} />

       
      </div>

        </div>
    )
}

export default KeysPage;