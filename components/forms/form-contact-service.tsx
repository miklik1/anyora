"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ContactFormSchema } from "@/lib/schema";
import { sendEmail } from "@/app/_actions";
import { toast } from "sonner";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactFormService({ service }: any) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data, service.name);

    if (result?.success) {
      // console.log({ data: result.data });
      toast.success("E-mail úspěšně odeslán!");
      reset();
      return;
    }

    // toast error
    // console.log(result?.error);
    toast.error("Něco se pokazilo!");
  };

  return (
    <div className="w-full p-4">
      <div className="card my-8">
        <div className="card-body mx-auto w-full overflow-hidden rounded-lg  shadow-xl outline outline-base-content/5 lg:max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/2">
              <p>Kontaktní formulář pro</p>
              <h1 className="card-title text-4xl my-2">{service.name}</h1>
              <p className="mt-12">
                Po odeslání tohoto formuláře se vám ozvu na vámi uvedenou
                emailovou adresu.
              </p>
              <p className="mt-12">
                Dostanete přístup k vstupnímu formuláři a domluvíme se na
                termínu první schůzky.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(processForm)}
              className="w-full md:w-1/2"
            >
              <div className="flex-1">
                <label htmlFor="name" className="mb-2 block text-sm">
                  Celé jméno
                </label>
                <input
                  id="name"
                  autoComplete="name"
                  type="text"
                  placeholder="Vaše jméno"
                  className="input input-bordered w-full bg-white"
                  {...register("name")}
                />
                {errors.name?.message && (
                  <p className="ml-1 mt-1 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mt-6 flex-1">
                <label htmlFor="email" className="mb-2 block text-sm">
                  Emailová adresa
                </label>
                <input
                  id="email"
                  autoComplete="email"
                  type="email"
                  placeholder="abcd@email.cz"
                  className="input input-bordered w-full bg-white"
                  {...register("email")}
                />
                {errors.email?.message && (
                  <p className="ml-1 mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mt-6 w-full">
                <label htmlFor="message" className="mb-2 block text-sm">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  autoComplete="message"
                  className="textarea textarea-bordered w-full bg-white"
                  placeholder="Dobrý den, ráda bych.."
                  rows={5}
                  cols={5}
                  {...register("message")}
                />
                {errors.message?.message && (
                  <p className="ml-1 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                disabled={isSubmitting}
                className="btn bg-yellow-500 hover:bg-yellow-600 text-hunter-green-950 hover:text-white border-none p-1 duration-300 mt-6 w-full transform px-6 py-3 text-sm font-medium"
              >
                {isSubmitting ? "Odesílám..." : "Odeslat"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
