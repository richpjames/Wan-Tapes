import React from "react";

export default function BuyButton() {
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="8PLDYY7R9GCBN" />
      <table>
        <tr>
          <td>
            <input type="hidden" name="on0" value="item" />
            item
          </td>
        </tr>
        <tr>
          <td>
            <select name="os0">
              <option value="tape + download">tape + download £7.03 GBP</option>
              <option value="download only">download only £3.07 GBP</option>
            </select>{" "}
          </td>
        </tr>{" "}
      </table>
      <input type="hidden" name="currency_code" value="GBP" />
      <input
        type="image"
        src="http://www.wantapes.com/img/buy.png"
        border="0"
        name="submit"
        alt="PayPal – The safer, easier way to pay online!"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  );
}
