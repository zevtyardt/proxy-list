
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

> Scraper found **6379** proxies at the latest update. Usable proxies are below.

## Usage

Click the file format that you want and copy the URL.

|File|Content|Count|
|----|-------|-----|
|[data.txt](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.txt)|`ip_address:port` combined (seperated new line)|457|
|[data.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.json)|`ip, port`|457|
|[data-with-geolocation.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data-with-geolocation.json)|`ip, port, geolocation`|457|

## Sources

|Source|Found Proxies|Succeed|
|------|-------------|-------|
|[free-proxy-list.net](https://free-proxy-list.net)|300|✅|
|[us-proxy.org](https://www.us-proxy.org)|200|✅|
|[proxydb.net](http://proxydb.net)|15|✅|
|[free-proxy-list.com](https://free-proxy-list.com/?page=&port=&type%5B%5D=http&type%5B%5D=https&up_time=0&search=Search)|10|✅|
|[proxy-list.download](https://www.proxy-list.download/HTTP)|26|✅|
|[vpnoverview.com](https://vpnoverview.com/privacy/anonymous-browsing/free-proxy-servers)|0|🚫|
|[proxyscan.io](https://www.proxyscan.io)|100|✅|
|[proxylist.geonode.com](https://proxylist.geonode.com/api/proxy-list?limit=300&page=1&sort_by=lastChecked&sort_type=desc&protocols=http,https)|300|✅|
|[proxyscrape.com](https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all)|1579|✅|
|[github.com/clarketm/proxy-list](https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt)|400|✅|
|[github.com/monosans/proxy-list](https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt)|618|✅|
|[github.com/TheSpeedX/PROXY-List](https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt)|2831|✅|


## Sample Proxies With Geolocation Info

|#|Ip|Port|Country|City|Internet Service Provider|
|-|--|----|-------|----|-------------------------|
|1|172.120.119.209|9527|United States|Santa Clara|EGIHosting|
|2|115.144.101.200|10000|South Korea|Guri-si|Korea Telecom|
|3|31.186.239.245|8080|Netherlands|Amsterdam|NetSkope Inc|
|4|37.112.57.47|8080|Russia|Bryansk|CJSC "ER-Telecom Holding" Bryansk branch|
|5|205.185.126.246|3128|United States|Las Vegas|FranTech Solutions|
|6|51.79.50.31|9300|Canada|Victoria|OVH SAS|
|7|205.185.126.246|3128|United States|Las Vegas|FranTech Solutions|
|8|47.243.55.21|8080|Hong Kong|Central|Alibaba (US) Technology Co., Ltd.|
|9|31.186.239.246|8080|Netherlands|Amsterdam|NetSkope Inc|
|10|14.207.16.135|8080|Thailand|Bang Lamung|Triple T Broadband Public Company Limited|
|11|193.123.103.34|8080|Brazil|Vinhedo|Oracle Corporation|
|12|134.122.58.174|80|Netherlands|Amsterdam|DigitalOcean, LLC|
|13|90.114.27.196|3128|France|Annemasse|TVCCONV|
|14|190.110.99.189|999|Chile|San Vicente de Tagua Tagua|Silica Networks Argentina S.A.|
|15|104.223.135.178|10000|United States|Los Angeles|LayerHost|
|16|192.158.15.201|60684|Canada|Vaughan|Ontario Inc.|
|17|78.36.1.204|3128|Russia|Kola|PJSC "Rostelecom" North-West region|
|18|185.150.130.103|808|Turkey|Izmir|Alastyr Telekomunikasyon A.S.|
|19|188.166.241.174|443|Singapore|Singapore|DigitalOcean, LLC|
|20|212.14.243.29|8080|Palestine|Nablus|PALTEL (Palestine Telecommunications Co.).|



## Contributing

Contributions are welcome, and they are greatly appreciated! Every
little bit helps, and credit will always be given.

