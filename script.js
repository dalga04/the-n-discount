const button = document.getElementById("drawBtn");
const result = document.getElementById("result");

button.onclick = function () {

    let saved = localStorage.getItem("the_n_discount");

    if (saved) {
        const data = JSON.parse(saved);

        result.innerHTML = `
            <h2>🎉 Congratulations!</h2>
            <h1>${data.discount}</h1>
            <h3>${data.code}</h3>
        `;

        button.style.display = "none";
        return;
    }

    const discount = Math.random() < 0.5 ? "15%" : "20%";

    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "THE-N-";

    for (let i = 0; i < 6; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }

    const data = {
        discount: discount,
        code: code
    };

    localStorage.setItem("the_n_discount", JSON.stringify(data));

    result.innerHTML = `
        <h2>🎉 Congratulations!</h2>
        <h1>${discount}</h1>
        <h3>${code}</h3>
    `;

    button.style.display = "none";
};
