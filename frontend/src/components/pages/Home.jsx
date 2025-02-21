import {Grid} from "@chakra-ui/react";
import NoteCard from "@/components/organisms/NoteCard.jsx";
import SectionTemplate from "@/components/templates/SectionTemplate.jsx";
import NoteForm from "@/components/organisms/NoteForm.jsx";
import {useNoteContext} from "@/hooks/useNoteContext.js";
import ModalTemplate from "@/components/templates/ModalTemplate.jsx";
import NoteDeleted from "@/components/organisms/NoteDeleted.jsx";
import {useNoteFormContext} from "@/hooks/useNoteFormContext.js";

const Home = () => {
    const {data} = useNoteContext();
    const {type} = useNoteFormContext();

    return (
        <SectionTemplate>
            <Grid
                as='ul'
                templateColumns='repeat(3, 1fr)'
                gap={4}
            >
                {
                    data?.map((note, i) => (
                        <NoteCard key={i} note={note}/>
                    ))
                }
            </Grid>

            <ModalTemplate>
                {
                    type === 'delete'
                        ? <NoteDeleted/>
                        : <NoteForm/>
                }
            </ModalTemplate>
        </SectionTemplate>
    );
};

export default Home;