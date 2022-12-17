
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

> Scraper found **6961** proxies at the latest update. Usable proxies are below.

## Usage

Click the file format that you want and copy the URL.

|File|Content|Count|
|----|-------|-----|
|[data.txt](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.txt)|`ip_address:port` combined (seperated new line)|635|
|[data.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.json)|`ip, port`|635|
|[data-with-geolocation.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data-with-geolocation.json)|`ip, port, geolocation`|635|

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
|[proxylist.geonode.com](https://proxylist.geonode.com/api/proxy-list?limit=300&page=1&sort_by=lastChecked&sort_type=desc&protocols=http,https)|0|🚫|
|[proxyscrape.com](https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all)|1824|✅|
|[github.com/clarketm/proxy-list](https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt)|400|✅|
|[github.com/monosans/proxy-list](https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt)|1105|✅|
|[github.com/TheSpeedX/PROXY-List](https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt)|3081|✅|


## Sample Proxies With Geolocation Info

|#|Ip|Port|Country|City|Internet Service Provider|
|-|--|----|-------|----|-------------------------|
|1|75.126.253.8|8080|United States|Dallas|SoftLayer|
|2|31.186.239.246|8080|Netherlands|Amsterdam|NetSkope Inc|
|3|31.186.239.245|8080|Netherlands|Amsterdam|NetSkope Inc|
|4|187.130.139.197|8080|Mexico|Mazatlán|Uninet S.A. de C.V.|
|5|5.39.105.211|3128|France|Lyon|OVH SAS|
|6|129.226.15.129|80|Hong Kong|Central|Tencent Cloud Computing (Beijing) Co|
|7|51.159.115.233|3128|France|Paris|SCALEWAY|
|8|75.126.253.8|8080|United States|Dallas|SoftLayer|
|9|59.124.62.9|3128|Taiwan|Taipei|Chunghwa Telecom Co., Ltd.|
|10|134.238.252.143|8080|India|Mumbai|Google LLC|
|11|118.27.113.167|8080|Japan|Chiyoda|GMO Internet, Inc.|
|12|152.32.187.164|8118|Hong Kong|Central|UCLOUD INFORMATION TECHNOLOGY (HK) LIMITED|
|13|146.190.108.4|8118|Singapore|Singapore|DigitalOcean|
|14|157.245.27.9|3128|Germany|Frankfurt am Main|DigitalOcean, LLC|
|15|223.205.72.101|8080|Thailand|Nong Chok|Triple T Broadband Public Company Limited|
|16|20.121.184.238|443|United States|Boydton|Microsoft Corporation|
|17|93.177.73.122|8888|Germany|Frankfurt am Main|M247 Europe SRL|
|18|147.139.173.19|3128|Indonesia|Jakarta|Alibaba.com LLC|
|19|36.82.122.3|80|Indonesia|Lamongan|PT. TELKOM INDONESIA|
|20|91.108.137.237|8080|Iran|Behbahan|Rayaneh Gostar Farzanegan Ahvaz LTD|



## Contributing

Contributions are welcome, and they are greatly appreciated! Every
little bit helps, and credit will always be given.

