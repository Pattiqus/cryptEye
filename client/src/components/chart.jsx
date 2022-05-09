import React, { useEffect } from 'react'
import styled from 'styled-components';

export default function App() {
  console.log("does trading view exist", window.TradingView);
  useEffect(() => {
    new window.TradingView.MediumWidget(
      {
        "symbols": [
          [
            "BTC",
            "BINANCE:BTCUSDT|1M"
          ],
          [
            "ETH",
            "BINANCE:ETHUSDT|1M"
          ],
          [
            "XRP",
            "BINANCE:XRPUSDT|1M"
          ],
          [
            "LUNA",
            "BINANCE:LUNAUSDT|1M"
          ],
          [
            "USDC",
            "BINANCE:USDCUSDT|1M"
          ],
          [
            "SOL",
            "BINANCE:SOLUSDT|1M"
          ],
          [
            "ADA",
            "BINANCE:ADAUSDT|1M"
          ],
          [
            "AVAX",
            "BINANCE:AVAXUSDT|1M"
          ],
          [
            "XLM",
            "BINANCEUS:XLMUSDT|1M"
          ],
          [
            "DOGE",
            "BINANCE:DOGEUSDT|1M"
          ]
        ],
        "chartOnly": false,
        "width": 1000,
        "height": 500,
        "locale": "en",
        "colorTheme": "dark",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "fontColor": "#787B86",
        "isTransparent": false,
        "autosize": false,
        "showVolume": false,
        "hideDateRanges": false,
        "scalePosition": "no",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "noTimeScale": false,
        "valuesTracking": "1",
        "chartType": "line",
        "container_id": "tradingview_dff99"
      }
    );
  }, []);
  
  const ChartStyles = styled.div`
    
  ` 

  return (

    <div>
      <ChartStyles>
        <div className="tradingview-widget-container">
            <div id="tradingview_dff99"></div>
        {/* {add html here} */}
        </div>
      </ChartStyles>
    </div>
  )
}
