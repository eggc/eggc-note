import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import { Twitter, Github } from 'react-bootstrap-icons'

export default function TopPage() {
  return <Container fluid className="top-sign-container">
    <div className="top-sign-container-2">
      <div className="top-sign-board"></div>
      <div className="top-sign-name-container">
        <div className="top-sign-name">eggc (Eguchi Ken)</div>
        <div className="text-info">software engineer</div>
        <div className="top-sign-sns"><a href="https://twitter.com/eggc0"><Twitter></Twitter><span>eggc0</span></a></div>
        <div className="top-sign-sns"><a href="https://github.com/eggc"><Github></Github><span>eggc</span></a></div>
      </div>
    </div>
  </Container>

}
