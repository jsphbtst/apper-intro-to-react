/*
<html>

  <head>
    <title>Hello world</title>
  </head>
  
  <body>
    <div id='root'>
    
    </div>
  </body>
</html>

body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica;
}

#root {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}

ul {
  margin: 8px 0;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
  margin-left: 30px;
}

.done {
  color: rgba(0, 0, 0, 0.3);
  text-decoration: line-through;
}

input {
  margin-right: 5px;
}

*/

// JSFiddle
const { useState } = React

const initialItems = [
  { text: 'Learn JavaScript', done: false },
  { text: 'Learn React', done: false },
  { text: 'Play around in JSFiddle', done: true },
  { text: 'Build something awesome', done: true }
]

const TodoApp = () => {
  const [items, setItems] = useState(initialItems)

  const handleCheck = (item, index) => {
    const itemsCopy = [...items]
    const isChecked = !item.done
    itemsCopy[index] = { ...item, done: isChecked }
    setItems(itemsCopy)
  }

  return (
    <div>
      <h2>Todos:</h2>
      <ol>
        {items.map((item, index) => (
          <li key={item.text}>
            <label>
              <input
                type='checkbox'
                defaultChecked={item.done}
                onChange={() => handleCheck(item, index)}
              />
              <span className={item.done ? 'done' : ''}>{item.text}</span>
            </label>
          </li>
        ))}
      </ol>
    </div>
  )
}

ReactDOM.render(<TodoApp />, document.getElementById('root'))
