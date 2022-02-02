import {createContext, FC, useEffect, useState} from "react";
import {AppContextType, SortType, UserType} from "../types";
import ApiService from "../services/Api.service";

export const AppContext = createContext<AppContextType>({
    users: [],
    isLoading: false,
    error: null,
    sortByType: () => {},
    setSelectedUser: () => {},
    selectedUser: {} as UserType
})

export const AppProvider:FC = ({children}) => {
    const [users, setUsers] = useState<UserType[]>([])
    const [isLoading, setLoading] = useState(false)
    const [errors, setError] = useState<null | string | []>(null)
    const [selectedUser, setSelectedUser] = useState<UserType>({} as UserType)
    useEffect(() => {
        (async() => {
            try {
                setLoading(true)
                const usersResponse = await ApiService.fetchUsers()
                setUsers(usersResponse)
                setLoading(false)
            } catch (e: any) {
                setError(e.message)
            }

        })()
    }, [])
    const sortBy = (type: SortType) => {
        switch (type) {
            case SortType.ByCompany:
                setUsers((prev) => [...prev].sort((a, b) => a.company.name.localeCompare(b.company.name)))
                break;
            case SortType.byCity:
                setUsers((prev) => [...prev].sort((a, b) => a.address.city.localeCompare(b.address.city)))

        }
    }
    return (
        <AppContext.Provider value={{
            users, isLoading, error: errors, sortByType: sortBy, setSelectedUser, selectedUser
        }}>
            {children}
        </AppContext.Provider>
    )
}