import React from "react";
import { 
    useSelector, 
    useDispatch 
} from "react-redux";
import { 
    selectDateRangeFilter,
    changeDateRange
 } from "./dateRangeFilterSlice";

export default function DateRangeFilter() {

    const dateRange = useSelector(selectDateRangeFilter);
    const dispatch = useDispatch();
    
    // const handleDateChange = (event) => {
    //     setDateRangeFilter(event.target.value);
    // }

    return (
        <div>
            <label>
                <select value={dateRange} onChange={(e) => dispatch(changeDateRange(e.target.value))}>
                    <option value="24 Hours">24 Hours</option>
                    <option value="3 Days">3 Days</option>
                    <option value="Week">Week</option>
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                </select>
            </label>
        </div>
    )
}