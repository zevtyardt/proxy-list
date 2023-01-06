
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

> Scraper found **5750** proxies at the latest update. Usable proxies are below.

## Usage

Click the file format that you want and copy the URL.

|File|Content|Count|
|----|-------|-----|
|[data.txt](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.txt)|`ip_address:port` combined (seperated new line)|214|
|[data.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.json)|`ip, port`|214|
|[data-with-geolocation.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data-with-geolocation.json)|`ip, port, geolocation`|214|

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
|[proxyscrape.com](https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all)|1254|✅|
|[github.com/clarketm/proxy-list](https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt)|400|✅|
|[github.com/monosans/proxy-list](https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt)|725|✅|
|[github.com/TheSpeedX/PROXY-List](https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt)|2688|✅|


## Sample Proxies With Geolocation Info

|#|Ip|Port|Country|City|Internet Service Provider|
|-|--|----|-------|----|-------------------------|
|1|94.237.3.45|8086|Singapore|Singapore|UpCloud Ltd|
|2|34.146.64.228|3128|Japan|Tokyo|Google LLC|
|3|178.47.139.151|35102|Russia|Moscow|PJSC Rostelecom|
|4|143.198.193.27|443|Singapore|Singapore|DigitalOcean, LLC|
|5|143.198.182.218|80|United States|North Bergen|DigitalOcean, LLC|
|6|145.255.30.241|8088|Russia|Ufa|JSC "Ufanet"|
|7|207.5.79.174|3128|United States|Roseville|Network Innovations|
|8|173.249.198.244|8080|United States|San Jose|tzulo, inc.|
|9|5.189.184.6|80|Germany|Nuremberg|Contabo GmbH|
|10|179.96.28.58|80|Brazil|Calcilandia|G8 NETWORKS LTDA|
|11|222.252.156.61|62694|Vietnam|Hanoi|VietNam Post and Telecom Corporation|
|12|190.214.52.226|53281|Ecuador|Guayaquil|Corporacion Nacional De Telecomunicaciones - CNT EP|
|13|112.87.140.163|9401|China|Suzhou|China Unicom CHINA169 Jiangsu Province Network|
|14|112.87.140.163|9401|China|Suzhou|China Unicom CHINA169 Jiangsu Province Network|
|15|204.137.172.37|999|Dominican Republic|Concepción de la Vega|Univegacomu Del Caribe SRL|
|16|213.6.148.85|9999|Palestine|Gaza|Palestine Telecommunications Company|
|17|181.209.114.194|999|Argentina|Apolinario Saravia|ARSAT - Empresa Argentina de Soluciones Satelitales S.A|
|18|181.129.49.214|999|Colombia|Medellín|EPM Telecomunicaciones S.A. E.S.P.|
|19|45.181.122.74|999|Chile|Santiago|Interpit Telecomunicaciones Ltda|
|20|190.61.84.166|9812|Costa Rica|San José|Ufinet Costa Rica|



## Contributing

Contributions are welcome, and they are greatly appreciated! Every
little bit helps, and credit will always be given.

