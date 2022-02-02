type UserAddressGeo = {
    lat: string;
    lng: string;
}
type UserAddress = {
    street: string;
    suite: string;
    city: string;
    zipcode: string
    geo: UserAddressGeo
}
type UserCompany = {
    name: string;
    catchPhrase: string;
    bs: string;
}

export type UserType = {
    id?: number;
    username: string;
    name: string;
    email: string;
    address: UserAddress
    phone: string;
    website: string;
    company: UserCompany
}

export enum SortType {
    ByCompany = 'ByCompany',
    byCity ='byCity'
}
export type AppContextType = {
    users: UserType[],
    isLoading: boolean;
    error: null | string | [];
    sortByType: (type: SortType) => void;
    setSelectedUser: (user: UserType) => void;
    selectedUser: UserType
}


