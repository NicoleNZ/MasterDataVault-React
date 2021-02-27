import React, { useEffect, useState } from "react";

const DeleteProduct = (props) => {
    const [formState, setFormState] = useState({
        productCode: "",
        productName: "",
        netWeight: "",
        unitsPerCase: "",
        listPrice: "",
        unitBarcode: "",
        caseBarcode: ""
    });

    useEffect(() => {
        setFormState(props.product);
        }, [props.product]); //need this to be able to render products into the edit field when clicked on the UI

    const handleDeleteSubmit = (e) => {
        e.preventDefault();
        props.submit(formState);
    };
    
    return (
        <div>
            <h1>Delete Product</h1>
            <form onSubmit={handleDeleteSubmit}>
                <label>
                    Product Code
                    <input name="productCode" defaultValue={formState.productCode} ></input>
                </label>
                <label>
                    Product Name
                    <input name="productName" defaultValue={formState.productName} ></input>
                </label>
                <label>
                    Net Weight
                    <input name="netWeight" defaultValue={formState.netWeight} ></input>
                </label>
                <label>
                    Units Per Case
                    <input name="unitsPerCase" defaultValue={formState.unitsPerCase} ></input>
                </label>
                <label>
                    List Price
                    <input name="listPrice" defaultValue={formState.listPrice} ></input>
                </label>
                <label>
                    Unit Barcode
                    <input name="unitBarcode" defaultValue={formState.unitBarcode} ></input>
                </label>
                                <label>
                    Case Barcode
                    <input name="caseBarcode" defaultValue={formState.caseBarcode} ></input>
                </label>
                <button type="submit">Delete Product</button>
            </form>
        </div>
    )
};

export { DeleteProduct };