"use client";

import * as React from "react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface LogoutButtonProps {
  onLogout: () => Promise<void>;
  icon?: React.ElementType;
}

export function LogoutButton({ onLogout, icon: Icon }: LogoutButtonProps) {
  const [isPending, setIsPending] = React.useState(false);

  const handleConfirm = async () => {
    setIsPending(true);
    await onLogout();
    setIsPending(false);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="w-full justify-center outline outline-1 outline-blue-500  text-destructive hover:text-destructive hover:bg-destructive/10">
            {Icon ? <Icon className="h-4 w-4 " /> : <LogOut className="h-4 w-4" />}

          Log out
        </Button>
      </AlertDialogTrigger>
      
      <AlertDialogContent className="max-w-md bg-background border-border">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to proceed?</AlertDialogTitle>
          <AlertDialogDescription>
            You will be signed out of your account. You will need to log in again to access your dashboard.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>No, cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleConfirm}
            disabled={isPending}
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
          >
            {isPending ? "Processing..." : "Yes, I'm sure"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}