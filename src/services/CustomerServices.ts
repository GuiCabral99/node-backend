import prismaClient from "../../prisma";

export interface CustomerType {
  fullName: string;
  phone: string;
  pw: string;
}

export class CustomerServices {
  async CreateCustomer({ body }: { body: CustomerServices }) {
    return await prismaClient.customer.create({ data: body });
  }

  async GetCustomers() {
    return await prismaClient.customer.findMany();
  }
}
