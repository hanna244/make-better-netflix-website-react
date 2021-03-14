import React, { createContext } from 'react'

export const AccordionContext = createContext()

export const AccordionProvider = ({ ...props }) => {
  return <AccordionContext.Provider {...props} />
}
