
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

> Scraper found **6638** proxies at the latest update. Usable proxies are below.

## Usage

Click the file format that you want and copy the URL.

|File|Content|Count|
|----|-------|-----|
|[data.txt](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.txt)|`ip_address:port` combined (seperated new line)|504|
|[data.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.json)|`ip, port`|504|
|[data-with-geolocation.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data-with-geolocation.json)|`ip, port, geolocation`|504|

## Sources

|Source|Found Proxies|Succeed|
|------|-------------|-------|
|[free-proxy-list.net](https://free-proxy-list.net)|300|✅|
|[us-proxy.org](https://www.us-proxy.org)|200|✅|
|[proxydb.net](http://proxydb.net)|15|✅|
|[free-proxy-list.com](https://free-proxy-list.com/?page=&port=&type%5B%5D=http&type%5B%5D=https&up_time=0&search=Search)|10|✅|
|[proxy-list.download](https://www.proxy-list.download/HTTP)|26|✅|
|[vpnoverview.com](https://vpnoverview.com/privacy/anonymous-browsing/free-proxy-servers)|0|🚫|
|[proxyscan.io](https://www.proxyscan.io)|0|🚫|
|[proxylist.geonode.com](https://proxylist.geonode.com/api/proxy-list?limit=300&page=1&sort_by=lastChecked&sort_type=desc&protocols=http,https)|300|✅|
|[proxyscrape.com](https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all)|1638|✅|
|[github.com/clarketm/proxy-list](https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt)|400|✅|
|[github.com/monosans/proxy-list](https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt)|959|✅|
|[github.com/TheSpeedX/PROXY-List](https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt)|2790|✅|


## Sample Proxies With Geolocation Info

|#|Ip|Port|Country|City|Internet Service Provider|
|-|--|----|-------|----|-------------------------|
|1|205.185.126.246|3128|United States|Las Vegas|FranTech Solutions|
|2|139.59.241.101|443|Singapore|Singapore|DigitalOcean, LLC|
|3|37.77.134.218|80|Russia|St Petersburg|Obit-Telecommunications Ltd.|
|4|112.217.162.5|3128|South Korea|Yangsan|LG DACOM Corporation|
|5|20.210.26.214|3128|Japan|Tokyo|Microsoft Corporation|
|6|45.42.177.39|3128|United States|Ashburn|Sprint|
|7|147.139.190.205|3128|Indonesia|Jakarta|Alibaba.com LLC|
|8|103.16.161.105|10000|Vietnam|Chúc Sơn|Httvserver Technology Company Limited|
|9|200.111.182.6|443|Chile|Santiago|Entel Chile S.A.|
|10|205.185.126.246|3128|United States|Las Vegas|FranTech Solutions|
|11|134.238.252.143|8080|India|Mumbai|Google LLC|
|12|51.79.50.22|9300|Canada|Beauharnois|OVH SAS|
|13|158.69.52.218|9300|Canada|Montreal|OVH SAS|
|14|104.131.19.48|3128|United States|Clifton|DigitalOcean, LLC|
|15|51.159.115.233|3128|France|Paris|SCALEWAY|
|16|176.101.177.209|8080|Slovakia|Topoľčany|Wircom s.r.o.|
|17|37.32.8.192|80|Iran|Tehran|Noyan Abr Arvan Co. ( Private Joint Stock)|
|18|129.226.15.129|80|Hong Kong|Central|Tencent Cloud Computing (Beijing) Co|
|19|88.210.20.144|20000|Russia|Odintsovo|LLC KMS-KOM|
|20|186.96.167.253|999|Mexico|Texcoco|Total Play Telecomunicaciones SA De CV|



## Contributing

Contributions are welcome, and they are greatly appreciated! Every
little bit helps, and credit will always be given.

