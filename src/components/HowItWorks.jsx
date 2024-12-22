import styles from "../style";
import Invited from "./design/Invited";
import Approved from "./design/Approved";
import Started from "./design/Started";

function HowItWorks() {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} mt-20`} id="howitworks">
      <div className={`${styles.boxWidth}`}>
        <Invited />
        <Approved />
        <Started />
      </div>
    </div>
  );
}

export default HowItWorks;
