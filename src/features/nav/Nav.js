import React from "react";
import { useSelector } from "react-redux";
import CategoryFilter from "../categoryFilter/CategoryFilter";
import DateRangeFilter from "../dateRangeFilter/DateRangeFilter";
// import { selectDateRangeFilter } from "../dateRangeFilter/dateRangeFilterSlice";
import { selectDateRangeVisibility } from "../dateRangeFilter/dateRangeVisibilitySlice";
import Search from "../search/Search";
import styles from './Nav.module.css';

export default function Nav() {
    // const dateRange = useSelector(selectDateRangeFilter);
    const isVisible = useSelector(selectDateRangeVisibility);


    const displayDateRangeFilter = (visible) => {
        if(visible) {
            return <DateRangeFilter />
        }
        return null;
    }

    return (
        <div className={styles.navContainer}>
            <h1>Modern Reddit API</h1>
            <form>
                <div>
                    <CategoryFilter />
                    {displayDateRangeFilter(isVisible.value)}
                </div>
                <Search />

            </form>
        </div>
    )
}