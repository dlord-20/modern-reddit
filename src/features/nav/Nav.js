import React, { useState} from "react";
import CategoryFilter from "../categoryFilter/CategoryFilter";
import DateRangeFilter from "../dateRangeFilter/DateRangeFilter";
import Search from "../search/Search";
import styles from './Nav.module.css';

export default function Nav() {

    return (
        <div>
            <p>Navigation</p>
            <form>
                <div>
                    <CategoryFilter />
                    <DateRangeFilter />
                </div>
                <Search />

            </form>
        </div>
    )
}