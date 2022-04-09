import Header from './Header'
import Main from './Main'

export default function Page(props: any) {
  return (
    <>
      <Header title={props.appTitle}></Header>
      <Main children={props.children}></Main>
    </>
  )
}
