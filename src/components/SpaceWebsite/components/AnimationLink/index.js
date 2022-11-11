import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

// react router component can be wrapped and turn into a motion component
const ForwardedLink = forwardRef((props, ref) => <Link ref={ref} {...props} />);
const MotionLink = motion(ForwardedLink);

export default MotionLink;
