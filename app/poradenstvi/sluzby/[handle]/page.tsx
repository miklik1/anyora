import React from "react";
import { ServiceDescription } from "@/components/poradenstvi/sluzby/service-description";
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