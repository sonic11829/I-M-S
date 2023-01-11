const handleFetch = async (fetchPath, httpMethod, stringify, stringifyOutput) => {
    if (httpMethod === 'GET') {
        const response = await fetch(fetchPath)
        const data = await response.json()
        return data
      } else if (stringify === false) {
        const response = await fetch(fetchPath, {
          method: httpMethod,
          headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json()
        return data
      } else {
        const response = await fetch(fetchPath, {
          method: httpMethod,
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(stringifyOutput)
        })
        const data = await response.json()
        console.log(data)
        return data
      }
  }
  
  export default handleFetch