"use client";

import { notifyUploadVideoFormSchema } from "@/schemas/notify-upload-video-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { notifyUploadFastevoActions } from "@/actions/notify-upload-fastevo.action";
import { toast } from "sonner";

export const NotifyToUploadVideoForm = () => {
  const form = useForm({
    resolver: zodResolver(notifyUploadVideoFormSchema),
    defaultValues: {
      videoId: 0,
      token: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      await notifyUploadFastevoActions(data);
      toast.success(
        "Video notificado con éxito. En unos minutos estará disponible en Fastevo"
      );
    } catch {
      toast.error("Hubo un error, comunícate con el desarrollador.");
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8" suppressHydrationWarning>
        <FormField
          control={form.control}
          name="videoId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Identificador del video</FormLabel>
              <FormControl>
                <Input {...field} suppressHydrationWarning />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input {...field} suppressHydrationWarning type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting || !form.formState.isValid}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
