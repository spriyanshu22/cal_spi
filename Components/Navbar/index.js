import Link from 'next/link'
import React from 'react'
import { RouteLink, Wrapper } from './styled'

const index = () => {
  return (
    <Wrapper>
      <Link href="/">
        <RouteLink>Home</RouteLink>
      </Link>
    </Wrapper>
  )
}

export default index
