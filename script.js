const navbar = document.querySelector("nav")

function scroll2() {
    const scroll = document.documentElement.scrollTop

    if (scroll > 100) {
        navbar.classList.add("bg-dark")
        navbar.classList.remove("bg-transparent")
    } else {
        navbar.classList.remove("bg-dark")
        navbar.classList.add("bg-transparent")
    }
}

document.body.onscroll = (e) => {
    scroll2()
}

const rowFooter = document.querySelector(".row_footer")

for (const [i, data] of dataFooter.entries()) {
    const div = document.createElement("div")
    div.classList.add(
        "col-md-3",
        "col-6",
        "mt-4",
        "text-center",
        "text-md-start",
        "mt-md-0",
        "footer" + i
    )
    rowFooter.appendChild(div)

    for (const [j, dt] of data.entries()) {
        const col = document.querySelector(`.footer${i}`)

        const a = document.createElement("a")

        if (j === 0) {
            a.classList.add("fw-bold")
        }

        a.classList.add("d-block", "text-decoration-none", "text-white", "mb-2")
        a.textContent = dt

        col.appendChild(a)
    }
}
