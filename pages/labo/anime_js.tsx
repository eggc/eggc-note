import React, { RefObject } from "react";
import Page from "../../components/page";
import getSidebarItems from "../../lib/getSidebarItems";

export default class Index extends React.Component {
  private myRef: RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
  }

  startAnimation() {
    anime({
      targets: this.myRef.current,
      translateX: 250,
      height: 300,
      width: 300,
      rotate: "1turn",
      backgroundColor: "#000",
      duration: 1500,
    });
  }

  render() {
    return (
      <Page {...this.props}>
        <h1 className="page-title">anime.js</h1>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" />
        <div ref={this.myRef}></div>
        <button onClick={this.startAnimation.bind(this)}>
          アニメーション開始
        </button>
      </Page>
    );
  }
}

export async function getStaticProps() {
  const tree = await getSidebarItems();
  return { props: { tree } };
}
