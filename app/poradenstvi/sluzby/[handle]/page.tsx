import React from "react";
import Services from "@/components/Services";
import { ServiceDescription } from "@/components/services/service-description";
import ContactForm from "@/components/contact-form";
import jsonData from "@/data/services.json";


export default function Page({ params }: { params: { handle: string } }) {
  const service = jsonData.find((service) => service.handle === params.handle);
  if (!service) return null;
  return (
    <>
      <ServiceDescription service={service} />
      <ContactForm />
    </>
  );
}
