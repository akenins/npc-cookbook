import React from 'react'
import {
  physicalDescription,
  hairColor,
  fashionStyle,
  clothingColor,
  mannerisms,
  genders,
  pronouns,
} from '../data/npcData'

const Recipe = () => {
  const randomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }

  const gender = randomElement(genders)

  const npcs = [
    physicalDescription,
    hairColor,
    fashionStyle,
    clothingColor,
    mannerisms,
  ]

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <div>
      <p>
        {npcs.map((npc) => {
          const description = randomElement(npc)
          if (gender === 'male') {
            return description
              .replace('man/woman', pronouns.male.noun)
              .replace('he/she', pronouns.male.subject)
              .replace('He/she', capitalize(pronouns.male.subject))
              .replace('his/her', pronouns.male.possessive)
              .replace('His/her', capitalize(pronouns.male.possessive))
          } else {
            return description
              .replace('man/woman', pronouns.female.noun)
              .replace('he/she', pronouns.female.subject)
              .replace('He/she', capitalize(pronouns.female.subject))
              .replace('his/her', pronouns.female.possessive)
              .replace('His/her', capitalize(pronouns.female.possessive))
          }
        })}
      </p>
    </div>
  )
}

export default Recipe
