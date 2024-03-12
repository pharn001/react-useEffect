function App() {
  const [data, setData] = useState([])
  useEffect(() =>{
    fetch('https://reqres.in/api/users?page=2')
    .then(res =>{return res.json();})
    .then(resJson =>{setData(resJson.data)})
  },[])
  const fetc = data.map( nothing =>{
    return <h2 key={nothing.id}>{nothing.email}</h2>;
  })
  return ( 
    <>
  {fetc}
    </>
  )
}
