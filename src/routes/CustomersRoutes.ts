import { FastifyInstance } from "fastify";
import { CustomerController } from "../controllers/CustomerControllers";

const customerController = new CustomerController();

export async function CustomerRoute(fastify: FastifyInstance) {
  fastify.post("/customer", customerController.CreateCustomer);
  fastify.get("/customer", customerController.GetCustomers);
}
