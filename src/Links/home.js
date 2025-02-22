import React from 'react';

function Home() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Welcome to the Home Page!'
        ),
        React.createElement(
            'p',
            null,
            'This is a basic homepage created using React and plain JavaScript (no JSX).'
        )
    );
}

export default Home;
