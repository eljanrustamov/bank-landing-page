import { bill, apple, google } from "../assets";
import styles, {layout} from "../style";

const Billing = () => {

  return (
    <section id="product" className={`${layout.sectionReverse} relative`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
      </div>

      <div className="absolute top-0 -left-1/2 h-[50%] w-[50%] rounded-full z-[3] white__gradient" />
      <div className="absolute bottom-0 -left-1/2 h-[50%] w-[50%] rounded-full z-[0] pink__gradient" />

      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>Easily control your <br className="sm:block hidden"/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
          <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
        </div>

      </div>
    </section>
  );
};

export default Billing;
