// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { messageRouter } from "./message";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  message: messageRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
