import React              from 'react'
import { Column }         from '@atlantis-lab/layout'

import { Automatization } from '@sections/automatization'
import { Header }         from '@sections/header'
import { Hero }           from '@sections/hero'

export const App = () => (
  <Column>
    <Header />
    <Hero />
    <Automatization />
  </Column>
)
