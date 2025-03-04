import { createSystem, defaultConfig } from '@chakra-ui/react';

import '@fontsource/lexend';

const system = createSystem(defaultConfig, {
   theme: {
      tokens: {
         fonts: {
            heading: { value: "'Lexend', sans-serif" },
            body: { value: "'Lexend', sans-serif" },
         },
      },
   },
});

export default system;
