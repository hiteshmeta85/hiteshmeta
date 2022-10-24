import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const messageRouter = router({
  createMessage: protectedProcedure
    .input(z.object({ message: z.string().min(1).max(280) }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.message.create({
          data: {
            message: input.message,
            author: ctx?.session?.user?.name as string,
            authorId: ctx.session.user.id
          }
        });
      } catch (error) {
        console.log(error);
      }
    }),
  getAllMessages: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.message.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      select: {
        message: true,
        updatedAt: true,
        author: true
      }
    });
  })
});
