import XMarkIcon from "../../icons/XMarkIcon";
import styles from "./style.module.css";

function NavDialog({ mobileMenuOpen, setMobileMenuOpen, setView, navigation }) {
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
            onClick={() => setView("home")}
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
                    setView(item.viewName);
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
