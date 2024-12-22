import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">Rare access</h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img
              src={logo}
              width={134}
              height={28}
              alt={logo}
              className="bg-white w-20 h-20 rounded-2xl "
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
