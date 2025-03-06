import { Input } from '@chakra-ui/react';
import { InputGroup } from './input-group';

const InputWithIcon = ({
   type = 'text',
   name,
   placeholder,
   startElement,
   ...props
}) => {
   return (
      <InputGroup
         flex='1'
         startElement={startElement}
      >
         <Input
            type={type}
            name={name}
            placeholder={placeholder}
            {...props}
         />
      </InputGroup>
   );
};

export default InputWithIcon;
