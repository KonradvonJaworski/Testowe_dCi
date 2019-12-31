import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
            <CommentDetail 
            author="edek"
            timeAgo="Today at 4:30PM" 
            textComment="Best regards"
            avatar={faker.image.avatar()} 
            />
            </ApprovalCard >
            <CommentDetail 
            author="zbychu dCi" 
            timeAgo="Today at 2:00AM" 
            textComment="everybody" 
            avatar={faker.image.avatar()}
            />
            <CommentDetail 
            author="wiesiek dTi" 
            timeAgo="Yesteday at 5:00PM" 
            textComment="Hello React!" 
            avatar={faker.image.avatar()}
            />
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'))