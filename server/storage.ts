import type { InsertDemoRequest, DemoRequest, InsertConsultationRequest, ConsultationRequest } from "../shared/schema.js";
import { db } from "./db.js";
import { demoRequests, consultationRequests } from "../shared/schema.js";

export interface IStorage {
  createDemoRequest(data: InsertDemoRequest): Promise<DemoRequest>;
  createConsultationRequest(data: InsertConsultationRequest): Promise<ConsultationRequest>;
}

export class DbStorage implements IStorage {
  async createDemoRequest(data: InsertDemoRequest): Promise<DemoRequest> {
    const [request] = await db.insert(demoRequests).values(data).returning();
    return request;
  }

  async createConsultationRequest(data: InsertConsultationRequest): Promise<ConsultationRequest> {
    const [request] = await db.insert(consultationRequests).values(data).returning();
    return request;
  }
}

export const storage = new DbStorage();
