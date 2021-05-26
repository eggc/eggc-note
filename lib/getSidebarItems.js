import OrgReader from './OrgReader'

export default async function getSidebarItems(keys) {
  const orgReader = new OrgReader()

  let items = orgReader.getPosts()

  // とりあえず１階層だけ対応してみる
  if(keys) {
    const id = keys.shift()
    items = items.concat(orgReader.getPosts(id))
  }

  return items.sort((a, b) => a.name > b.name ? 1 : -1)
}
