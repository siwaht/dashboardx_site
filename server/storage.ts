import type { InsertDemoRequest, DemoRequest, InsertConsultationRequest, ConsultationRequest } from "@shared/schema";

export interface IStorage {
  createDemoRequest(data: InsertDemoRequest): Promise<DemoRequest>;
  createConsultationRequest(data: InsertConsultationRequest): Promise<ConsultationRequest>;
}

export class MemStorage implements IStorage {
  private demoRequests: DemoRequest[] = [];
  private consultationRequests: ConsultationRequest[] = [];

  async createDemoRequest(data: InsertDemoRequest): Promise<DemoRequest> {
    const request: DemoRequest = {
      id: crypto.randomUUID(),
      ...data,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.demoRequests.push(request);
    return request;
  }

  async createConsultationRequest(data: InsertConsultationRequest): Promise<ConsultationRequest> {
    const request: ConsultationRequest = {
      id: crypto.randomUUID(),
      ...data,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.consultationRequests.push(request);
    return request;
  }
}

export const storage = new MemStorage();
