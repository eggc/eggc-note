import Page from 'components/Page'

const sidebarItems = [
  { href: "/archive/4th", title: "4th" },
  { href: "/archive/3rd", title: "3rd" },
]

export default function Index(props: any) {
  return (
    <Page sidebarItems={sidebarItems} {...props}>
    </Page>
  )
}
