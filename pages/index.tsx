import Page from 'components/Page'

const sidebarItems = [
  { href: "/memo", title: "memo" },
  { href: "/labo", title: "labo" },
  { href: "/archive", title: "archive" }
]

export default function Index(props: any) {
  return (
    <Page sidebarItems={sidebarItems} {...props}>
    </Page>
  )
}
