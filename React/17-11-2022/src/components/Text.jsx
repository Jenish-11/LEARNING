import './Text.css';
// import Moment from 'react-moment';
import moment from 'moment'
// import 'moment-timezone';
export default function Text(props){
    let details={

    }
    let d =new Date();
    var time=Date.now()
    const {
        host, hostname, href, origin, pathname, port, protocol, search
      } = window.location
      console.log(hostname);
    console.log("time",time)
    const add=()=>{
        var a=d.getHours()
        var b=d.getMinutes()
        details["mess"]=document.getElementById("exampleFormControlTextarea6").value;
        details["status"]=false;
        details["date"]=moment.utc(Date.now()).local().startOf('seconds').fromNow()
        // d.getDate()+""+d.toLocaleString('default', { month: 'short' })+""+d.getHours()+":"+d.getMinutes()
   if(details.mess!==""){ props.messages(details)}
    document.getElementById("exampleFormControlTextarea6").value=""
    }
    return(
        <>
        <div>
            <div class="form-group shadow-textarea">
                <label for="exampleFormControlTextarea6"></label>
                <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..."></textarea>
            </div>
            <div className='text-right'>
                <button onClick={add} type="button" class="mt-2 float-right bg-primary">Post</button>
            </div>
            
           
        </div>
        </>
    )
}