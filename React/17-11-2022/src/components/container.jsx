export default function Contain(props){
const list=props.messages.map((to,index)=>{
                return(
                    <div className="bg-dark text-white p-2 m-2">
                    <div key="{to}">
                        <p className="d-inline">{to.mess}</p> <span onClick={()=>props.delete(index)} className="delete">X</span>
                        <span className="d-block date">{to.date}</span>

                    </div>
                    </div>
                )
            })
    return(
        <>
        <div className="row">
            {list}
        </div>
        </>
    )
}