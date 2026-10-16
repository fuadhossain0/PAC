function FindProxyForURL(url, host) {
    // Bypass proxy for WinSend on port 8787
    if (shExpMatch(url, "*:8787/*") ||
        shExpMatch(url, "*:8787")) {
        return "DIRECT";
    }

    // Other traffic uses SOCKS proxy, with direct fallback
    return "SOCKS 192.168.10.101:7890; DIRECT";
}
