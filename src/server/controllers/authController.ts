import { FastifyReply, FastifyRequest } from 'fastify';
import bcrypt from 'bcrypt';
import { User } from '../models/User.js';
import { LoginSchema } from '../types/auth.js';
import { z } from 'zod';

export const login = async (request: FastifyRequest<{ Body: z.infer<typeof LoginSchema> }>, reply: FastifyReply) => {
  try {
    const validatedData = LoginSchema.parse(request.body);
    const { email, password } = validatedData;

    const emailIsValid = LoginSchema.shape.email.safeParse(email).success;
    if (!emailIsValid) return reply.status(400).send({ error: 'Invalid email format.' });

    const user = await User.findUserByUsername(email);
    if (!user) return reply.status(401).send({ message: 'Invalid credentials' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return reply.status(401).send({ message: 'Invalid credentials' });

    reply.send({ message: 'Login successful' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map((err) => ({
        feild: err.path?.join('.'),
        message: err?.code == 'invalid_type' ? 'bad request' : err.message,
      }));

      return reply.status(400).send({ errors });
    }
  }
};
