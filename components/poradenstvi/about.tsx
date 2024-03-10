import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Image from "next/image";

const values = [
  {
    name: "Empatie",
    description:
      "Prošla jsem si změnou životního stylu, a tak přesně vím, jak se cítíte. Není nic, co by mě donutilo vás soudit.",
  },
  {
    name: "Zdraví je prioritou",
    description:
      "Prioritou je vaše zdraví, a to jak fyzické, tak duševní. Prosazuji filozofii kvality před kvantitou, nejen ve stravování, ale i v celém životě.",
  },
  {
    name: "Udržitelnost",
    description:
      "Chci být posledním nutričním terapeutem, kterého kdy budete potřebovat. Nevěřím v extrémy, ale v trvalou změnu.",
  },
  {
    name: "Odbornost",
    description:
      "Vystudovala jsem bakalářský program na lékařské fakultě a pravidelně se účastním výživových konferencí a kurzů.",
  },
  {
    name: "Lidskost",
    description:
      "Společně budeme pracovat na dosažení vašich zdravotních cílů a trvalé změně k lepšímu a vyváženějšímu životnímu stylu.",
  },
  {
    name: "Individualita",
    description:
      "S mým odborným vedením a individuálním přístupem vám pomůžu pochopit význam stravy a jejího vlivu na vaše tělo.",
  },
];

export default function About() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      id="omne"
      className="flex flex-col items-center justify-center mt-10 lg:mt-20"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-center text-3xl font-semibold md:text-5xl">
          O mně
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="container mx-auto px-6 py-8 lg:-mx-6 lg:flex lg:items-center"
      >
        <div className="lg:mx-0 lg:mt-0 lg:flex lg:w-1/2 lg:flex-col lg:items-center">
          <span className="text-lg font-bold md:text-xl">KDO JSEM</span>
          <div className="mt-2 space-y-8 md:mt-4">
            <p>
              Mé jméno je Aneta Bartková a momentálně studuji magisterský obor
              výživy člověka na Mendelově univerzitě v Brně.
            </p>
            <p>
              Nenabízím vám zázračné čaje na hubnutí. Místo toho věřím v metodu
              Evidence-based medicine (medicína založená na důkazech) a
              přesvědčení, že prevence je vždycky tou nejlepší cestou.
            </p>
          </div>
          <div className="divider"></div>
          <span className="text-lg font-bold md:text-xl">MOJE FILOZOFIE</span>
          <div className="mt-2 space-y-8 md:mt-4">
            <p>
              Nechci, aby vás na začátku odradilo to, co odradilo na začátku mě
              - přehnaná odbornost a protichůdné informace. Jsem zastáncem
              zjednodušování, ačkoliv ve výživě záleží především na kontextu. I
              když je mnoho témat výživy komplexních, nejsou všechny tak
              složité, jak by se na první pohled mohlo zdát.
            </p>
            <p>
              Vztah k jídlu odráží váš vztah k sobě samým. Ráda bych vám pomohla
              objevit radost a užitek z jídla, a to v prostředí bez zbytečné
              komplikovanosti a srozumitelným přístupem ke stravování.
            </p>
          </div>
        </div>
        <div className="card mt-8 lg:mx-6 lg:w-1/2">
          <div className="card-body mx-auto w-full overflow-hidden rounded-lg px-8 py-10 shadow-xl outline outline-base-content/5 lg:max-w-xl">
            <Image
              src="/services/online-koucink.jpg"
              width={1152}
              height={768}
              alt=""
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        {values.map((item, index) => (
          <div key={index} className="card w-80 bg-secondary text-slate-100 shadow lg:w-96">
            <figure className="px-4 pt-4">
              <Image
                src="icons/empathy.svg"
                width={50}
                height={50}
                alt="Shoes"
                className="h-32 w-32"
              />
            </figure>
            <div className="card-body items-center text-center pt-0 p-4">
              <h2 className="card-title ">{item.name}</h2>
              <p className="">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
