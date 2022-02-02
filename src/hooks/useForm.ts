import {ChangeEvent, FormEvent, useState} from "react";
import {UserType} from "../types";


const validators = {
    email: (email: string) => email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
    phone: (phone: string) => phone.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    ),
    url: (url: string) => url.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi)
}


const useForm = ({name, website, phone, company, email, address, username}: UserType) => {
    const [fields, setFields] = useState({
        email: {
            value: email || ' ',
            isValid: true,
            isRequired: true,
        },
        website: {
            value: website ||' ',
            isValid: true,
            isRequired: true,
        },
        phone: {
            value: phone ||' ',
            isValid: true,
            isRequired: true,
        },
        name: {
            value: name ||' ',
            isValid: true,
            isRequired: true,
        },
        username: {
            value: username ||' ',
            isValid: true,
            isRequired: true,
        },
        street: {
            value: address.street ||' ',
            isValid: true,
            isRequired: true,
        },
        city: {
            value: address.city ||' ',
            isValid: true,
            isRequired: true,
        },
        zipcode: {
            value: address.zipcode ||' ',
            isValid: true,
            isRequired: true,
        },
        comment: {
            value: '',
            isValid: true,
            isRequired: false,
        }
    })

    const handleChange= <T extends HTMLInputElement> (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        setFields((prev) => {
            return ({...prev, [e.target.name]: {...prev[e.target.name], value: e.target.value}});
        })
    }
    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name) {
            case 'email': {
                setFields((prev) => ({
                    ...prev, [e.target.name]: {
                        ...prev[e.target.name],
                        isValid: e.target.value.length ? validators.email(e.target.value) : false
                    }
                }))
                break
            }
            case 'phone': {
                setFields((prev) => ({
                    ...prev, [e.target.name]: {
                        ...prev[e.target.name],
                        isValid: e.target.value.length> 0 ? validators.phone(e.target.value) : false
                    }
                }))
                break;
            }
            case 'website': {
                setFields((prev) => ({
                    ...prev, [e.target.name]: {
                        ...prev[e.target.name],
                        isValid: e.target.value.length > 0 ? validators.url(e.target.value) : false
                    }
                }))
                break;
            }
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        if ((Array.from(formData.values()).slice(0, -1).some(val => val))) {
            const result = Array.from(formData.entries()).reduce((acc, [key, value]) => {
                return {...acc, [key]: value}
            }, {})
            console.log(JSON.stringify(result, null, 2))
        }

    }
    return {fields, handleChange, handleBlur, handleSubmit}
}

export default useForm