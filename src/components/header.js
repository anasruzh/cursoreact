import React from 'react';


class Header extends React.Component {

    render(){
        return( 
        
            <header style={styles.header}>
                <div style={styles.logo}> Logo </div>
                <input/>
            </header>

        )
    }
}

let styles ={
    header:{
        background :"#03a9fa"
    },
    logo:{
        color:'#fff',
        fontfamily: 'Anton',
        textAlign: 'center'
    }
}
export default Header;

