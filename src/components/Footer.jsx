import { Link } from "wouter";
import { redes } from "../data/redes";

function Footer({ showLinks = true }) {
  return (
    <>
      <footer className="relative w-full">
        <div className="footer__bg absolute inset-0 z-0 bg-slate-200 bg-bottom bg-no-repeat dark:bg-[#0b111d]"></div>
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 pb-8 pt-28 px-4 sm:flex-row sm:justify-start sm:gap-8 relative">
          <Link href="/" >
          <a className="text-lg text-inherit hover:text-[#8851ff] dark:hover:text-[#a67cff]">
            Nicolás Rodriguez
          </a>
          </Link>
          {showLinks && (
            <nav className="flex items-center gap-5">
              {redes.map((red) => {
                return (
                  <a
                    className="group flex items-center gap-2 text-inherit hover:font-bold hover:text-[#8851ff] dark:hover:text-[#a67cff]"
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
          )}
        </div>
      </footer>
    </>
  );
}
export default Footer;
