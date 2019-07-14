
const positions = ['designer', 'driver', 'architect', 'programmer', 'shop assistant', 'cleaner', 'teacher']

export const prepareEmployeesData = employeesData => {
  return employeesData.map((e, index) => ({
    id: index,
    name: e.name.first,
    surname: e.name.last,
    address: `${e.location.street}, ${e.location.state}, ${e.location.city}`,
    position: positions[Math.floor(Math.random() * (positions.length))],
    picture: e.picture
  }));
}