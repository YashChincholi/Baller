import styles, { layout } from "../../style";

const Approved = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Get approved</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We perform thorough background checks on anyone that gets invited and
        only extend exclusive, non-transferable memberships to those who meet
        our stringent criteria.
      </p>
    </div>
    <div className={layout.sectionImg}>
      <img
        src="/hiw2.svg"
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] rounded-3xl"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
);

export default Approved;
