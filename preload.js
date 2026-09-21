

function getVisitorid() {
    try{
        let id =localStorage.getItem("vid");
        if (!id){
            id = crypto.randomUUID();
            localStorage.setItem("vid",id);
        }
        return id;
    } catch(e){
        console.error(e)
        // BraveブラウザなどではNULL
        return null;
    }
}
let visittype="unknown"
try {visittype =localStorage.getItem("vid")?"再訪問者":"新規";}catch (e){}
const visitorid =getVisitorid();

console.log("visitorid:",visitorid);
// これから取得したいもの。各ページのアクセス時間
fetch("https://docs.google.com/forms/d/e/1FAIpQLScDYW3FrhRwRTQbKf999ke0V8xoiUaS-N7ksrBm8rrevPKWow/formResponse", {
  method: "POST",
  mode: "no-cors",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    // ページURL
    "entry.1656880812": location.pathname,
    // 訪問時刻
    "entry.365346222": new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }),
    // リファラー
    "entry.551082979": document.referrer || "direct",
    // ブラウザ情報
    "entry.860875126": navigator.userAgent,
    // VisitorID 失敗：原因Braveブラウザでブロックされてた。
    "entry.326999064" :visitorid,
    //  
    "entry.1513403685" :visittype,

  })
});