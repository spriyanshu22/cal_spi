import { useState } from 'react'
import { createContext } from 'react'

export const SpiContext = createContext(null)
const SpiProvider = ({ children }) => {
  const [spi, setSpi] = useState([])
  const [sem1Spi, setSem1Spi] = useState(0)

  //   function handleAddNewSpi(items) {
  //     const updateSpi = [
  //       ...spi,

  //       {
  //         branch: items.branch,
  //         sem: items.sem,
  //       },
  //     ]
  //     // update the state to the updated
  //     setSpi(updateSpi)
  //   }

  const spiContextValue = {
    spi,
    setSpi,
    sem1Spi,
    setSem1Spi,
  }
  return (
    <>
      <SpiContext.Provider value={spiContextValue}>{children}</SpiContext.Provider>
    </>
  )
}

export default SpiProvider
