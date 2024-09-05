import { FastifyReply, FastifyRequest } from "fastify";
import { CustomerServices, CustomerType } from "../services/CustomerServices";

export class CustomerController {
  async CreateCustomer(
    req: FastifyRequest<{ Body: CustomerType }>,
    reply: FastifyReply
  ) {
    const newCustomer = await new CustomerServices().CreateCustomer(req.body);
    reply.send(newCustomer);
  }

  async GetCustomers(req: FastifyRequest, reply: FastifyReply) {
    reply.send(await new CustomerServices().GetCustomers());
  }
}
