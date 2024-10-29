import prisma from '../database/db.js';

export const User = {
  findUserByUsername: async (email: string) => {
    return await prisma.user.findUnique({
      where: { email },
    });
  },
};
