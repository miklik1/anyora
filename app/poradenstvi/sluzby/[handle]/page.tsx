import React from "react";
import { ServiceDescription } from "@/components/poradenstvi/sluzby/service-description";
import jsonData from "@/data/services.json";
import ContactFormService from "@/components/forms/form-contact-service";

export default function Page({ params }: { params: { handle: string } }) {
  const service = jsonData.find((service) => service.handle === params.handle);
  if (!service) return null;
  return (
    <>
      <ServiceDescription service={service} />
      <ContactFormService service={service} />
    </>
  );
}
