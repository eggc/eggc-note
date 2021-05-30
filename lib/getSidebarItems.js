import OrgReader from './OrgReader'


export default async function getSidebarItems(keys) {
  const orgReader = new OrgReader()

  let posts = orgReader.getPosts()

  // とりあえず１階層だけ対応してみる
  if(keys) {
    const id = keys.shift()
    posts = posts.concat(orgReader.getPosts(id))
  }

  posts = posts.sort((a, b) => a.title > b.title ? 1 : -1)

  // plain object でなければならないので強制的に作り変える
  return JSON.parse(JSON.stringify(posts))

}
