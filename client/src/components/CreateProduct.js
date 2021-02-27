import React, { useState } from "react";

const CreateProduct = (props) => {
    const [formState, setFormState] = useState({
        productCode: "",
        productName: "",
        netWeight: "",
        unitsPerCase: "",
        listPrice: "",
        unitBarcode: "",
        caseBarcode: "",
        activeProduct: ""
    });

    const handleFieldChange = (e) => {
        const newState = { ...formState }; //newState will therefore equal whatever is written in the fields
        newState[e.target.name] = e.target.value; 
        setFormState(newState); //updates the formState in the memory
    };

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        props.submit(
            formState.productCode,
            formState.productName,
            formState.netWeight,
            formState.unitsPerCase,
            formState.listPrice,
            formState.unitBarcode,
            formState.caseBarcode,
            formState.activeProduct
        );
    };

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleCreateSubmit}>
                <label>
                    Product Code
                    <input name="productCode" value={formState.productCode} onChange={handleFieldChange}></input>
                </label>
                <label>
                    Product Name
                    <input name="productName" value={formState.productName} onChange={handleFieldChange}></input>
                </label>
                <label>
                    Net Weight
                    <input name="netWeight" value={formState.netWeight} onChange={handleFieldChange}></input>
                </label>
                <label>
                    Units Per Case
                    <input name="unitsPerCase" value={formState.unitsPerCase} onChange={handleFieldChange}></input>
                </label>
                <label>
                    List Price
                    <input name="listPrice" value={formState.listPrice} onChange={handleFieldChange}></input>
                </label>
                <label>
                    Unit Barcode
                    <input name="unitBarcode" value={formState.unitBarcode} onChange={handleFieldChange}></input>
                </label>
                                <label>
                    Case Barcode
                    <input name="caseBarcode" value={formState.caseBarcode} onChange={handleFieldChange}></input>
                </label>
                <label>
                    Active Product
                    <input name="activeProduct" value={formState.activeProduct} onChange={handleFieldChange}></input>
                </label>
                <button type="submit">Create Product</button>
            </form>
        </div>
    )
}

export { CreateProduct };