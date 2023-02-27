
# Free HTTP Proxy List 🌍

[![Every 10 Minutes Update](https://github.com/mertguvencli/http-proxy-list/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/mertguvencli/http-proxy-list/actions/workflows/main.yml)
![GitHub](https://img.shields.io/github/license/mertguvencli/http-proxy-list)
![GitHub last commit](https://img.shields.io/github/last-commit/mertguvencli/http-proxy-list)
[![zevtyardt - proxy-list](https://img.shields.io/static/v1?label=zevtyardt&message=proxy-list&color=blue&logo=github)](https://github.com/zevtyardt/proxy-list "Go to GitHub repo")
[![stars - proxy-list](https://img.shields.io/github/stars/zevtyardt/proxy-list?style=social)](https://github.com/zevtyardt/proxy-list)
[![forks - proxy-list](https://img.shields.io/github/forks/zevtyardt/proxy-list?style=social)](https://github.com/zevtyardt/proxy-list)
[![Proxy Updater](https://github.com/zevtyardt/proxy-list/workflows/Proxy%20Updater/badge.svg)](https://github.com/zevtyardt/proxy-list/actions?query=workflow:"Proxy+Updater")
![GitHub repo size](https://img.shields.io/github/repo-size/zevtyardt/proxy-list)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/zevtyardt/proxy-list?logo=commits)](https://github.com/zevtyardt/proxy-list/commits/main)

It is a lightweight project that, every 10 minutes, scrapes lots of free-proxy sites, validates if it works, and serves a clean proxy list.

> Scraper found **6666** proxies at the latest update. Usable proxies are below.

## Usage

Click the file format that you want and copy the URL.

|File|Content|Count|
|----|-------|-----|
|[data.txt](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.txt)|`ip_address:port` combined (seperated new line)|503|
|[data.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.json)|`ip, port`|503|
|[data-with-geolocation.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data-with-geolocation.json)|`ip, port, geolocation`|503|

## Sources

|Source|Found Proxies|Succeed|
|------|-------------|-------|
|[free-proxy-list.net](https://free-proxy-list.net)|300|✅|
|[us-proxy.org](https://www.us-proxy.org)|200|✅|
|[proxydb.net](http://proxydb.net)|15|✅|
|[free-proxy-list.com](https://free-proxy-list.com/?page=&port=&type%5B%5D=http&type%5B%5D=https&up_time=0&search=Search)|10|✅|
|[proxy-list.download](https://www.proxy-list.download/HTTP)|26|✅|
|[vpnoverview.com](https://vpnoverview.com/privacy/anonymous-browsing/free-proxy-servers)|32|✅|
|[proxyscan.io](https://www.proxyscan.io)|0|✅|
|[proxylist.geonode.com](https://proxylist.geonode.com/api/proxy-list?limit=300&page=1&sort_by=lastChecked&sort_type=desc&protocols=http,https)|300|✅|
|[proxyscrape.com](https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all)|1468|✅|
|[github.com/clarketm/proxy-list](https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt)|400|✅|
|[github.com/monosans/proxy-list](https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt)|994|✅|
|[github.com/TheSpeedX/PROXY-List](https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt)|2921|✅|


## Sample Proxies With Geolocation Info

|#|Ip|Port|Country|City|Internet Service Provider|
|-|--|----|-------|----|-------------------------|
|1|185.246.84.7|8080|France|Paris|Ikoula Net SAS|
|2|195.201.39.119|8080|Germany|Gunzenhausen|Hetzner Online GmbH|
|3|5.78.50.231|8888|United States|Portland|Hetzner Online GmbH|
|4|201.17.26.54|80|Brazil|Rio de Janeiro|Claro NXT Telecomunicacoes Ltda|
|5|5.75.227.243|8080|Germany|Falkenstein|Hetzner Online GmbH|
|6|5.78.50.231|8888|United States|Portland|Hetzner Online GmbH|
|7|51.68.97.175|7890|France|Strasbourg|OVH SAS|
|8|119.8.236.97|3128|Hong Kong|Hong Kong|Huawei International Pte. Ltd.|
|9|49.0.2.242|8090|Indonesia|Bogor|PT Usaha Adi Sanggoro|
|10|116.98.183.158|10003|Vietnam|Tan Tien|Viettel Corporation|
|11|4.144.128.48|80|Singapore|Singapore|Microsoft Corporation|
|12|116.98.229.237|10003|Vietnam|Hanoi|Viettel Corporation|
|13|181.198.97.1|1994|Ecuador|Santa Isabel|Telconet S.A|
|14|198.211.27.215|3128|United States|Canyon Country|Multacom Corporation|
|15|116.98.180.150|10003|Vietnam|Tan Tien|Viettel Corporation|
|16|116.98.176.225|10003|Vietnam|Tan Tien|Viettel Corporation|
|17|181.191.226.199|999|Venezuela|Maturín||
|18|187.102.216.129|999|Argentina|Montecarlo|Cretton Lisandro Maximiliano|
|19|116.98.190.215|10003|Vietnam|Quảng Phú|Viettel Corporation|
|20|109.94.101.77|53281|Serbia|Cuprija|Samostalna Zanatska i Trgovinska Radnja Intercom Computers Goran Stojkovic Pred|



## Contributing

Contributions are welcome, and they are greatly appreciated! Every
little bit helps, and credit will always be given.

