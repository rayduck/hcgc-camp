import base from './base'
export const getPlacesLeft = (thisContext) => {
  base.fetch('/', { context: thisContext })
  .then(data => {
    const maxStudents = 45
    let studentCount = 0
    for (let school of Object.keys(data)) {
      if (data[school].students) {
        studentCount += Object.keys(data[school].students).length
      }
    }
    thisContext.setState({placesLeft: maxStudents - studentCount })
  })
}
