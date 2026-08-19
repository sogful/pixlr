if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist()
}
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
