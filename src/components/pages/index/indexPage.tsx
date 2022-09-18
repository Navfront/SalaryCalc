import React from 'react'
import Nav from '../../blocks/nav/Nav'
import Container from '../../layouts/container/Container'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
import Main from '../../layouts/main/Main'
import Logo from '../../ui/logo/Logo'
import Popup from '../../ui/popup/Popup'

function IndexPage (): JSX.Element {
  return (
    <React.Fragment>
      <Header>
        <Container>
          <Nav></Nav>
        </Container>
      </Header>
      <Main></Main>
      <Footer>
        <Logo size={2} />
        <p> Nazhiganov A.V. © {new Date().getFullYear()}</p>
      </Footer>
      <Popup />
    </React.Fragment>
  )
}

export default IndexPage
