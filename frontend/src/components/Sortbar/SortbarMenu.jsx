import { useUIContext } from '@/hooks/context/useUIContext';
import { BsSortDown } from 'react-icons/bs';
import ButtonWithHover from '../ui/ButtonWithHover';
import { MenuContent, MenuRoot, MenuTrigger } from '../ui/menu';
import SortbarMenuItem from './SortbarMenuItem';

const menuItems = [
   {
      field: 'Judul',
      value: 'judul',
   },
   {
      field: 'Tanggal dibuat',
      value: 'tanggal-dibuat',
   },
   {
      field: 'Tanggal diubah',
      value: 'tanggal-diubah',
   },
];

const SortbartMenu = () => {
   const { stateSortNote, dispatchSortNote } = useUIContext();

   return (
      <MenuRoot>
         <MenuTrigger asChild>
            <ButtonWithHover
               minW={{ base: '6rem', md: '9rem' }}
               justifyContent='end'
               icon={<BsSortDown />}
               text={stateSortNote.field}
            />
         </MenuTrigger>
         <MenuContent rounded='lg'>
            {menuItems.map((menu, i) => (
               <SortbarMenuItem
                  key={i}
                  menu={menu}
                  field={stateSortNote.field}
                  onClick={() =>
                     dispatchSortNote({
                        type: 'SET_FIELD',
                        payload: menu.field,
                     })
                  }
               />
            ))}
         </MenuContent>
      </MenuRoot>
   );
};

export default SortbartMenu;
