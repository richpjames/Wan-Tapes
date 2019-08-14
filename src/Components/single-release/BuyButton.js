import React from "react";
import styled from "styled-components";

const BuyWrapper = styled.section`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;
const Button = styled.input`
  font-size: 1em;
`;
const InputWrapper = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const Table = styled.tbody`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export default function BuyButton(props) {
  const { buyCode } = props;
  return (
    <BuyWrapper>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value={`${buyCode}`} />
        <table>
          <Table>
            <tr>
              <td>
                <input type="hidden" name="on0" value="item" />
              </td>
            </tr>
            <tr>
              <td>
                <select name="os0">
                  <option value="tape + download">
                    tape + download £7.03 GBP
                  </option>
                  <option value="download only">download £3.07 GBP</option>
                </select>
              </td>
            </tr>
          </Table>
        </table>
        <input type="hidden" name="currency_code" value="GBP" />
        <InputWrapper>
          <Button
            type="button"
            value="buy"
            border="0"
            name="submit"
            alt="PayPal – The safer, easier way to pay online!"
          />
        </InputWrapper>
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
