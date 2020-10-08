import React              from 'react'
import { Column, Layout } from '@atlantis-lab/layout'

import { Automatization } from '@sections/automatization'
import { Bullets }        from '@sections/bullets'
import { Header }         from '@sections/header'
import { Hero }           from '@sections/hero'

export const App = () => (
  <Layout maxWidth={1440} width='100%' mx='auto'>
    <Column>
      <Header />
      <Hero />
      <Automatization />
      <Bullets />
    </Column>
  </Layout>
)
