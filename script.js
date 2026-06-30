const key = "the_n_discount_v1";

const result = document.getElementById("result");
const button = document.getElementById("drawBtn");

function generateCode() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let random = "";

    for (let i = 0; i < 6; i++) {
        random += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return "THE-N-" + random;
}

function show(data) {
    button.style.display = "none";

    result.innerHTML = `
        <h2>🎉 Congratulations!</h2>

        <div style="
            font-size:48px;
            color:#d4af37;
            font-weight:bold;
            margin:20px 0;
        ">
            ${data.discount}
        </div>

        <div style="
            background:#fff;
            color:#000;
            padding:15px;
            border-radius:12px;
            margin:20px 0;
        ">
            <strong>Discount Code</strong><br><br>

            <span style="
                font-size:28px;
                color:#d4af37;
                font-weight:bold;
                letter-spacing:2px;
            ">
                ${data.code}
            </span>
        </div>

        <p>Please keep this code and show it at checkout.</p>
    `;
}

const saved = localStorage.getItem(key);

const saved = localStorage.getItem(key);

if (saved) {

    show(JSON.parse(saved));

} else {

    button.addEventListener("click", function () {

        const discount = Math.random() < 0.5 ? "15%" : "20%";

        const data = {
            discount: discount,
            code: generateCode()
        };

        localStorage.setItem(key, JSON.stringify(data));

        show(data);

    });

}
