"use server";

import { env } from "@/schemas/env.schema";
import { notifyUploadVideoFormSchema } from "@/schemas/notify-upload-video-form.schema";

export const notifyUploadFastevoActions = async (
  data: unknown
): Promise<void> => {
  const { videoId, token } = await notifyUploadVideoFormSchema.parseAsync(data);
  const url = new URL(
    env.NOTIFY_UPLOAD_VIDEO_URL_PATTERN.replace("{videoId}", videoId.toString())
  );

  url.searchParams.append("token", token);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Error notifying upload");
  }

  const textResponse = await res.text();

  if (textResponse !== "OK") {
    throw new Error("Error notifying upload");
  }
};
