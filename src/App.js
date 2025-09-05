import { useState } from "react";

function App() {
  const [price, setPrice] = useState("");

  const totalPreGST = parseInt(price);
  const gstAmt = ((totalPreGST * 18) / 100).toFixed(2);
  const FinalAmt = totalPreGST + parseFloat(gstAmt) + 300;

  return (
    <div className="container">
      <h1 className="my-5 text-center">
        <strong>Calculate</strong>
      </h1>

      <div className="mb-3">
        <label htmlFor="inputAmt" className="form-label">
          <strong>Enter Price</strong>
        </label>
        <input
          type="number"
          className="form-control"
          id="inputAmt"
          onChange={(e) => setPrice(e.target.value)}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="my-5 table-responsive">
        <h2 className="my-3 text-center">
          <strong>Total Breakdown</strong>
        </h2>
        <table className="table table-bordered border-dark">
          <tbody>
            <tr>
              <th>Price</th>
              <td>₹{price}</td>
            </tr>

            <tr>
              <th>GST 18%</th>
              <td>₹{gstAmt}</td>
            </tr>
            <tr>
              <th>Loading Charges</th>
              <td>₹300/-</td>
            </tr>
            <tr class="table-dark">
              <th>Final Amount</th>
              <td>
                <strong>₹{FinalAmt}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App

