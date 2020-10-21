import React              from 'react'
import { Column }         from '@atlantis-lab/layout'

import { Automatization } from '@sections/automatization'
import { Bullets }        from '@sections/bullets'
import { Header }         from '@sections/header'
import { Hero }           from '@sections/hero'

export const App = () => (
  <Column>
    <Header />
    <Hero />
    <Automatization />
    <Bullets />
  </Column>
)
