const loginUser = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      "email": "heritier1@gmail.com",
      // "email": "heritier@gmail.com",
      "password": "123456"
    });
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    try {
      
      const response = await fetch("https://foshizi.herokuapp.com/api/getallsurveys");
      // const response = await fetch("https://foshizi.herokuapp.com/api/loginuser", requestOptions);
      const result = await response.json();
      console.log(result);
      return result.result;
    } catch (error) {
      console.log('error', error);
    }
  }
  
  export default loginUser;
  