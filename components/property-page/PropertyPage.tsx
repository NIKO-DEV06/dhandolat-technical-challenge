import Connect from "./Connect";
import Media from "./Media";
import PropertyHero from "./PropertyHero";

const PropertyPage = () => {
  return (
    <section className="overflow-x-hidden">
      <PropertyHero />
      <Media />
      <Connect />
    </section>
  );
};

export default PropertyPage;
