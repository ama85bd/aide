import React from 'react';
import { useState } from 'react';
import { Alert, UncontrolledAlertProps } from 'reactstrap';

interface CustomizedAlertProps extends UncontrolledAlertProps {
  onDismissCallback?: () => void;
}
//customized version of UncontrolledAlert with support callback when dismiss
const CustomizedAlert = ({
  onDismissCallback,
  ...props
}: CustomizedAlertProps) => {
  const [isOpen, setOpen] = useState(true);
  const toggle = () => {
    setOpen(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onDismissCallback;
  };
  return <Alert isOpen={isOpen} toggle={toggle} {...props} />;
};
CustomizedAlert.defaultProps = {
  onDismissCallback: () => {},
};
export default CustomizedAlert;
