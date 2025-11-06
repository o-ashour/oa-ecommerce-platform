import imgUrl0 from "../../assets/images/512px-Reza_Darmawangsa_with_blue_denim_jacket.jpg";
import imgUrl1 from "../../assets/images/Sourire tranquille dans le vert.png";
import imgUrl2 from "../../assets/images/Cashmere_Sweater.jpg";
import imgUrl3 from "../../assets/images/T-Shirt_Front.jpg";
import imgUrl4 from "../../assets/images/Witte_hoodie,_vest_met_capuchon,_merk_L.O.G.C._objectnr_86501(2).JPG";
import imgUrl5 from "../../assets/images/WTOS_Delft_cycling_jersey_(cropped).jpg";
import imgUrl6 from "../../assets/images/Pull en tricot crème et jeans.png";

import styles from "./style.module.css";

const imageGridImgs = [
  {
    imageSrc: imgUrl0,
    imageAlt: "Young man with blue denim jacket.",
  },
  {
    imageSrc: imgUrl1,
    imageAlt:
      "Young woman, eyes closed and smiling, with light green-coloured coat.",
  },
  {
    imageSrc: imgUrl2,
    imageAlt: "Young woman in grey cashmere sweater.",
  },
  {
    imageSrc: imgUrl3,
    imageAlt: "White t-shirt with graphic and Spirit logo.",
  },
  {
    imageSrc: imgUrl4,
    imageAlt: `Person's back profile in white hoodie.`,
  },
  {
    imageSrc: imgUrl5,
    imageAlt: `Person's front profile in blue cycling jersey.`,
  },
  {
    imageSrc: imgUrl6,
    imageAlt: `Young woman in woolen sweater and jeans.`,
  },
];

function ImageGrid() {
  return (
    <div className={styles.innerContainer}>
      <div className={styles.outerWrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.gridCol}>
            <div className={styles.firstImgContainer}>
              <img alt={imageGridImgs[0].imageAlt} src={imageGridImgs[0].imageSrc} />
            </div>
            <div className={styles.imgContainer}>
              <img alt={imageGridImgs[1].imageAlt} src={imageGridImgs[1].imageSrc} />
            </div>
          </div>
          <div className={styles.gridCol}>
            <div className={styles.imgContainer}>
              <img alt={imageGridImgs[2].imageAlt} src={imageGridImgs[2].imageSrc} />
            </div>
            <div className={styles.imgContainer}>
              <img alt={imageGridImgs[3].imageAlt} src={imageGridImgs[3].imageSrc} />
            </div>
            <div className={styles.imgContainer}>
              <img alt={imageGridImgs[4].imageAlt} src={imageGridImgs[4].imageSrc} />
            </div>
          </div>
          <div className={styles.gridCol}>
            <div className={styles.imgContainer}>
              <img alt={imageGridImgs[5].imageAlt} src={imageGridImgs[5].imageSrc} />
            </div>
            <div className={styles.imgContainer}>
              <img alt={imageGridImgs[6].imageAlt} src={imageGridImgs[6].imageSrc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
