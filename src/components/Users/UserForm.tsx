import React, {FC} from 'react';
import cl from "./Users.module.scss";
import cn from "classnames";
import useForm from "../../hooks/useForm";
import {useAppContext} from "../../hooks/useAppContext";
interface UserFormProps {
    isEditable: boolean
}
const UserForm: FC<UserFormProps> = ({isEditable,}) => {
    const {selectedUser} = useAppContext()
    const {fields, handleChange, handleBlur, handleSubmit} = useForm(selectedUser)
    return (
        <form className={cl.form} onSubmit={handleSubmit}>
            <div className={cl.profileContent}>
                <label htmlFor="name">Name: </label>
                <input value={fields.name.value} onChange={handleChange} required={true} disabled={!isEditable} className={cn({[cl.onEditable]: isEditable})} type="text" id='name' name='name'/>
                <label htmlFor="username">Username: </label>
                <input onChange={handleChange} required={fields.username.isRequired} value={fields.username.value} disabled={!isEditable} className={cn({[cl.onEditable]: isEditable})} type="text" name='username' id='username'/>
                <label htmlFor="E-mail">Email</label>
                <input disabled={!isEditable} onChange={handleChange} value={fields.email.value} onBlur={handleBlur} className={cn({[cl.onEditable]: isEditable, [cl.error]: !fields.email.isValid})} type="text" name='email' id={'email'}/>
                <label htmlFor="street">Street</label>
                <input required={fields.street.isRequired} value={fields.street.value} onChange={handleChange} disabled={!isEditable} className={cn({[cl.onEditable]: isEditable})} type="text" name='street' id='street'/>
                <label htmlFor="city">City</label>
                <input required={fields.city.isRequired} value={fields.city.value} onChange={handleChange} disabled={!isEditable} className={cn({[cl.onEditable]: isEditable})} type="text" name='city' id='city'/>
                <label htmlFor="zipcode">Zipcode</label>
                <input disabled={!isEditable} className={cn({[cl.onEditable]: isEditable})} type="text" name='zipcode' id='zipcode' required={fields.zipcode.isRequired} value={fields.zipcode.value} onChange={handleChange}/>
                <label htmlFor="phone">Phone</label>
                <input onChange={handleChange} value={fields.phone.value} onBlur={handleBlur} disabled={!isEditable}  className={cn({[cl.onEditable]: isEditable, [cl.error]: !fields.phone.isValid})} type="tel" name={'phone'} id='phone'/>
                <label htmlFor="website">Website</label>
                <input onChange={handleChange} value={fields.website.value} onBlur={handleBlur} disabled={!isEditable} className={cn({[cl.onEditable]: isEditable, [cl.error]: !fields.website.isValid})} type="text" name='website' id='website'/>
                <label htmlFor="comment">Comment</label>
                <textarea disabled={!isEditable} onChange={handleChange} className={cn({[cl.onEditable]: isEditable})} rows={5}  name='comment' id='comment'/>
            </div>
            <button type='submit' disabled={!isEditable} className={cn('btn-large btn', cl.submitButton, {
                [cl.active]: isEditable,
                [cl.unActive]: !isEditable
            })}>Отправить</button>
        </form>
    );
};

export default UserForm;
