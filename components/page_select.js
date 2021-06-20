import Select from 'react-select'
import { useRouter } from 'next/router'

export default function PageSelect({tree}) {
  const router = useRouter()

  const buildOptions = (node) => {
    let result = []

    if (node.path != '/') {
      result.push({ value: node.path, label: node.title })
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

  return (
    <Select options={buildOptions(tree)}
            onChange={onChange}
            isSearchable="true"
            isClearable="true"
    />
  )
}
