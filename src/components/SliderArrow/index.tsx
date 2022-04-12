import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SliderArrow = (props: any) => {
  return (
    <FontAwesomeIcon
      icon={props?.icon}
      size="lg"
      className={props?.className}
      onClick={props?.onClick}
    />
  );
};
export default SliderArrow;
