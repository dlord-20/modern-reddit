import React from "react";
import { useSelector } from "react-redux";
import CategoryFilter from "../categoryFilter/CategoryFilter";
import DateRangeFilter from "../dateRangeFilter/DateRangeFilter";
import { selectDateRangeFilter } from "../dateRangeFilter/dateRangeFilterSlice";
import Search from "../search/Search";
import styles from './Nav.module.css';

export default function Nav() {
    const dateRange = useSelector(selectDateRangeFilter);
    console.log(dateRange);


    const displayDateRangeFilter = () => {
        // if(isVisible) {
            return <DateRangeFilter />
        // }
        // return null;
    }

    return (
        <div>
            <p>Navigation</p>
            <form>
                <div>
                    <CategoryFilter />
                    {displayDateRangeFilter()}
                    {/* <DateRangeFilter /> */}
                </div>
                <Search />

            </form>
        </div>
    )
}