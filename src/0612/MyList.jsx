import React, { useState } from 'react';

function MyList() {
    const [text, setText] = useState('');
    
    //입력 요소의 내용이 변경되면 값을 저장
    const inputChanged = (event) => { 
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`You typed: ${text}`);
        event.preventDefault();
    }

        return (
            <form onSubmit={handleSubmit}>
                <input type = "text" onChange={inputChanged} value={text}/>
                <input type="submit" value="Press me"/>
            </form>
        );
    }


export default MyList;