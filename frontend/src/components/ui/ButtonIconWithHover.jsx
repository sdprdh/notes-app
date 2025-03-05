import { styles } from '../../../public/statis';
import ButtonIcon from './ButtonIcon';

const ButtonIconWithHover = ({ icon, onClick, ...props }) => {
   return (
      <ButtonIcon
         p={2}
         icon={icon}
         onClick={onClick}
         rounded='full'
         transition={styles.transition}
         _hover={{ bg: styles.bg }}
         {...props}
      />
   );
};

export default ButtonIconWithHover;
