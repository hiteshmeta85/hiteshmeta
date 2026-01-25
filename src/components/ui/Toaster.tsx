"use client";

import { Toaster as HotToaster } from "react-hot-toast";

export function Toaster() {
  return (
    <HotToaster
      toastOptions={{
        style: {
          background: "#27272a",
          color: "#e4e4e7",
        },
      }}
    />
  );
}
