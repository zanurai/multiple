
let limit = 200;
let x = 1;
function printTable(limit) {
    const table = document.getElementById("table");

    for (let x = 1; x <= limit; x++) {
        const box = document.createElement("div");
        // box.style.padding = "15px";
        // box.style.border = "1px solid black";
        // box.style.width = "100px"
        box.classList.add("box");

        for (let y = 1; y <= 10; y++) {
            const row = document.createElement("div");
            //console.log(y);

            row.innerHTML = x + " x " + y + " = " + x * y;
            box.appendChild(row);
            //console.log(row)
        }

        table.appendChild(box);
    }
};
printTable(limit);

