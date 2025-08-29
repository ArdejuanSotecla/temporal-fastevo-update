import z from "zod";

export const notifyUploadVideoFormSchema = z.object({
  videoId: z.coerce
    .number<number>({ error: "Tiene que ser un número" })
    .positive({ error: "Tiene que ser un número positivo" })
    .int({ error: "Tiene que ser un número entero" }),
  token: z
    .string({ error: "Tiene que ser una cadena de texto" })
    .min(1, { error: "Tiene que tener al menos un carácter" }),
});

export type NotifyUploadVideoFormSchema = z.infer<
  typeof notifyUploadVideoFormSchema
>;
