import { useDispatch } from "react-redux";
import XMarkIcon from "../../icons/XMarkIcon";
import styles from "./style.module.css";
import { changeView } from "../../../viewSlice";

function NavDialog({ mobileMenuOpen, setMobileMenuOpen, navigation }) {
  const dispatch = useDispatch();
  return (
    <dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className={styles.navDialogSmall}
    >
      <div className={styles.overlay} />
      <div className={styles.dialogPanel}>
        <div className={styles.dialogPanelHeader}>
          <button
            className={styles.logoBtnSmall}
            onClick={() => dispatch(changeView("home"))}
          >
            O&A
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className={styles.xmarkIconBtn}
          >
            <XMarkIcon className={styles.xmarkIconSvg} />
          </button>
        </div>

        <div className={styles.menuOuterWrapper}>
          <div className={styles.menuInnerWrapper}>
            <div className={styles.menu}>
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    dispatch(changeView(item.viewName));
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default NavDialog;
