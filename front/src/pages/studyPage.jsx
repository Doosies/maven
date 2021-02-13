import React, { useState } from 'react';

function StudyPage(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const { name, nickname } = inputs;

    const onChange = (e) =>{
        const {value, name} = e.target;

        setInputs({
            ...inputs,
            [name]:value
        });

        console.log(e.target.name);
    }
    const onReset = (e) =>{
        setInputs({
            name: '',
            nickname: '',
        });
    }

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default StudyPage