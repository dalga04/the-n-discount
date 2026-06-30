const key = "the_n_discount_v1";

const result = document.getElementById("result");
const button = document.getElementById("drawBtn");

function show(data) {
    button.style.display = "none";

    result.innerHTML = `
        <h2>🎉 مبروك!</h2>
        <h1>${data.discount}</h1>
        <p><strong>رقم الخصم</strong></p>
        <h2 style="color:#d4af37">${data.code}</h2>
        <p>احتفظ بهذا الرقم لإبراز الخصم.</p>
    `;
}

const saved = localStorage.getItem(key);

if (saved) {

    show(JSON.parse(saved));

} else {

    const discount = Math.random() < 0.5 ? "15%" : "20%";

    // يولد رقم خصم عشوائي
    const code = "TN-" + Math.floor(100000 + Math.random() * 900000);

    const data = {
        discount: discount,
        code: code
    };

    localStorage.setItem(key, JSON.stringify(data));

    show(data);
}
