import prismaClient from "../../prisma";

export interface AppointmentTypes {
  customerId: string;
  service: string;
  price: number;
  startDate: string;
  duration: number;
}

export class AppointmentServices {
  async CreateAppointment(body: AppointmentTypes) {
    const newAppointment = await prismaClient.appointment.create({
      data: body,
    });
    return newAppointment;
  }

  async GetAppointment() {
    return await prismaClient.appointment.findMany();
  }
}
