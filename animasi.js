const texts = ["Frontend Dev", "UI/UX Designer"];
        let i = 0, j = 0, deleting = false;

        setInterval(() => {
        let current = texts[i];
        if (!deleting) {
            j++;
            if (j === current.length + 1) {
            deleting = true;
            }
        } else {
            j--;
            if (j === 0) {
            deleting = false;
            i = (i + 1) % texts.length;
            }
        }
        document.getElementById("typing").textContent = current.slice(0, j);
        }, 90);

    const textsDesc = [
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolore, iure labore ducimus doloribus nemo ratione repellat sapiente minima, omnis velit dolorem quis debitis libero adipisci minus quod architecto aliquid."
    ];
    let i2 = 0, j2 = 0;

    setInterval(() => {
        let current = textsDesc[i2];
        if (j2 < current.length) {
            j2++;
            document.getElementById("deskripsi").textContent = current.slice(0, j2);
        }
    }, 10);