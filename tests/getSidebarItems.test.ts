import getSidebarItems from '../lib/getSidebarItems'

test('getSidebarItems', () => {
  expect(getSidebarItems()).toBeTruthy
  expect(getSidebarItems(['anything'])).toBeTruthy
})
