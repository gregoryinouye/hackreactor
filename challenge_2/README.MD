# Cryptocurrency Charting Tool

## Basic Requirements
Starting from scratch (blank index.html, blank app.jsx and blank server.js files), build a single-page app for viewing the historical price data for any cryptocurrency. Use:

- ReactJS for all views and bundle with Webpack
- Express to serve your app and all its assets
- The CoinDesk API (https://www.coindesk.com/api) to retrieve all your data
- ChartJS.org (https://www.chartjs.org/samples/latest/scales/time/financial.html) to display your time-series charts

Start building your app using a single, fixed currency symbol, Bitcoin (BTC), and a fixed date range of your choosing. Use a time-series chart and show closing prices only.

Reminder: Emphasis should be placed on creating well-defined interfaces, writing code with a clear separation of concerns, and using the principles of modularity, encapsulation, abstraction.

## CoinDesk API Limitations
The decision to use the CoinDesk API rather than any other cryptocurrency API is largely based on the fact that it offers an unlimited number of requests. In exchange, CoinDesk requires that you include the text, "Powered by CoinDesk", beneath any visual representations of their data in your application.

As a trade-off for limitless requests, you will be forced to work exclusively with Bitcoin throughout the Basic Requirements, as CoinDesk only provides data for its Bitcoin Price Index (BPI) and does not offer data for other currencies. However, you may choose to represent the value of Bitcoin in either USD, EUR, or GBP.

You will be free to explore other cryptocurrencies via other APIs in Advanced Content!

## Advanced Content
As a requirement of this exercise, you must devise a strategy for building your app without relying on live API requests (otherwise you will quickly reach your usage limit).

Add a toggle button to switch between live API requests and cached requests (you will need to consider and decide on how to deal with requests for information that are not in your cache).

For live requests, cache all requests and use cached responses anytime you encounter a request that you haven't seen before. You get to choose your caching strategy. Ensure you can justify your choice and you understand the benefits and disadvantages of your choice. Obtain feedback from a peer.

Refactor your Cryptocurrency Charting Tool by finding a new API that can provide:
Data for many cryptocurrencies (as opposed to just Bitcoin).

Historical cryptocurrency price data that includes daily open, high, low and close prices.

Note: For data on multiple cryptocurrencies, we suggest exploring the CryptoCompare API first.

The free tier of the CryptoCompare API has an hourly limit of 6000 requests per IP address. Use them wisely! Remember that every student in the school is sharing the same IP address (6000 req / 60 min / 80 students = 1.25 avg requests per minute per student), and be sure to always check the docs before making an API request to understand how your request will count towards your allowed usage limit (hint: not all requests count as one request).

Further, make sure to choose a date range that will have minimal impact on your API limit.

Add a symbol explorer to allow users to look up the symbol for any currency and then display the chart for that symbol.
Extend the app to allow user selectable date range.
Deploy your app (and possibly your cached data) to either Heroku or Amazon ECS w/ Docker.

## Nightmare Mode
Replace ChartJS with any charting library of your choosing that supports OLHC bars (candlesticks) (https://www.highcharts.com/stock/demo/candlestick-and-volume).
Add additional technical indicators of your choosing; for example, 10-day moving average. Add as many indicators as you want.
Allow the indicators to be selectively turned on/off via the UI.
Write tests and use Nighwatch.js to confirm your app is working correctly.