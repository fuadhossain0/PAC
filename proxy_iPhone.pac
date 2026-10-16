function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*:8787/*") ||
        shExpMatch(url, "*:8787")) {
        return "DIRECT";
    }
    return "SOCKS 192.168.10.101:7890; DIRECT";
}
