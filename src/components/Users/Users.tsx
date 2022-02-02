import cl from "./Users.module.scss";
import cn from "classnames";
import React, {useMemo} from "react";
import {useAppContext} from "../../hooks/useAppContext";
import UserListItem from "./UserListItem";

const Users = () => {
    const {isLoading, users} = useAppContext()
    const renderUsers = useMemo(() => {
        if (isLoading) {
            return <div>Загрузка данных....</div>
        }
        return users.map((user) => <UserListItem key={user.id}  {...user}/>)
    }, [isLoading, users])
    return (
        <div className={cl.usersList}>
            <h2>Список пользователей</h2>
            <ul className={cl.userList}>
                {renderUsers}
                {users.length > 0 && <span>Найдено {users.length} Пользователей</span>}
            </ul>
        </div>
    );
};

export default Users;
