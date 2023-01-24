import "./invoice.css"
import Navbar from '../../components/navbar/Navbar'

const Invoice = () => {
  return (
    <div className="invoice-container">
        <Navbar/>
        <div className="invoice">
          <div className="invoice-select">
            <span>Invoices <span className="text-gray" >/ edit invoice (INV-2022-010)</span> </span>
          </div>
          <div className="invoice-info">
            <div className="invoice-details">
              <div className="owner-details-1">
                <div className="owner-logo"> <h3>D</h3></div>
                <div className="owner-name">
                  <h3 className="m0">Dipa Inhouse</h3>
                  <p className="m0 text-gray">hello@dipainhouse.com</p>
                </div>
              </div>
              <div className="owner-details-2">
                <p className="m0 text-gray">Ijen Boulevard Street 101</p>
                <p className="m0 text-gray">Malang City, 65115 </p>
                <p className="m0 text-gray">East Java, Indonesia</p>
              </div>
            </div>
            <div className="invoice-no-details">
              <div className="invoice-details">
                <div className="m0 ">
                  <h4>Invoice Number</h4>
                  <p>INV-2022-010</p>
                  <p>Issued Date: 11 Jan 2022</p>
                  <p>Due Date: 18 Jan 2022</p>
                </div>
                <div className="owner-address-2">
                  <h4>Billed to</h4>
                  <p>Zaky Grizzly</p>
                  <p>Monlight Agency LTD</p>
                  <p>New York, USA</p>
                </div>
              </div>
            </div>
            <div className="item-details">
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Invoice