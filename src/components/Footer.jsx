import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10" id="footer">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved. • © Ballers
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
      <p className="text-xs text-gray-500 container flex justify-between items-center gap-5 mt-3">
        <span className="h-1 w-1/2  bg-[#AC6AFF]" />
        14/4, J Block , 3rd Avenue, Anna Nagar East, Chennai, Tamil Nadu, 600102
      </p>
    </Section>
  );
};

export default Footer;
