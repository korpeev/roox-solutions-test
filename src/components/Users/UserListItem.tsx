import React, {FC} from 'react';
import cl from "./Users.module.scss";
import cn from "classnames";
import {UserType} from "../../types";
import {useAppContext} from "../../hooks/useAppContext";
import {Link} from "react-router-dom";
interface UserListItemProps extends UserType {}

const UserListItem: FC<UserListItemProps> = (props) => {
    const {setSelectedUser} = useAppContext()
    const handleClick = () => {
        setSelectedUser(props)
    }
    return (
        <li className={cl.userListItem}>
            <div className={cl.userListInfo}>
                <span className={cl.grayText}>ФИО: <p>{props.name}</p></span>
                <span className={cl.grayText}>город: <p>{props.address.city}</p></span>
                <span className={cl.grayText}>компания: <p>{props.company.name}</p></span>
            </div>
            <button onClick={handleClick} className={cn('btn', cl.aboutBtn)}>
                <Link to={`/${props.id}`}>
                    Подробнее
                </Link>
            </button>
        </li>
    );
};

export default UserListItem;
