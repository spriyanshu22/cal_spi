import { useRouter } from 'next/router'
import React from 'react'
import { ButtonComp } from '../Home/styled'
import { Wrapper } from '../Sem1/styled'

const index = () => {
  const router = useRouter()
  const { branch } = router.query

  const handleElc = () => {
    router.push(`${branch}/elc`)
  }
  const handleEsc = () => {
    router.push(`${branch}/esc`)
  }

  return (
    <Wrapper>
      <ButtonComp onClick={handleElc}>ELC</ButtonComp>
      <ButtonComp onClick={handleEsc}>ESC</ButtonComp>
    </Wrapper>
  )
}

export default index
