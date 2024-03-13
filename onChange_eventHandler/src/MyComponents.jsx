import React , { useState } from "react";

function Components() {
    const [name , setName] =useState("")

    const [quantity,setQuantity]=useState(1)

    const [comment,setComment]=useState("")

    function handleCommentChange(e) {
    setComment(e.target.value)
}

    function handleNameChange(event) {
         setName(event.target.value);
    }
    function handleQuantityChange(e) {
        setQuantity(e.target.value)
    }

    const [payment , setPayment]=useState("")

    function handlePaymentChange(e) {   
        setPayment(e.target.value)
    }
        return(
            <>
            <div>
                <input value={name} onChange={handleNameChange} />
                <p> <b>Name :</b> {name}</p>

                <input value={quantity} onChange={handleQuantityChange}/>
                <p> <b>Quantity :</b> {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Feedback"/>
                <p>
                    <b>Comment:</b>{comment}
                </p>
                <select value={payment} onChange={handlePaymentChange}id="">
                    <option value="" disabled selected >Select Payment Method</option>
                    <option value="Cash">Cash</option>
                    <option value="Rupay">Rupay</option>
                    <option value="Visa">Visa</option>
                </select>

            </div>
            </>
        );
}
export default Components;