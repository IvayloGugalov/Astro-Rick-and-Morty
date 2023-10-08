import type { Character as CharacterType } from "../../types/character"
import { Image } from "astro:assets";
import FormattedDate from "../FormattedDate.astro";

const Character = (character: CharacterType) => {
  let {
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    url,
    created
  } = character;

  //@ts-ignore
  const onInput = event => (status = event.target.value);

  return (
<></>
  )
}

export default Character