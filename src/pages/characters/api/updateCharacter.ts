import { type Character } from "../../../types/character";

export default async function updateCharacter(character: Character): Promise<void> {
  await fetch(`http://localhost:3000/results/${character.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Cache: 'no-cache',
    },
    body: JSON.stringify(character),
  })
}