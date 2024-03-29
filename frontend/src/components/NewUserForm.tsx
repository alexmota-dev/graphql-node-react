import { gql, useMutation } from "@apollo/client"
import { FormEvent, useState } from "react"

const CREATE_USER = gql`
  mutation createUser($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;


export function NewUserForm() {
  const [name, setName] = useState('');
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  
  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    if(!name) {
      return;
    }

    await createUser({
      variables: {
          name
      }
    })

    console.log(data, loading, error);
  }

  return (
    <form onSubmit={handleCreateUser}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  )
}