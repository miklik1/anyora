import React from "react";

export function ServiceDescription({ service }: any) {
  const detail = service.detail;
  
  if (!detail) return null;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-center text-2xl my-12 font-semibold md:text-5xl">
        {detail.name}
      </h1>
      <div className="mb-8">
        {detail.intro.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">CO ONLINE KOUČINK OBSAHUJE?</h2>
        <ul className="list-disc ml-6">
          {detail.content.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          PRO KOHO JE KONZULTACE VHODNÁ?
        </h2>
        <ul className="list-disc ml-6">
          {detail.target_audience.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">CENA</h2>
        <p className="text-2xl font-bold mb-4">{detail.price} Kč</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">BALÍČEK OBSAHUJE</h2>
        <ul className="list-disc ml-6">
          {detail.package_bullets.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
