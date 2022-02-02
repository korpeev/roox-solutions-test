import React from 'react';
import cl from "./LeftSide.module.scss";
import cn from "classnames";
import {useAppContext} from "../../hooks/useAppContext";
import {SortType} from "../../types";

const LeftSide = () => {
    const {sortByType} = useAppContext()
    return (
        <aside className={cl.navigation}>
            <h3 className={cl.title}>Сортировка по</h3>
            <button onClick={() => sortByType(SortType.byCity)} className={cn('btn btn-primary', cl.btnPrimary)}>по городу</button>
            <button className={cn('btn btn-primary')} onClick={() => sortByType(SortType.ByCompany)}>по компаний</button>
        </aside>
    );
};

export default LeftSide;
