let data = []
document.querySelector('#get-data').addEventListener('click', () => {
  fetch("https://dummyapi.io/data/v1/user", {
    method: "GET",
    headers: {
      'Content-type': 'application/json',
      'app-id': '6373974392ea308edb55b204'
    }
  })
  .then(response => response.json())
  .then(json => data = json)
  .catch(err => alert('Error =>', err))

  const grid = document.querySelector('.grid')
  if(data?.data) {
    for(const item of data.data) {
      // Create needed elements
      const gridItem = document.createElement('div')
      const imgDiv = document.createElement('div')
      const img = document.createElement('img')
      const descriptionDiv = document.createElement('description')
      const title = document.createElement('p')
  
      // Append classes to elements
      gridItem.classList.add('grid-item')
      imgDiv.classList.add('img-div')
      descriptionDiv.classList.add('description')
      title.classList.add('title')
      
      // Populate with data
      const nameTitle = `${item.title.charAt(0).toUpperCase()}${item.title.substring(1)}`
      const name = `${nameTitle}. ${item.firstName} ${item.lastName}`
      const imgUrl = item.picture
      title.innerText = name
      img.src = imgUrl
      
      // Append elements to right nodes
      descriptionDiv.append(title)
      imgDiv.append(img)
      gridItem.append(imgDiv)
      gridItem.append(descriptionDiv)
      grid.append(gridItem)
  
    }
    document.querySelector('#get-data').style.display = 'none';
  }
})


// {
//   firstName
// : 
// "Sara"
// id
// : 
// "60d0fe4f5311236168a109ca"
// lastName
// : 
// "Andersen"
// picture
// : 
// "https://randomuser.me/api/portraits/women/58.jpg"
// title
// : 
// "ms"
// }