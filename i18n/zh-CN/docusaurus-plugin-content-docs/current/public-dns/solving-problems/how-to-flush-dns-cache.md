---
title: How to flush DNS cache
sidebar_position: 1
---

# How to flush DNS cache

## What is DNS cache?

DNS cache stores the IP addresses of visited sites on the local computer so that they load faster next time. Instead of doing a long DNS lookup, the system answers the queries with DNS records from the temporary DNS cache.

DNS 缓存包含所谓的[资源记录（RRs）](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records)，它们是：

* **资源数据（或 rdata）**；
* **记录类型**；
* **记录名字**；
* **TTL（生存时间）**；
* **类别**；
* **资源数据长度**。

## When you might need to clear the cache

**您经常会得到一个 404 错误。**>例如，该网站被转移到另一台服务器，其 IP 地址发生了变化。 To make the browser open the website from the new IP address, you need to remove the cached IP from the DNS cache.

**You want to improve your privacy.**

**您想保护自己免受黑客攻击和电脑病毒的影响。**当 DNS 缓存损坏时，浏览器可能会将您重定向到攻击者插入您计算机的 DNS 记录中的恶意网站的 IP 地址。

## How to flush DNS cache on different OSs

### macOS

要清除 macOS 上的 DNS 缓存，请打开终端（您可以使用 Spotlight 搜索找到它 - 然后，请按 Command+Space 输入 *Terminal*）并输入以下命令：

`sudo killall -HUP mDNSResponder`

On macOS Big Sur 11.2.0 and macOS Monterey 12.0.0, you may also use this command:

`sudo dscacheutil -flushcache`

After that, enter your administrator password to complete the process.

### Windows

To flush DNS cache on your Windows device, do the following:

Load the Command Prompt as an administrator. 你可以通过输入 *command prompt* 或 *cmd* 在开始菜单中找到它。 然后输入 `ipconfig/flushdns` 并按回车键。

您会看到这样一行：*成功刷新了 DNS 解析器缓存*。 Done!

### Linux

Linux does not have OS-level DNS caching unless a caching service such as Systemd Resolved, DNSMasq, BIND or Nscd is installed and running. The process of clearing the DNS cache depends on the Linux distribution and the caching service used.

For each distribution you need to start a terminal window. Press Ctrl+Alt+T on your keyboard and use the corresponding command to clear the DNS cache for the service your Linux system is running.

要找出您正在使用的 DNS 解析器，请使用命令 `sudo lsof -i :53 -S`。

#### Systemd Resolved

要清除 **Systemd Resolved** DNS 缓存，请输入：

`sudo systemd-resolve --flush-caches`

On success, the command doesn’t return any message.

#### DNSMasq

要清除 **DNSMasq** 缓存，您需要重新启动它：

`sudo service dnsmasq restart`

#### Nscd

要清除 **Nscd** 缓存，您还需要重新启动服务：

`sudo service nscd restart`

#### BIND

要刷新 **BIND** DNS 缓存，请运行以下命令：

`rndc flush`

Then you will need to reload BIND:

`rndc reload`

You will get the message that the server has been successfully reloaded.

### Android

The easiest way to clear your DNS cache on your Android device is to turn the Airplane mode on and off. You can enable/disable the Airplane Mode in the Quick Settings pane.

A hard reboot can also help flush the DNS cache for your device. In order to do that, press and hold the power button for at least 20 seconds. It will (usually) force your device to reboot manually and the DNS cache will be cleared.

Another option is to reset the network settings of your device in the Settings app. 打开*设置 >系统 > 高级 > 重置选项 > 重置网络设置* 并点击 *重置设置* 进行确认。

> Note: by doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.

### iOS

There are different ways to clear the DNS cache on your iPad or iPhone.

The simplest way is to activate the Airplane mode (for example, in the Control Center or in the Settings app) and to deactivate it again. The DNS cache will be flushed.

Another option is to reset the network settings of your device in the Settings app. 打开*常规*，向下滚动，找到*重置*然后点击*重置网络设置*。

> Note: by doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.