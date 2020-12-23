import React,{Component} from 'react';

class Life extends Component{
    constructor(props){
        super(props);

        this.state= {action:''}
        console.log('1-Constructor');
    }
    static getDerivedStateFromProps(){
        console.log('2-getDerivedStateFromProps');
        return null
    }
    componentDidMount(){
        console.log('4-componentDidMount');
    } 
    componentWillUnmount(){
        console.log('5-componentWillUnmount');
    }

    shouldComponentUpdate(){
        console.log('6-shouldComponentUpdate');
        return  true;
    }
    
    render(){
        console.log('3-render');
        return(
            <div>
            Life
            </div>
        )
    }


}

export default Life;
