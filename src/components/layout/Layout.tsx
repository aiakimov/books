import Header from './header/Header'
import Container from './container/Container'
import Footer from './footer/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer/>
    </>
  )
}

export default Layout
