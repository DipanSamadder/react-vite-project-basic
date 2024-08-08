import React from 'react'

class Form extends React.Component{
    state  = {
        title: 'java',
        message: 'Test message',
        select: 'React',
        gender: true,
    }

    handleChange = (e) =>{
        if(e.target.type =='text'){
            this.setState({
                title:e.target.value,
            });
        }else if(e.target.type =="textarea"){
            this.setState({
                message:e.target.value,
            });
        }else if(e.target.type =="select-one"){
            this.setState({
                select:e.target.value,
            });
        }else if(e.target.type =="checkbox"){
            this.setState({
                gender:e.target.checked,
            });
        }else{
            console.log('nothing');
            
        }
    }
    
    handlerSubmit = (e) =>{
        const {title, message, select, gender} = this.state;
        e.preventDefault();
        console.log(title,message,select,gender);
        
    }
    render() {
        const {title, message, select, gender} = this.state;
        return (
            <div>Form Components
                <form onSubmit={this.handlerSubmit}>
                    <input type="text" name="title" placeholder='Title' value={title} onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <textarea name='text' placeholder='Message' value={message} onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <select name="select" value={select} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Java">Java</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="checkbox" name="gender" placeholder='gender' checked={gender} onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <input type="submit" name="Submit"/>
                </form>
            </div>
        );
    }
}


export default Form;