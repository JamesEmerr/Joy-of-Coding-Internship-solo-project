import { z } from 'zod';

export const issueSchema = z.object({
    title: z.string().min(1, 'Title is required').max(25),
    description: z.string().min(1, 'Description is required').max(250),
});
