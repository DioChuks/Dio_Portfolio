import { motion } from "framer-motion";
import { styles } from "../styles";

import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";

import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({
  index,
  name,
  testimonial,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="p-10 bg-black-200 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="font-black text-white text-[48px]">&ldquo;</p>
      <div className="mt-1">
        <p className="tracking-wider text-white text-[18px]">{testimonial}</p>
        <div className="flex items-center justify-between gap-1 mt-7">
          <div className="flex flex-col flex-1">
            <p className="font-medium text-white text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img src={image} alt={`feedback-by-${name}`} className="object-cover w-10 h-10 rounded-full"/>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-[20px] bg-black-100">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
