import { IconButton } from '@chakra-ui/react';

const ButtonIcon = ({ onClick, icon, ...props }) => {
   return (
      <IconButton
         unstyled
         cursor='pointer'
         display='flex'
         alignItems='center'
         justifyContent='center'
         onClick={onClick}
         {...props}
      >
         {icon}
      </IconButton>
   );
};

export default ButtonIcon;
