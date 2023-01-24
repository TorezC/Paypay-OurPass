import "./invoice.css"
import Navbar from '../../components/navbar/Navbar'

const Invoice = () => {
  return (
    <div className="invoice-container">
        <Navbar/>
        <div className="invoice">
          <div className="invoice-select">
            <span>Invoices <p>/ edit invoice (INV-2022-010)</p> </span>
          </div>
        </div>
    </div>
  )
}

export default Invoice