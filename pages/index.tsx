import Header from 'components/Nav/Header'
import TopImage from 'components/TopImage'

export default function Index(props: any) {
  return (
    <>
      <Header title={props.appTitle}></Header>
      <TopImage></TopImage>
    </>
  )
}
