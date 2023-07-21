import './App.css';
import Card from './Cards'
import React from 'react'
import Header from './Header'
export default function App() {

//states 
  const [allData, setAllData] = React.useState({})
  const [name, setName] = React.useState("React")
  const [count,setCount]=React.useState(0)


//fetch Api
  React.useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q="+name+"&download=epub&key=AIzaSyDMsiKpYZH3ZHz9hnWYAuUd1kLZPVsR7gY")
      .then(res => res.json())
      .then(data => setAllData(data))
  }, [count])

//check if search avialble or not
 var f=true;
  if(!allData.items)
  f=false;

//card component array
  const cards = f&&allData.items.map(function (item) {
    return (
      <Card
        key={item.id}
        author={item.volumeInfo.authors?item.volumeInfo.authors[0]:"none"}
        title={item.volumeInfo.title?item.volumeInfo.title:"none"}
        img={item.volumeInfo.imageLinks.smallThumbnail}
        category={item.volumeInfo.categories?item.volumeInfo.categories[0]:"none"}
        pagecount={item.volumeInfo.pageCount?item.volumeInfo.pageCount:"none"}
      />


    )
  })
  

//event listners
  function handleChange(event) {
    setName(event.target.value)
}

//search 

  function handleSubmit(event) {
    event.preventDefault()
    setCount(count=>count+1)
}

//return App component 
  return (
    <div>
            <Header />

            <div className="form">
               <form onSubmit={handleSubmit}>
                   <input
                     type="text"
                     placeholder="Book Name"
                     onChange={handleChange}
                     name="firstName"
                     value={name}
                   />
                  <button>Search</button>
              </form>
             </div>

                    <h2 className="search">{f?"Search Results":"Not found"}</h2>

               <div className="big-container">
                     {cards}
               </div >
    </div>
  )
}

