import React, { useContext } from "react"
import { UseDarkMode } from "../darkmode/darkmode"

export default function CartOtem() {
    const {darkMode} = useContext(UseDarkMode)
    return (
        <>
        <div className={`cart-items bg-item`}>
                    <div className="cart-item">
                        <div className="cart-item-img">
                            <img src="http://localhost:3000/assets/foods/veggie-burger.png" alt="" />
                        </div>
                        <div className="cart-item-detail">
                            <div className="cart-item-name">
                                <h3>Item Name</h3>
                            </div>
                            <div className="cart-item-offer">
                                25% discount
                            </div>
                        </div>
                        <div className="cart-item-qty-btn">
                            <button className="cart-item-dec">-</button>
                            <div className="output">0</div>
                            <button className="cart-item-inc">+</button>
                        </div>
                        <div className="cart-item-price">
                            <div className="cart-item-actual-price">
                                <del>00000</del>
                            </div>
                            <div className="cart-item-offer-price">
                                <b>0000</b>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}