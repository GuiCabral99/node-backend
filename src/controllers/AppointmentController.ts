import { FastifyReply, FastifyRequest } from "fastify";
import {
  AppointmentServices,
  AppointmentTypes,
} from "../services/AppointmentServices";

export class AppointmentController {
  async GetAppointment(req: FastifyRequest, reply: FastifyReply) {
    reply.send(await new AppointmentServices().GetAppointment());
  }

  async CreateAppointment(
    req: FastifyRequest<{ Body: AppointmentTypes }>,
    res: FastifyReply
  ) {
    const body = req.body;

    const newAppointment = await new AppointmentServices().CreateAppointment(
      body
    );

    res.send(newAppointment);
  }
}
