/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const itemRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.item.create({
        data: {
          ...input,
          userId: ctx.auth.userId,
        },
      });
    }),
});
