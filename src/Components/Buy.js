import React from "react";
import styled from "styled-components";

const BuyWrapper = styled.div`
  position: absolute;
  bottom: 1%;
  right: 1%;
`;

export default function Buy() {
  return (
    <BuyWrapper>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="8PLDYY7R9GCBN" />
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
    </BuyWrapper>
  );
}
