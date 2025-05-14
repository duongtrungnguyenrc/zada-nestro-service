import { createNestroServer } from "@duongtrungnguyen/nestro";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await createNestroServer(AppModule, {
    enableRegistryDashboard: true,
  });

  await app.listen(4444);
}
bootstrap();
