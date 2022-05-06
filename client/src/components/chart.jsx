import React from 'react'
import TradingView from 'https://s3.tradingview.com/tv.js';

export default function Chart() {

  // call the new Trading()
  new TradingView.MediumWidget(
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

  return (

    <div>
        <div className="tradingview-widget-container">
            <div id="tradingview_dff99"></div>
                <div className="tradingview-widget-copyright">
                        <a href="https://www.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span className="blue-text">BTC</span></a> 
                    by TradingView
                </div>
        {/* put HTML code here */}
        </div>
    </div>
  )
}
