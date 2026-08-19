// patches out server-only ai features for the offline mirror (pixlr's cloud backend isnt included here)
(function() {
    const blockedprefixes = ["/api/ai/", "/api/aif/", "/api/font/google", "/api/assets/"]
    const originalfetch = window.fetch
    window.fetch = function(input, init) {
        const url = typeof input === "string" ? input : (input && input.url) || ""
        let path = url
        try {path = new URL(url, location.href).pathname} catch (e) {}
        if (blockedprefixes.some(p => path.startsWith(p))) {
            document.dispatchEvent(new CustomEvent("notification", {detail: "this tool needs pixlr's online ai service, which isnt available in this offline mirror"}))
            return Promise.reject(new Error("offline mirror: blocked " + path))
        }
        return originalfetch.call(this, input, init)
    }
})()
