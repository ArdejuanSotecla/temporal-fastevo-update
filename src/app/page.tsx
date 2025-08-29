import { NotifyToUploadVideoForm } from "@/components/notify-to-upload-video-form";

export default function Home() {
  return (
    <main className="min-h-screen w-xl mx-auto py-3 space-y-4">
      <h1 className="text-3xl font-bold">Subir archivos a Fastevo V2</h1>
      <p className="text-lg text-pretty">
        Esta página es temporal, hasta que saquemos la nueva versión de la
        intranet, aquí podrás subir los videos de Fastevo usando el
        identificador del vídeo.
      </p>
      <p className="text-lg text-pretty">
        El identificador del vídeo se encuentra en el formulario del vídeo.
      </p>
      <img
        src="/example-video-id.jpg"
        alt="Ejemplo de donde se encuentra el id"
      />
      <p>
        Por último, también es necesario un token. Este dato debes pedirlo al
        administrador
      </p>
      <NotifyToUploadVideoForm />
    </main>
  );
}
