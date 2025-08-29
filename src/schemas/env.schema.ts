import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const envSchema = createEnv({
  server: {
    NOTIFY_UPLOAD_VIDEO_URL_PATTERN: z
      .url()
      .refine((url) => url.includes("{videoId}")),
  },
  client: {},
  experimental__runtimeEnv: {},
});
