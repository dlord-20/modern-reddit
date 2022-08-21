import React, { useState} from "react";
import CategoryFilter from "../categoryFilter/CategoryFilter";
import DateRangeFilter from "../dateRangeFilter/DateRangeFilter";

export default function Nav() {

    return (
        <div>
            <p>Navigation</p>
            <form>
                <CategoryFilter />
                <DateRangeFilter />
            </form>
        </div>
    )
}