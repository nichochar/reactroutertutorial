import type { Contact } from '../contacts'
import { updateContact } from '../contacts'
import { Form, useLoaderData, redirect, useNavigate } from 'react-router-dom'

// eslint-disable-next-line
export async function action({ request, params }) {
    const formData = await request.formData()
    const updates = Object.fromEntries(formData)
    await updateContact(params.contactId, updates)
    return redirect(`/contacts/${params.contactId}`)
}

export default function EditContact() {
    const { contact } = useLoaderData() as { contact: Contact }
    const navigate = useNavigate()
    return (
        <Form method="post" id="contact-form">
            <p>
                <span>Name</span>
                <input
                    placeholder="First"
                    aria-label="First name"
                    type="text"
                    name="first"
                    defaultValue={contact?.first}
                />
                <input
                    placeholder="Last"
                    aria-label="Last name"
                    type="text"
                    name="last"
                    defaultValue={contact?.last}
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    type="text"
                    name="twitter"
                    placeholder="@handle"
                    defaultValue={contact?.twitter}
                />
            </label>
            <label>
                <span>Avatar url</span>
                <input
                    type="text"
                    name="avatar"
                    aria-label="Avatar URL"
                    defaultValue={contact?.avatar}
                    placeholder="https://example.com/avatar.jpg"
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                    name="notes"
                    defaultValue={contact?.notes}
                    rows={6}
                    placeholder="Write some notes about this contact"
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button
                    type="button"
                    onClick={() => {
                        navigate(-1)
                    }}
                >
                    {' '}
                    Cancel
                </button>
            </p>
        </Form>
    )
}
