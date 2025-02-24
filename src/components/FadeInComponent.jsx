import { motion } from "framer-motion";
import PropTypes from "prop-types";


const FadeInSection = ({children, delay = 0}) => {
return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay}}
    viewport={{ once: false }}
    >
    {children}
    </motion.div>
);
};

FadeInSection.propTypes = {
    children: PropTypes.node.isRequired,
    delay: PropTypes.number,
};

export default FadeInSection;