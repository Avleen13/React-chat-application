import React from 'react';
import ReactDOM from 'react-dom';
import ContactList from 'components/ContactList';
import Chat from 'components/Chat';
import 'css/styles.css';



  
const App = () => {
	return (
		<div className="container clearfix">
				<ContactList />
                <Chat />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));