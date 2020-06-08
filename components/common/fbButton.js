import { Button } from "@chakra-ui/core";
import { defaultProps } from "../../utils/defaultBtnProps";
import PropTypes from "prop-types";

const FBButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

FBButton.defaultProps = { ...defaultProps };

FBButton.PropTypes = {
  onClick: PropTypes.func,
};

export default FBButton;
