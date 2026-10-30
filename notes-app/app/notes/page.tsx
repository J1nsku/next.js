import { getNotes } from '../services/notes'
import NoteList from './NoteList'

export const instant = false

const Notes = async ({
    searchParams,
}: {
    searchParams: Promise<{ important?: string }>
}) => {
    const { important } = await searchParams
    const ShowImportant = important === "true"

    const allNotes = getNotes()
    const notes = ShowImportant
        ? allNotes.filter((note) => note.important)
        : allNotes

    // const notes = getNotes()
    return (
        <div>
            <h2>Notes</h2>
            <NoteList notes={notes} showImportant={ShowImportant} />
        </div>
    )
}

export default Notes