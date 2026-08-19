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

// request persistent storage so temporary projects in indexeddb dont get evicted under storage pressure
if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist()
}

// wire the import zip button next to backup as zip -- feeds the chosen file through the
// same drop handler the editor already uses to open .pxz/.zip files, so the existing
// backup-zip-aware open logic (and its dedup check) runs unmodified
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("history-import")
    const input = document.getElementById("history-import-input")
    if (!button || !input) return
    button.addEventListener("click", function() {input.click()})
    input.addEventListener("change", function() {
        const file = input.files && input.files[0]
        input.value = ""
        if (!file) return
        const transfer = new DataTransfer()
        transfer.items.add(file)
        const event = new DragEvent("drop", {bubbles: true, cancelable: true})
        Object.defineProperty(event, "dataTransfer", {value: transfer})
        document.dispatchEvent(event)
    })
})
