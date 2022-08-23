import React, { useState} from "react";
import CategoryFilter from "../categoryFilter/CategoryFilter";
import DateRangeFilter from "../dateRangeFilter/DateRangeFilter";
import Search from "../search/Search";

export default function Nav() {

    return (
        <div>
            <p>Navigation</p>
            <form>
                <CategoryFilter />
                <DateRangeFilter />
            </form>
            <Search />
        </div>
    )
}