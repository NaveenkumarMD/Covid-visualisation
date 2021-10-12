import React,{useCallback,useMemo,useState} from 'react'
import '../Styles/form.css'
import DataListInput from "react-datalist-input";
import myValues from '../Assets/country.json'
function Form({setcountry}) {
    const onSelect = useCallback((selectedItem) => {
        setcountry(selectedItem)
    }, []);
    const items = useMemo(
        () =>
            myValues.map((oneItem) => ({
                label: oneItem.Country,
                key: oneItem.id,
                someAdditionalValue: oneItem.someAdditionalValue,
                ...oneItem,
            })),
        [myValues]
    );
    return (
        <div className="form">
            <DataListInput
                inputClassName="form-input"
                placeholder="Select an option from the drop down menu..."
                items={items}
                onSelect={onSelect}
                dropDownLength={10}
                activeItemClassName="active-item"
                suppressReselect={false}
            />
        </div>
    )
}

export default Form
