import React, {useState} from 'react';

const profileData = {
    velopert:{
        name: '김민준',
        description:
        'Front ened'
    },
    gildong:{
        name: '홍길동',
        description:
        'back end'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    console.log(username)
    const profile = profileData[username];
    if( !profile ){
        return <div> 존재하지 않는 유저</div>;
    }

    return(
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
}

export default React.memo(Profile);