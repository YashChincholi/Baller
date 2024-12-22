import styles, { layout } from "../../style.js";

const Invited = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src="/hiw1.svg"
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] rounded-3xl"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Get invited</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Ballers is an exclusive club limited to 1000 members—each representing
        the pinnacle of excellence. To join this esteemed group, you must be
        endorsed by a current member and apply for membership.{" "}
      </p>
    </div>
  </section>
);

export default Invited;
