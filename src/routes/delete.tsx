import { deleteContact } from '../contacts'
import { redirect } from 'react-router-dom'

// eslint-disable-next-line
export async function action({ params }) {
    const contactId = params.contactId
    await deleteContact(contactId)
    return redirect('/')
}
