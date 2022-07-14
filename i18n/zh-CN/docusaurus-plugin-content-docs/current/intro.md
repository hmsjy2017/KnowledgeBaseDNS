---
title: Overview
sidebar_position: 1
slug: /
---

## DNS 是什么

DNS stands for "Domain name system", and its purpose is to convert websites' names into IP addresses. Each time you go to a website, your browser sends a DNS query to a DNS server to figure out the IP address of the website. And a regular DNS resolver simply returns the IP address of the requested domain.

> The default DNS server is usually provided by your ISP. This means that your ISP can track your online activity and sell logs to third parties.

![Your device always uses some DNS server to obtain IP addresses of the domain name apps want to navigate to](https://cdn.adguard.com/public/Adguard/Blog/scr1.png)

There are also DNS servers that can block certain websites at DNS level. How do they work? When your device sends a "bad" request, be it an ad or a tracker, a DNS server prevents the connection by responding with a non routable IP address for a blocked domain.

## Why use DNS for content blocking

Absolutely everything is connected to the Internet these days, from TV to smart light bulbs, from mobile devices to smart auto. And where the Internet is, there are ads and trackers. In this case, a browser-based ad blocker seems to be not enough. To get a better protection, use DNS in combination with VPN and ad blocker.

Using DNS for content blocking has some advantages as well as obvious flaws. On the one hand, DNS has no blind spots since it observes all devices and not just the browsers. But, on the other hand, DNS blocking alone cannot provide cosmetic filtering.

## AdGuard DNS 是什么

AdGuard DNS is one of the most privacy-friendly DNS services on the market. 它支持如此可靠的加密协议，例如 DNS-over-HTTPS，DNS-over-TLS和DNS-over-Quic。 It can work as a regular DNS resolver in Non-filtering mode, but also it can provide DNS level content blocking: identify requests to ad, tracking, and/or adult domains (optionally), and respond with an empty response. AdGuard has its own base of domain names that serve ads, trackers, and fraud, and it is regularly updated.

![An approximate scheme of how AdGuard DNS works](https://cdn.adguard.com/public/Adguard/Blog/scr2.png)

> About 75% of AdGuard DNS traffic is encrypted. This is actually what differentiates content blocking DNS servers from others. If you take a look at CloudFlare or Quad9 stats, you’ll see that encrypted DNS is just a small share of all queries.

AdGuard DNS 主要有两种形式：[公共 AdGuard DNS](public-dns/overview.md) 和 [私人 AdGuard DNS](private-dns/overview.md) Both of these services do not require installing any apps. They are easy to set up and use, and provide users with the minimum features necessary to block ads, trackers, malicious websites, and adult content (if required). There are no restrictions on what devices they can be used with.

Despite so many similarities, private AdGuard DNS and public AdGuard DNS are two different services. Their main difference is that you can customize private AdGuard DNS, while public AdGuard DNS cannot.

## DNS filtering module in AdGuard products

所有主要的 AdGuard 产品，包括 AdGuard VPN，都有一个 **DNS 过滤模块**，您可以通过信任的提供商选择 DNS 服务器。 Of course, AdGuard DNS Default, AdGuard DNS Non-filtering and AdGuard DNS Family Protection are on the list. 另外，AdGuard 应用程序允许用户[轻松配置和使用 Adguard DNS](https://adguard-dns.io/en/public-dns.html)，包括公共或私人版本。







