import React from 'react';
    
import 'devextreme/dist/css/dx.light.css';
    
import Button from 'devextreme-react/button';    

class App extends React.Component {
    render() {
        return (
            <Button
                text="Click me"
                onClick={this.sayHelloWorld}
            />
        );
    }
 
    sayHelloWorld() {
        alert('Hello world!')
    }
}
