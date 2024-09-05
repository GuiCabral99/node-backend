import { FastifyInstance } from "fastify";
import { AppointmentController } from "../controllers/AppointmentController";

const appointmentController = new AppointmentController();

export async function AppointmentRoute(fastify: FastifyInstance) {
  fastify.post("/appointment", appointmentController.CreateAppointment);
  fastify.get("/appointment", appointmentController.GetAppointment);
}
