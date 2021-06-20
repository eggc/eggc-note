import Select from 'react-select'
import { useRouter } from 'next/router'

export default function PageSelect({posts}) {
  const router = useRouter()

  const buildOptions = (post) => {
    return { value: post.path, label: post.title }
  }

  const onChange = (item) => {
    if(item) {
      router.push(`/posts/${item.value}`)
    }
  }

  return (
    <Select options={posts.map(buildOptions)}
            onChange={onChange}
            isSearchable="true"
            isClearable="true"
    />
  )
}
