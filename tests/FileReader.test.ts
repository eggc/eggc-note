import FileReader from '../lib/FileReader'

test('FileReader.tree', () => {
  const fileReader: FileReader = new FileReader()
  expect(fileReader.tree()).toBeTruthy
})
