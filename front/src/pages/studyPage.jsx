import React, { useState } from 'react';

function StudyPage(){
    const [text, setText] = useState('');

    const onChange = (event) =>{
        setText(event.target.value);
    }

    return(
        <div>
            <input/>
            <button>초기화</button>
            <div>
                <b>값:</b>
            </div>
        </div>
    );
}

export default StudyPage