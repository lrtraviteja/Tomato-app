import { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const navigate = useNavigate();

  const handleSampleData = (event) => {
    if (event.target.checked) {
      setData({
        firstName: "ravi",
        lastName: "teja",
        email: "ravi@gmail.com",
        street: "street",
        city: "city",
        state: "state",
        zipcode: "111111",
        country: "US",
        phone: "9876543210"
      })
    } else {
      setData({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
      })
    }
  }

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value
    setData((prev) => ({ ...prev, [name]: value }));
  }

  const placeOrder = async (event) => {
    event.preventDefault()
    let orderItems = []
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    }
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } })
    if (response.data.success) {
      const { session_url } = response.data
      window.location.replace(session_url)
    } else {
      alert("Error:", response.data.message)
    }
  }

  useEffect(() => {

    if (!token) {
      navigate("/cart")
    }
    else if (!getTotalCartAmount()) {
      navigate('/cart')
    }
  }, [token])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name='firstName' type="text" onChange={onChangeHandler} value={data.firstName} placeholder='First name' required />
          <input name='lastName' type="text" onChange={onChangeHandler} value={data.lastName} placeholder='Last name' required />
        </div>
        <input name='email' type="email" onChange={onChangeHandler} value={data.email} placeholder='Email address' required />
        <input name='street' type="text" onChange={onChangeHandler} value={data.street} placeholder='Street' required />
        <div className="multi-fields">
          <input name='city' type="text" onChange={onChangeHandler} value={data.city} placeholder='City' required />
          <input name='state' type="text" onChange={onChangeHandler} value={data.state} placeholder='State' required />
        </div>
        <div className="multi-fields">
          <input name='zipcode' type="number" onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' required />
          <input name='country' type="text" onChange={onChangeHandler} value={data.country} placeholder='Country' required />
        </div>
        <input name='phone' type="number" onChange={onChangeHandler} value={data.phone} placeholder='Phone' required />
        <div className="sample-data">
          <input type='checkbox' id='sampleData' onChange={handleSampleData} />
          <label htmlFor="sampleData">Get Sample Address</label>
        </div>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder