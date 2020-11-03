import React  , {useEffect , useState} from 'react';
import './App.css';
import Home from './home';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ApiAiClient } from "api-ai-javascript";








const App = ()  => {

  const [client , setclient] = useState();
  const [text , settext] = useState();
  const [chat , setchat] = useState([]);


  useEffect(() => {

    const client = new ApiAiClient({
      accessToken: "2f356b0a385a469d9ddd42599a7806a8"
    });
    setclient(client);
    
   
  }, [])
  


  const Checking = async() => {
    // console.log(client);
  //   const [err, response] = await (client.textRequest(text));
  // console.log(response);
  // const { result: { fulfillment: { speech } } } = response;

  // return [err, speech];

  chat.push({ name: 'user' , message: text });

  const result = await client.textRequest(text);
  console.log(result);
  const mesg = result.result.fulfillment.speech;
  console.log(result.result.fulfillment.speech);
  chat.push({name: 'bot' , message: mesg });
  setchat(chat);

  settext('');
  console.log(chat);

  

  }




  return (
    <Provider store={store}  >
      <Home />
      <div>
      
        <input value={text} onChange={(e) => settext(e.target.value) } />
        <button  onClick={( ) => Checking() } >CHECK</button>
        {chat?.map((v , i) => {
          return(
            <div> 
              <p>{v.name} : {v.message} </p>
               </div>
          );
        } ) }
      </div>

    </Provider>
   
  );
}

export default App;
