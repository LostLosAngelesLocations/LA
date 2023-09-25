let imgs;
let page = 1;
let numPerPage = 4;

function enlarge() {
    const e = window.event;
    const el = e.target || e.srcElement;
    const overlayEl = document.createElement('div');
    const closeEl = document.createElement('a');

    closeEl.href = 'javascript:void(0)'

    closeEl.onclick = () => overlayEl.remove();

    closeEl.className = 'close-win';

    closeEl.innerText = 'X';

    overlayEl.id = 'overlay';

    const cloneImg = el.cloneNode();

    cloneImg.className = 'enlargedImg';

    overlayEl.appendChild(closeEl);
    overlayEl.appendChild(cloneImg);

    document.body.appendChild(overlayEl);
}

function prev() {
    const oldPage = page;

    page--;

    if (page < 1)
        page = 1;

    if (oldPage === page) return;

    loadPage();
}

function next() {
    const oldPage = page;

    page++;

    const lastPage = Math.ceil(imgs.length / numPerPage)

    if (page > lastPage)
        page = lastPage;

    if (oldPage === page) return;

    loadPage();
}

function loadPage() {
    let idx = (page * numPerPage) - numPerPage;

    for (let i = 1; i <= numPerPage; i++) {
        let cellHTML = '';

        if (imgs[idx])
            cellHTML = `
                <img src="${imgs[idx]}" />
            `;

        idx++;

        document.getElementById('img' + i).innerHTML = cellHTML;
    }
}

async function loadImages() {
    await fetch('images/art/list.json')
        .then(res => res.json())
        .then(res => imgs = res)

    loadPage();
}

loadImages();