import React from "react";

export function ServiceDescription({ service }: any) {
  const detail = service.detail;
  
  if (!detail) return null;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-center text-2xl my-6 font-semibold md:text-5xl">
        {detail.name}
      </h1>
      <div className="mb-8">
        {detail.intro.map(
          (
            paragraph:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined,
            index: React.Key | null | undefined
          ) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          )
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">CO ONLINE KOUČINK OBSAHUJE?</h2>
        <ul className="list-disc ml-6">
          {detail.content.map(
            (
              item:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined,
              index: React.Key | null | undefined
            ) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          PRO KOHO JE KONZULTACE VHODNÁ?
        </h2>
        <ul className="list-disc ml-6">
          {detail.target_audience.map(
            (
              item:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined,
              index: React.Key | null | undefined
            ) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="card w-full bg-white shadow-xl my-12">
        <div className="card-body">
          <div className="w-full flex flex-col justify-center items-center">
            <p>{detail.name}</p>
          <h2 className="card-title text-5xl my-2">{detail.price} Kč</h2>

          </div>
          <div className="divider">BALÍČEK OBSAHUJE</div>
          <ul className="text-center">
            {detail.package_bullets.map(
              (
                item:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | React.PromiseLikeOfReactNode
                  | null
                  | undefined,
                index: React.Key | null | undefined
              ) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
