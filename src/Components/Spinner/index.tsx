import { FadeLoader } from "react-spinners";
import styles from "./Spinner.module.scss";

export function Spinner() {
  return (
    <div className={styles.container}>
      <FadeLoader color="#d8b6b6" height={15} margin={2} radius={2} speedMultiplier={2} width={3} />
    </div>
  );
}
