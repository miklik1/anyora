"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { NewsletterFormSchema } from "@/lib/schema";
import { addContact } from "@/app/_actions";
import { toast } from "sonner";

export type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>;

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormInputs>({
    resolver: zodResolver(NewsletterFormSchema),
  });

  const processForm: SubmitHandler<NewsletterFormInputs> = async (data) => {
    const result = await addContact(data);

    if (result?.success) {
      toast.success("Přihlášení k odběru bylo úspěšné!");
      reset();
      return;
    }

    console.log(result);

    toast.error("Něco se pokazilo!");
  };

  return (
    <form onSubmit={handleSubmit(processForm)}>
      <h6 className="footer-title">Newsletter</h6>
      <fieldset className="form-control w-42 ">
        <div className="join">
          <input
            type="text"
            placeholder="abcd@email.cz"
            className="input input-bordered join-item bg-white text-primary"
            {...register("email")}
          />
          <button
            disabled={isSubmitting}
            className="btn bg-base-100 hover:bg-primary hover:text-white hover:border-primary join-item"
          >
            Přihlásit se
          </button>
        </div>
        <label className="label">
          {errors.email?.message && (
            <p className="ml-1 mt-1 text-sm text-white">
              {errors.email.message}
            </p>
          )}
        </label>
      </fieldset>
    </form>
  );
}
