import React, { useEffect, useState } from 'react'
import Style from "./Month_Picker.module.css"




const Month_Picker = ({ onMonthSelect, defaultMonth}) => {

    const [selectedMonth, setSelectedMonth] = useState(defaultMonth);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    useEffect(()=>{
        setSelectedMonth(defaultMonth)
    }, [defaultMonth])

    
    const handleChange = (e) => {
        const selected = e.target.value;
        setSelectedMonth(selected);
        onMonthSelect(selected); // Pass the selected month to parent component
    };


    return (

        <div id={Style.Month_Picker_mainDiv}>

            <div id={Style.Month_Picker_wrapperDiv}>

                {months.map((month, index) => (

                    <div key={index} id={Style.Month_PickerDiv} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>

                        <input
                            type="radio"
                            id={month}
                            name="month"
                            value={month}
                            checked={selectedMonth === month}
                            onChange={handleChange}
                            style={{ marginRight: '10px' }}
                        />

                        <label htmlFor={month}>{month}</label>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Month_Picker