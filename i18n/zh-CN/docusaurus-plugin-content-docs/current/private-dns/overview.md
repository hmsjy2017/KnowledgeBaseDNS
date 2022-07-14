---
title: Overview
sidebar_position: 1
---

# Private AdGuard DNS

![Private AdGuard DNS dashboard main](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/main.png)

## What is Private AdGuard DNS

Private AdGuard DNS is a DNS server that, in addition to benefits of a public DNS server (such as traffic encryption and domain blocklists), provides features like flexible customization, DNS statistics and parental control and is easily managed through a handy dashboard.

## Why Private AdGuard DNS is needed

Today, you can connect anything to the Internet: TVs, refrigerators, smart bulbs, or speakers. But along with the undeniable conveniences you get trackers and ads. A simple browser-based ad blocker will not protect you in this case, but AdGuard DNS, which you can set up to filter traffic, block content and trackers, has a system-wide effect.

我们已经有 [公共 AdGuard DNS](../public-dns/overview.md) 和 [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome)。 These solutions work fine for some users, but for others, the public AdGuard DNS lacks the flexibility of configuration, while the AdGuard Home lacks simplicity. That's where private AdGuard DNS comes into play. It has the best of both worlds: it offers customizability, control and information - all through a simple easy-to-use dashboard.

## The difference between Private and Public AdGuard DNS

Here is a simple comparison of features available in Public AdGuard DNS and Private AdGuard DNS servers.

| Public AdGuard DNS               | Private AdGuard DNS                                                                           |
| -------------------------------- | --------------------------------------------------------------------------------------------- |
| DNS traffic encryption           | DNS traffic encryption                                                                        |
| Pre-determined domain blocklists | Customizable domain blocklists                                                                |
| -                                | Custom DNS filtering rules with import/export feature                                         |
| -                                | Request statistics (see where do your DNS requests go: which countries, which companies etc.) |
| -                                | Detailed query log                                                                            |
| -                                | Parental control                                                                              |

## How to set up Private AdGuard DNS

1. 前往 [AdGuard DNS 仪表盘](https://adguard-dns.io/dashboard/)（如果没有登录，请使用您的 AdGuard 账号登录）
2. Click “Connect device” and follow on-screen instructions

> 支持的平台： - Android - iOS - Windows - Mac - Linux - 路由器 - 游戏机


## Private AdGuard DNS features

### Blocklists management

With "Blocklists" feature you can set which domains you want to block and which you don't. Сhoose from wide variety of blocklists for different purposes.

![Private AdGuard DNS dashboard blocklists](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### User rules

当预装的有数千条规则的*拦截列表*还不够时，我们有一个方便的功能，称为“用户规则”。 在这里，您可以手动添加自定义规则以 拦截/放行 某个域名或导入自定义规则列表（查看 [DNS 过滤规则语法](../general/dns-filtering-syntax.md)）。 You can export the lists.

![Private AdGuard DNS dashboard user rules](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/import.png)

### Statistics

In "Statistics" tab you can see all the summarized statistics on DNS queries made by devices connected to your Private AdGuard  DNS. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains.

![Private AdGuard DNS dashboard statistics](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Traffic destination

This feature shows you where DNS requests sent by your devices go. On top of seeing the map of request destinations, you can filter the information by date, device and country.

![Private AdGuard DNS dashboard traffic](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Companies

This tab allows you to quickly check which companies send the most requests, and which companies have the most blocked requests.

![Private AdGuard DNS dashboard companies](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/companies.png)

### Query log

This is a detailed log where you can check out the information on every single request and also sort requests by status, type, company, device, time, country.

![Private AdGuard DNS dashboard query log](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/query_log.png)

### Parental control

为了保护您的孩子免受您认为不合适的在线内容的影响，请设置并激活 *家长控制*选项。 除了 "成人内容 "拦截和安全搜索等选项外，我们还增加了手动指定拦截域名的功能，并为 *家长控制* 设置了相应的工作时间表

![Private AdGuard DNS dashboard Parental Control](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/parental_control.png)
> 如果您还没有私人 AdGuard DNS，您可以在[官网](https://adguard-dns.io/)上获得它。