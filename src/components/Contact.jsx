import { redes } from "../data/redes";

export default function Contact() {
  return (
    <section className="mt-4 flex flex-col items-center gap-8 py-52">
      <div className="bg_gradient w-full p-12 py-6 text-3xl font-bold [text-shadow:_0_0px_2px_rgb(0_0_0_/_20%)]">
        ¡Hablemos sobre tu proyecto!
      </div>
      <nav className="flex items-center gap-6">
        {redes.map((red) => {
          return (
            <a
              className="group flex items-center gap-2 text-xl text-inherit transition-transform hover:scale-105"
              key={red.name}
              href={red.url.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>{red.icon}</span> {red.name}
            </a>
          );
        })}
      </nav>
    </section>
  );
}
