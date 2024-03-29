import anime from "animejs";
import React, { RefObject } from "react";
import Page, {PageProps} from "components/Page";

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
      <Page {...this.props as PageProps}>
        <h1 className="page-title">anime.js</h1>
        <div ref={this.myRef}></div>
        <button onClick={this.startAnimation.bind(this)}>
          アニメーション開始
        </button>
      </Page>
    );
  }
}
