import React, {useState} from 'react';
import cl from './Users.module.scss'
import cn from "classnames";
import UserForm from "./UserForm";
const UserProfile = () => {
    const [isEditable, setEditable] = useState(false)

    return (
        <div className={cn(cl.userList, cl.profile)}>
            <div className={cl.profileHeader}>
                <h2>Странница пользователя</h2>
                <button onClick={() => setEditable(!isEditable)} className={cn('btn btn-primary btn-large')}>Редактировать</button>
            </div>
            <UserForm isEditable={isEditable}/>
        </div>
    );
};

export default UserProfile;
