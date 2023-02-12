
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

> Scraper found **5387** proxies at the latest update. Usable proxies are below.

## Usage

Click the file format that you want and copy the URL.

|File|Content|Count|
|----|-------|-----|
|[data.txt](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.txt)|`ip_address:port` combined (seperated new line)|524|
|[data.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.json)|`ip, port`|524|
|[data-with-geolocation.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data-with-geolocation.json)|`ip, port, geolocation`|524|

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
|[proxyscrape.com](https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all)|1173|✅|
|[github.com/clarketm/proxy-list](https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt)|400|✅|
|[github.com/monosans/proxy-list](https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt)|511|✅|
|[github.com/TheSpeedX/PROXY-List](https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt)|2620|✅|


## Sample Proxies With Geolocation Info

|#|Ip|Port|Country|City|Internet Service Provider|
|-|--|----|-------|----|-------------------------|
|1|20.242.203.179|3128|United States|Boydton|Microsoft Corporation|
|2|88.198.59.87|3128|Germany|Falkenstein|Hetzner Online GmbH|
|3|155.248.197.241|9898|United States|San Jose|Oracle Corporation|
|4|45.63.19.52|3128|United States|Piscataway|Choopa|
|5|201.150.118.42|999|Mexico|Actopan|Hulux Telecomunicaciones|
|6|104.223.135.178|10000|United States|Los Angeles|LayerHost|
|7|95.85.24.83|8118|Netherlands|Amsterdam|DigitalOcean, LLC|
|8|23.95.94.41|3128|United States|Dallas|ColoCrossing|
|9|115.144.102.39|10080|South Korea|Gangdong-gu|Korea Telecom|
|10|213.247.123.57|3128|Netherlands|Amsterdam|Routit BV|
|11|104.248.26.29|3128|Germany|Frankfurt am Main|DigitalOcean, LLC|
|12|170.2.210.201|80|United States|Portland|Daimler Trucks of North America LLC|
|13|5.75.171.241|3128|Germany|Nuremberg|Hetzner Online GmbH|
|14|44.232.253.196|3128|United States|Portland|Amazon.com, Inc.|
|15|51.250.101.77|3128|Russia|Moscow|Yandex.Cloud LLC|
|16|31.186.239.244|8080|Netherlands|Amsterdam|NetSkope Inc|
|17|201.17.26.54|80|Brazil|Rio de Janeiro|Claro NXT Telecomunicacoes Ltda|
|18|3.139.99.154|3128|United States|Dublin|Amazon.com, Inc.|
|19|66.70.178.214|9300|Canada|Beauharnois|OVH SAS|
|20|185.143.173.123|3128|Russia|Moscow|OOO "Network of data-centers "Selectel"|



## Contributing

Contributions are welcome, and they are greatly appreciated! Every
little bit helps, and credit will always be given.

