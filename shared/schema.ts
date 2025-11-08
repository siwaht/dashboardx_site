import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const demoRequests = pgTable("demo_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  jobTitle: text("job_title").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const consultationRequests = pgTable("consultation_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  jobTitle: text("job_title").notNull(),
  serviceInterest: text("service_interest").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertDemoRequestSchema = createInsertSchema(demoRequests).omit({
  id: true,
  status: true,
  createdAt: true,
  updatedAt: true,
});

export const insertConsultationRequestSchema = createInsertSchema(consultationRequests).omit({
  id: true,
  status: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertDemoRequest = z.infer<typeof insertDemoRequestSchema>;
export type DemoRequest = typeof demoRequests.$inferSelect;
export type InsertConsultationRequest = z.infer<typeof insertConsultationRequestSchema>;
export type ConsultationRequest = typeof consultationRequests.$inferSelect;
