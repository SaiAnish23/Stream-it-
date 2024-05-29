"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlertTriangle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle , } from "@/components/ui/alert";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";


export const ConnectModal = () => { 

   return (
      <Dialog>
        <DialogTrigger asChild>
            <Button variant="primary">Connect</Button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>

                <DialogTitle>
                    Connect to OBS
                </DialogTitle>
                
            </DialogHeader>
            <Select
        //   disabled={isPending}
        //   value={ingressType}
        // value="RTMP"
        //   onValueChange={(value) => setIngressType(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Ingress Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Rtmp">RTMP</SelectItem>
            <SelectItem value="Whip">WHIP</SelectItem>
          </SelectContent>
        </Select>

            <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>
            This action will reset all active streams using the current
            connection
          </AlertDescription>
        </Alert>
        <div className="flex justify-between">
          <DialogClose  asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="primary"
          onClick={() => { }}
          >
            Generate
          </Button>
        </div>
        </DialogContent>

      </Dialog>
   )


}