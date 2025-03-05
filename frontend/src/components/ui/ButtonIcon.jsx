import { IconButton } from '@chakra-ui/react';

const ButtonIcon = ({ onClick, icon, ...props }) => {
   return (
      <IconButton
         unstyled
         cursor='pointer'
         onClick={onClick}
         {...props}
      >
         {icon}
      </IconButton>
   );
};

export default ButtonIcon;
