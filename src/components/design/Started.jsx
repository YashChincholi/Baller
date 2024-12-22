import styles, { layout } from "../../style";

const Started = () => (
  <section className={layout.section}>
    <div className={layout.sectionImg}>
      <img
        src="/hiw3.png"
        alt="hiw3"
        className="w-[100%] h-[100%] rounded-3xl"
      />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Get started</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Invest in sports assets, build a portfolio, access exclusive events,
        network with billionaires, and be part of a lifestyle that brings
        compounding returns to both your quality of life and wealth.
      </p>
    </div>
  </section>
);

export default Started;
