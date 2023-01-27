    <>
    <h1>Gif App</h1>
    <AddCategory onNewValue={onAddCategory} />
    <ol>
        {categories.map((category) => {
        return <li key={category}> {category}</li>;
        })}
    </ol>
    

    
    <h1>Gif App</h1>
    <AddCategory onNewValue={onAddCategory} />
      {categories.map(category=>{
        return(
          <div>
            <h3>{category}</h3>
          </div>
        )
      })}
    


     <>
      <h1>Gif App</h1>
      <AddCategory onNewValue={onAddCategory} />
      {categories.map(category=>(
          <div>
            <h3>{category}</h3>
          </div>
        )
      )}
    </>

