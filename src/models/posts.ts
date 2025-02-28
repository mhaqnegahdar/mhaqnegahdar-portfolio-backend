import { uuid, pgTable, varchar, boolean, pgEnum, jsonb } from 'drizzle-orm/pg-core';

export const statusEnum = pgEnum('status', ['draft', 'published', 'archived', 'deleted']);

export const posts = pgTable('posts', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid().notNull(),
    title: varchar(),
    image: varchar('image'),
    content: jsonb().default([]),
    status: statusEnum(),
    isFeatured: boolean('isFeatured').default(false),
    readTime: varchar('readTime')
});
