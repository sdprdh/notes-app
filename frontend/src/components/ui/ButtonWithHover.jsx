import { Button } from '@chakra-ui/react';
import { styles } from '../../../public/statis';

const ButtonWithHover = ({
   icon,
   text,
   onClick,
   justifyContent = 'center',
   ...props
}) => {
   return (
      <Button
         unstyled
         display='flex'
         alignItems='center'
         justifyContent={justifyContent}
         gapX={1}
         py={1}
         px={2}
         cursor='pointer'
         outline='none'
         border='none'
         fontSize={{ base: 'xs', md: 'sm' }}
         color='gray.500'
         rounded='full'
         transition={styles.transition}
         _hover={{ bg: styles.bg }}
         onClick={onClick}
         {...props}
      >
         {icon}
         {text}
      </Button>
   );
};

export default ButtonWithHover;
