import React, { Component } from 'react'
// import Forms from "./Forms"

class Forms extends Component {
      state={
          name:"",
          dept:"",
          rating:"",
          user:[],

      }

      handleChange=(event) => {
          this.setState({
              [event.target.name] :event.target.value
          })
      }

      handleSubmit=(event)=>{
        event.preventDefault()
        console.log( "********start********",this.state)

        const tempobj= {
               name:this.state.name,
               dept:this.state.dept,
               rating:this.state.rating,


        }
        const tempArr=this.state.user
        tempArr.push(tempobj)
        this.setState({
          
         user:tempArr
        });

        
        
        
      }

    render(){
        return(
            <div>

           
            <div className='form-container'>
                  <h1>Employee Feedback Form:-</h1>
                  <form>
                      <div>
                  <label for="name" className='label-design'>Name:</label>
                  <input className="input1" type="text" id="name" name='name' onChange={this.handleChange} value={this.state.name} />
                      </div>

                  <div>
                  <label for="name1" className='label-design'>Dept:</label>
                  <input className="input1"  type="text" id="name1" name='dept' onChange={this.handleChange}  value={this.state.dept} />
                  </div>
           
                  <div>
                  <label for="name3" className='label-design'>Rating:</label>
                  <input className="input1" type="text" id="name3" name='rating' onChange={this.handleChange}  value={this.state.rating} />
                  </div>


                  <button className='btn' onClick={this.handleSubmit}>Submit</button>
                  </form>
            </div>
            <div className='feedback-container'>
            {this.state.user.map((value,index) => {
                return (
                    
                    <div className='Feedback'>
                 <h4>Name</h4>:{value.name }||<h4>Dept:</h4> {value.dept }||<h4>Rating:</h4>{value.rating}
                    </div>
                   
                )
            })}
             </div>
            </div>
        )
    
    }
}
export default Forms


