import { getNotes } from '../services/notes'
import NoteList from './NoteList'

const Notes = () => {
    const notes = getNotes()
    console.log('hello')
    return (
        <div>
            <h2>Notes</h2>
            <NoteList notes={notes} />
        </div>
    )
}

export default Notes