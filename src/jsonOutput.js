const sampleData = {
  '12345': {
    'owner': 'GFqSBEJfp1gyrrPVr9lp8fOANog1'
  },
  'Hwa Chong Institution': {
    'owner': '7P88Y1KrgkYaOq4Yf0y8cdzaifj2',
    'students': {
      'student-1490945732440': {
        'age': '18',
        'contact': '91234567',
        'diet': '-',
        'name': 'Wonyk'
      },
      'student-1490945732468': {
        'age': '18',
        'contact': '92345678',
        'diet': '-',
        'name': 'Ruida'
      }
    }
  },
  'RI': {
    'owner': '7P88Y1KrgkYaOq4Yf0y8cdzaifj2',
    'students': {
      'student-1490946753185': {
        'age': [ 'Age 1' ],
        'contact': [ 'Num 1' ],
        'diet': [ '-' ],
        'name': [ 'Name 1' ]
      }
    }
  }
}

const schools = Object.keys(sampleData)
const output = []

for (let sch of schools) {
  const students = sampleData[sch].students
  for (let student in students) {
    const name = String(students[student].name)
    const age = String(students[student].age)
    const diet = String(students[student].diet)
    const contact = String(students[student].contact)
    output.push({
      name, age, diet, contact, school: sch
    })
  }
}

const JSONdata = JSON.stringify(output)

// Confirmed to work with json-csv.com
