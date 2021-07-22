import Select from 'react-select'
import { useRouter } from 'next/router'

export default function PageSelect({tree, currentPostId}) {
  const router = useRouter()

  const buildOptions = (node) => {
    let result = []

    if (node.path != '') {
      result.push({ value: node.path, label: node.path })
    }

    if (node.children) {
      node.children.forEach((child) => {
        result = result.concat(buildOptions(child))
      })
    }

    return result
  }

  const onChange = (item) => {
    if(item) {
      router.push(`/posts/${item.value}`)
    }
  }

  console.log(currentPostId)

  return (
    <Select options={buildOptions(tree)}
            onChange={onChange}
            isSearchable="true"
            isClearable="true"
            defaultValue={{ value: currentPostId, label: currentPostId }}
    />
  )
}
