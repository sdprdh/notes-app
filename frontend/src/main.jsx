import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ChakraProvider} from "@chakra-ui/react";
import {NoteContextProvider} from "@/context/NoteContext.jsx";
import {AuthContextProvider} from "@/context/AuthContext.jsx";
import {NoteFormProvider} from "@/context/NoteFormContext.jsx";
import system from "@/theme/theme.js";
import App from "../App.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ChakraProvider value={system}>
            <AuthContextProvider>
                <NoteContextProvider>
                    <NoteFormProvider>
                        <App/>
                    </NoteFormProvider>
                </NoteContextProvider>
            </AuthContextProvider>
        </ChakraProvider>
    </StrictMode>,
)
