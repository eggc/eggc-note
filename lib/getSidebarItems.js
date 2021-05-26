import OrgReader from './OrgReader'

export default async function getSidebarItems(id) {
  const orgReader = new OrgReader()

  let items = orgReader.getPosts()

  if(id) {
    items = items.concat(orgReader.getPosts(id))
  }

  return items.sort((a, b) => a.name > b.name ? 1 : -1)
}
