// note: the fetch patch that blocks ai/asset endpoints and stubs geoip/country lives
// inline in index.html's <head>, so it's active before web.js/editor.js load and can
// catch their earliest calls -- see there instead of here.

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
