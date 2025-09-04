import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext)
    const navigate = useNavigate()

    const verifyPayment = async () => {
        const response = await axios.post(`${url}/api/order/verify`, {success, orderId})
        try {
            const response = await axios.post(`${url}/api/order/verify`, {success, orderId})
            console.log('Verify API response:', response.data)
            if (response.data.success) {
                navigate("/myorders")
            } else {
                console.error('Payment not successful:', response.data)
                navigate("/")
            }
        } catch (error) {
            console.error('Error verifying payment:', error)
            alert('Error verifying payment. Check console for details.')
            navigate("/")
        }
    }   

    useEffect(() => {
        verifyPayment()
    }, [])

  return (
    <div className="verify">
        <div className="spinner">
            
        </div>
    </div>
  )
}

export default Verify
