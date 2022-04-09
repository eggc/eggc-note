import Page from 'components/Page'

const sidebarItems = [
  { href: "/labo/anime_js", title: "anime.js" },
  { href: "/labo/tweets", title: "twitter-api" },
  { href: "/labo/tweets/archives", title: "twitter-archives" }
]

export default function Index(props: any) {
  return (
    <Page sidebarItems={sidebarItems} {...props}>
    </Page>
  )
}
