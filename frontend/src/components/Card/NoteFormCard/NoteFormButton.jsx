import ButtonIcon from '@/components/ui/ButtonIcon';
import { useAuthContext } from '@/hooks/context/useAuthContext';
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const NoteFormButton = () => {
   const navigate = useNavigate();
   const { data } = useAuthContext();

   const handleCLickButton = () => {
      if (!data) {
         navigate('/auth/login');
         return;
      }

      navigate('/tambah-catatan');
   };

   return (
      <ButtonIcon
         icon={<FiEdit />}
         p={4}
         bg='white'
         rounded='full'
         shadow='2xl'
         color='red.500'
         transition='all 0.3s'
         _hover={{ bg: 'gray.200' }}
         position='fixed'
         bottom={4}
         right={4}
         zIndex={999}
         fonSize='sm'
         onClick={handleCLickButton}
      />
   );
};

export default NoteFormButton;
