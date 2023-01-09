
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

> Scraper found **5716** proxies at the latest update. Usable proxies are below.

## Usage

Click the file format that you want and copy the URL.

|File|Content|Count|
|----|-------|-----|
|[data.txt](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.txt)|`ip_address:port` combined (seperated new line)|254|
|[data.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.json)|`ip, port`|254|
|[data-with-geolocation.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data-with-geolocation.json)|`ip, port, geolocation`|254|

## Sources

|Source|Found Proxies|Succeed|
|------|-------------|-------|
|[free-proxy-list.net](https://free-proxy-list.net)|300|✅|
|[us-proxy.org](https://www.us-proxy.org)|200|✅|
|[proxydb.net](http://proxydb.net)|15|✅|
|[free-proxy-list.com](https://free-proxy-list.com/?page=&port=&type%5B%5D=http&type%5B%5D=https&up_time=0&search=Search)|10|✅|
|[proxy-list.download](https://www.proxy-list.download/HTTP)|26|✅|
|[vpnoverview.com](https://vpnoverview.com/privacy/anonymous-browsing/free-proxy-servers)|32|✅|
|[proxyscan.io](https://www.proxyscan.io)|100|✅|
|[proxylist.geonode.com](https://proxylist.geonode.com/api/proxy-list?limit=300&page=1&sort_by=lastChecked&sort_type=desc&protocols=http,https)|0|🚫|
|[proxyscrape.com](https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all)|1456|✅|
|[github.com/clarketm/proxy-list](https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt)|400|✅|
|[github.com/monosans/proxy-list](https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt)|597|✅|
|[github.com/TheSpeedX/PROXY-List](https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt)|2580|✅|


## Sample Proxies With Geolocation Info

|#|Ip|Port|Country|City|Internet Service Provider|
|-|--|----|-------|----|-------------------------|
|1|205.209.99.153|80|United States|Englewood Cliffs|Interserver, Inc|
|2|47.243.55.21|8080|Hong Kong|Central|Alibaba (US) Technology Co., Ltd.|
|3|104.223.135.178|10000|United States|Los Angeles|LayerHost|
|4|205.209.99.153|80|United States|Englewood Cliffs|Interserver, Inc|
|5|143.198.166.215|3128|United States|North Bergen|DigitalOcean, LLC|
|6|129.213.95.20|80|United States|Ashburn|Oracle Corporation|
|7|212.80.213.94|8000|Thailand|Nonthaburi|Siamdata Communication Co.|
|8|115.144.101.200|10000|South Korea|Guri-si|Korea Telecom|
|9|132.145.232.221|3128|Germany|Frankfurt am Main|Oracle Corporation|
|10|112.87.140.163|9401|China|Suzhou|China Unicom CHINA169 Jiangsu Province Network|
|11|181.205.106.106|9812|Colombia|Medellín|EPM Telecomunicaciones S.A. E.S.P.|
|12|146.70.80.76|80|Denmark|Christianshavn|M247 Europe SRL|
|13|103.115.23.66|8080|Myanmar|Tachilek|AST SYSTEM TECHNOLOGY COMPANY LIMITED|
|14|45.189.255.18|999|Mexico|Medellin de Bravo|Wantelco SAS de CV|
|15|103.193.119.126|8080|Indonesia|Bogor|STARNET|
|16|103.163.36.133|8090|Indonesia|Tawangrejo|PT Data Buana Nusantara|
|17|41.242.116.150|50000|Mayotte|Mamoudzou|STOI-block1|
|18|50.232.250.157|8080|United States|Bellingham|Comcast Cable Communications, LLC|
|19|110.171.84.180|8080|Thailand|Thon Buri|True Internet Corporation CO. Ltd.|
|20|46.101.13.77|80|United Kingdom|London|DigitalOcean, LLC|



## Contributing

Contributions are welcome, and they are greatly appreciated! Every
little bit helps, and credit will always be given.

