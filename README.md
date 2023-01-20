
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

> Scraper found **5600** proxies at the latest update. Usable proxies are below.

## Usage

Click the file format that you want and copy the URL.

|File|Content|Count|
|----|-------|-----|
|[data.txt](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.txt)|`ip_address:port` combined (seperated new line)|415|
|[data.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.json)|`ip, port`|415|
|[data-with-geolocation.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data-with-geolocation.json)|`ip, port, geolocation`|415|

## Sources

|Source|Found Proxies|Succeed|
|------|-------------|-------|
|[free-proxy-list.net](https://free-proxy-list.net)|300|✅|
|[us-proxy.org](https://www.us-proxy.org)|200|✅|
|[proxydb.net](http://proxydb.net)|15|✅|
|[free-proxy-list.com](https://free-proxy-list.com/?page=&port=&type%5B%5D=http&type%5B%5D=https&up_time=0&search=Search)|10|✅|
|[proxy-list.download](https://www.proxy-list.download/HTTP)|26|✅|
|[vpnoverview.com](https://vpnoverview.com/privacy/anonymous-browsing/free-proxy-servers)|0|🚫|
|[proxyscan.io](https://www.proxyscan.io)|78|✅|
|[proxylist.geonode.com](https://proxylist.geonode.com/api/proxy-list?limit=300&page=1&sort_by=lastChecked&sort_type=desc&protocols=http,https)|300|✅|
|[proxyscrape.com](https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all)|1078|✅|
|[github.com/clarketm/proxy-list](https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt)|400|✅|
|[github.com/monosans/proxy-list](https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt)|526|✅|
|[github.com/TheSpeedX/PROXY-List](https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt)|2667|✅|


## Sample Proxies With Geolocation Info

|#|Ip|Port|Country|City|Internet Service Provider|
|-|--|----|-------|----|-------------------------|
|1|135.181.194.155|3897|Finland|Helsinki|Hetzner Online GmbH|
|2|176.118.145.252|8080|Ukraine|Vinnytsia|VINASTERISK, PP|
|3|104.223.135.178|10000|United States|Los Angeles|LayerHost|
|4|178.89.186.82|3128|Kazakhstan|Karaganda|JSC Kazakhtelecom|
|5|49.0.2.242|8090|Indonesia|Bogor|PT Usaha Adi Sanggoro|
|6|115.144.101.200|10000|South Korea|Guri-si|Korea Telecom|
|7|8.219.97.248|80|Singapore|Singapore|Alibaba (US) Technology Co., Ltd.|
|8|205.185.126.246|3128|United States|Las Vegas|FranTech Solutions|
|9|107.172.73.179|7890|United States|Buffalo|ColoCrossing|
|10|205.185.126.246|3128|United States|Las Vegas|FranTech Solutions|
|11|118.27.113.167|8080|Japan|Chiyoda|GMO Internet, Inc.|
|12|82.99.194.30|3128|Iran|Tehran|ParsOnline Co.|
|13|107.172.73.179|7890|United States|Buffalo|ColoCrossing|
|14|47.243.55.21|8080|Hong Kong|Central|Alibaba (US) Technology Co., Ltd.|
|15|104.225.129.139|3128|United States|Jacksonville|Shock Hosting LLC|
|16|45.8.179.242|1337|United Kingdom|London|Hostland LLC|
|17|66.70.178.214|9300|Canada|Beauharnois|OVH SAS|
|18|185.217.137.216|1337|Seychelles|Cascade|Stallion Network Services Limited|
|19|185.39.50.2|1337|Germany|Blankenfelde|NETZNUTZ|
|20|104.223.135.178|10000|United States|Los Angeles|LayerHost|



## Contributing

Contributions are welcome, and they are greatly appreciated! Every
little bit helps, and credit will always be given.

