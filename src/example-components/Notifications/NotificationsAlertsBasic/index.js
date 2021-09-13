import React, {useState,useEffect,Fragment} from 'react';
import axios from "axios";
import NativeSelect from '@material-ui/core/NativeSelect';
import {Row,Col} from 'reactstrap';
import Clock from 'react-live-clock';
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';
const API_URL = require('../../../cfg')()
export default function LivePreviewExample() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userInformation, setUserInformation] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(API_URL+"userInformation").then((res) => {
        setUserInformation(res.data);
        console.log(res.data);
      });
    };
    fetchData();
  }, []);
  useEffect(() => {
  
    axios.get(API_URL).then((response)=>{
      
          setIsLoaded(true);
console.log(response.data.content)
setItems(response.data.content);
    })
  }, [])
  return (
    <Fragment>
      <MuiAlert className="mb-4" severity="success">
        <div className="d-flex align-items-center align-content-center">
          <span>
            <strong className="d-block">Success!</strong> This is a success
            alert—check it out!
          </span>
        </div>
      </MuiAlert>
      <MuiAlert className="mb-4" severity="info">
        <div className="d-flex align-items-center align-content-center">
          <span>
            <strong className="d-block">Info!</strong> This is an info
            alert—check it out!
          </span>
        </div>
      </MuiAlert>
      <MuiAlert className="mb-4" severity="warning">
        <div className="d-flex align-items-center align-content-center">
          <span>
            <strong className="d-block">Warning!</strong> This is a warning
            alert—check it out!
          </span>
        </div>
      </MuiAlert>
      <MuiAlert className="mb-4" severity="error">
        <div className="d-flex align-items-center align-content-center">
          <span>
            <strong className="d-block">Danger!</strong> This is an error
            alert—check it out!
          </span>
        </div>
      </MuiAlert>
    </Fragment>
  );
}
