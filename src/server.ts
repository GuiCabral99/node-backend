import Fastify from "fastify";
import { AppointmentRoute } from "./routes/AppointmentRoutes";
import { CustomerRoute } from "./routes/CustomersRoutes";

const fastify = Fastify({ logger: true });

fastify.register(AppointmentRoute);

fastify.register(CustomerRoute);

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log("✅ Servidor conetado na porta 3000");
});
