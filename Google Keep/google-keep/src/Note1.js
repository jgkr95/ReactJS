import React, { Component } from 'react'
import axios from 'axios';


export default class Note1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount : 5000,
            title:'',
            content:'',
            expand:false,
        }
        this.addNote = this.addNote.bind(this)
        this.addEvent = this.addEvent.bind(this)
        this.expandIt = this.expandIt.bind(this)
        this.addTitle = this.addTitle.bind(this)
    }
    
        // let [note, setNote] = useState({
        //   title: '',
        //   content: '',
        // })
      
        // let [expand,setExpand]=useState(false)
      
        // let addNote = (e) => {
        //   let {value,name} = e.target
        //   setNote((prev)=>{
        //    return { ...prev, [name]:value}
        //   })
          addNote(event){
            this.setState({
                content: new Date()
              });
          }
          addTitle(){
              debugger
            //   console.log(event.target.value)

            this.setState({
                title: new Date()
              });
          }
        
        // let addEvent  = ()=>{
        //      props.passNote(note)
        //      setNote({
        //       title: '',
        //       content: '',
        //     })
        // }
        addEvent(){
            console.log("addevent");
        }
    
        expandIt(){

        }
    //   let expandIt = ()=>{
    //     setExpand(true)
    //   }
      
    // let [addItem,setaddItem]= useState([])

//   const addNote = (note)=>{

//     setaddItem((prev)=>{
//       return [...prev,note]
//     })
    
    
    
//   }
//   const onDelete = (id)=>{

//     setaddItem((oldData)=>
//       oldData.filter((curData,indx)=>{
//         return indx !== id; 
//       }
      
//       )
    

//     );
//     }
componentDidMount() {
        
}
    async paymentHandler(e) {
        e.preventDefault();

        
        
    }  
      
    // <AddIcon className="btn" />
      render() {
          return (
              <div>
                  <div className="box">
         
         {/* <form className="form__group field">
           {this.state.expand?
           <input type="text" value={this.state.title} name="title" onChange={this.state.addNote}  autoComplete = "off" className="form__field" placeholder="enter the title" />
           : null}
           <label className="form__label">Title</label> 
           <textarea onClick={this.state.expandIt} cols="" onChange={this.state.addNote} name="content" className="text-area" value={this.state.content} rows="" placeholder="write a note"></textarea>
           {this.state.expand?< button onClick ={this.state.addEvent}></button>: null}
         </form> */}
         <form>
        {/* <h1>Hello</h1>
        <p>Enter your name:</p> */}
        <input
          type="text"   placeholder="Title" onChange={this.state.addTitle}
        />
        <input type="text"  placeholder="notes here" onChange={this.state.addNote} />
        <button onClick ={this.state.addEvent}>+</button>
      </form>
 
       </div>
              </div>
          )
      }
  }