event.currentTarget.querySelectorAll('button') 可以選到所有的 <button> 元素，因為 event.currentTarget 指向事件處理器附加的元素，也就是你將 handleColorButtonClick 綁定到的容器元素（例如某個 <div> 或 <section>），這個容器裡包含了所有的 <button> 元素。

具體來說：

event.currentTarget：代表觸發事件處理器的元素，也就是事件被綁定到的容器。

.querySelectorAll('button')：在 event.currentTarget 這個容器範圍內搜尋所有的 <button> 元素，返回一個 NodeList，包含該範圍內所有匹配的 <button>。

因此，無論點擊了容器內的哪一個 <button>，都能取得這個容器內所有的 <button> 元素並進行操作，如刪除或添加樣式。

---
