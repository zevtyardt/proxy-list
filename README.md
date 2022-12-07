
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

> Scraper found **4567** proxies at the latest update. Usable proxies are below.

## Usage

Click the file format that you want and copy the URL.

|File|Content|Count|
|----|-------|-----|
|[data.txt](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.txt)|`ip_address:port` combined (seperated new line)|272|
|[data.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.json)|`ip, port`|272|
|[data-with-geolocation.json](https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data-with-geolocation.json)|`ip, port, geolocation`|272|

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
|[proxyscrape.com](https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all)|695|✅|
|[github.com/clarketm/proxy-list](https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt)|400|✅|
|[github.com/monosans/proxy-list](https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt)|287|✅|
|[github.com/TheSpeedX/PROXY-List](https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt)|2234|✅|


## Sample Proxies With Geolocation Info

|#|Ip|Port|Country|City|Internet Service Provider|
|-|--|----|-------|----|-------------------------|
|1|194.94.196.139|80|Germany|Bonn|Verein zur Foerderung eines Deutschen Forschungsnetzes e.V.|
|2|194.94.196.138|80|Germany|Bonn|Verein zur Foerderung eines Deutschen Forschungsnetzes e.V.|
|3|64.225.97.57|8080|Germany|Frankfurt am Main|DigitalOcean, LLC|
|4|178.170.47.86|3128|France|Boulogne-Billancourt|Ikoula Net SAS|
|5|194.163.45.239|3128|United States|Phoenix|Hostinger International Limited|
|6|208.82.61.66|3128|United States|Ashburn|Bernardi Sounds|
|7|157.100.12.138|999|Ecuador|Loja|Telconet S.A|
|8|45.152.188.16|3128|United States|Ashburn|Sprint|
|9|194.195.90.215|8118|Singapore|Singapore|Contabo Asia Private Limited|
|10|181.215.178.58|1337|Netherlands|Amsterdam|NovoServe B.V.|
|11|158.160.1.43|3128|Russia|Moscow|Yandex.Cloud LLC|
|12|34.87.82.204|3128|Singapore|Singapore|Google LLC|
|13|144.217.7.157|9300|Canada|Beauharnois|OVH SAS|
|14|162.240.32.213|154|United States|Provo|Unified Layer|
|15|51.79.152.70|3128|Singapore|Singapore|OVH SAS|
|16|103.157.116.199|8080|Indonesia|Yogyakarta|PT Cloud Teknologi Nusantara|
|17|103.36.8.131|3125|Indonesia|Pandeglang|PT Awinet Global Mandiri|
|18|31.186.239.244|8080|Netherlands|Amsterdam|NetSkope Inc|
|19|116.203.202.160|8443|Germany|Nuremberg|Hetzner Online GmbH|
|20|75.126.253.8|8080|United States|Dallas|SoftLayer|



## Contributing

Contributions are welcome, and they are greatly appreciated! Every
little bit helps, and credit will always be given.

