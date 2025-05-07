import { useActionState } from "react";
import { Button, Alert } from "@mui/material";
import { z } from "zod";

const reservationSchema = z.object({
  firstName: z.string().min(1, "Prénom requis"),
  lastName: z.string().min(1, "Nom requis"),
  phone: z.string().min(1, "Numéro requis"),
  email: z.string().email("Email invalide"),
});

export default function Reservation() {
  const [formState, formAction] = useActionState(handleReservation, undefined);

  async function handleReservation(_prevState: unknown, formData: FormData) {
    const data = {
      firstName: formData.get("firstName")?.toString() ?? "",
      lastName: formData.get("lastName")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
    };

    const result = reservationSchema.safeParse(data);

    if (!result.success) {
      const errors = result.error.format();
      return {
        success: false,
        message: Object.values(errors)
          .map((e) => ("_errors" in e ? e._errors?.[0] : undefined))
          .filter(Boolean)
          .join(" | "),
      };
    } else {
      return {
        success: true,
        message: "Votre réservation a bien été pris en compte",
      };
    }
  }

  return (
    <section
      id="reservation"
      className="w-full flex mx-0 my-10 lg:my-20 px-10 lg:px-0 gap-5 lg:gap-0 py-20 flex-wrap bg-[#F3F0EA] min-h-[500px] align-middle"
    >
      <div className="box-border flex-1/2 flex flex-col align-middle lg:p-20 gap-6">
        <h2 className="text-center lg:text-left">Réservez votre table !</h2>
        <p>
          Réservez dès maintenant votre table pour une expérience caféinée
          inoubliable en compagnie de nos adorables chats. Plongez dans
          l'ambiance apaisante de Café Chatouille et laissez-vous séduire par
          nos délices caféinés et nos compagnons félins. Réservez dès
          aujourd'hui et préparez-vous à vivre un moment magique de détente et
          de plaisir.
        </p>
      </div>
      <form action={formAction}>
        <div className="flex-1/2 flex flex-col align-middle justify-center pl-0 pr-20 gap-6">
          <div className="flex gap-6 flex-wrap">
            <div className="flex-1/2 flex flex-col gap-5">
              <input
                className="text-base border-b-2 py-4"
                type="text"
                placeholder="Nom*"
                name="lastName"
              />
              <input
                className="text-base border-b-2 py-4"
                type="text"
                placeholder="N° de téléphone*"
                name="phone"
              />
            </div>
            <div className="flex-1/2 flex flex-col gap-5">
              <input
                className="text-base border-b-2 py-4"
                type="text"
                placeholder="Prénom*"
                name="firstName"
              />
              <input
                className="text-base border-b-2 py-4"
                type="email"
                placeholder="Adresse email*"
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-end">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  borderRadius: "46px",
                  backgroundColor: "#71A894",
                  padding: "20px 24px",
                  width: "fit-content",
                }}
              >
                Réserver
              </Button>
            </div>
            {formState?.message && (
              <Alert severity={formState.success ? "success" : "error"}>
                {formState.message}
              </Alert>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}
