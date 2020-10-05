import React              from 'react'
import { Column, Layout } from '@atlantis-lab/layout'

import { Automatization } from '@sections/automatization'
import { Header }         from '@sections/header'
import { Hero }           from '@sections/hero'
import { Pointers }       from '@sections/pointers'

export const App = () => (
  <Layout maxWidth={1440} width='100%' mx='auto'>
    <Column>
      <Header />
      <Hero />
      <Automatization />
      <Pointers />
    </Column>
  </Layout>
)
