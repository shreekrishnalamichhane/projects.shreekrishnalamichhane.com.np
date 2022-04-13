let card_wrapper = document.querySelector('.card-wrapper');

let renderDate = (created_at, updated_at) => {
    var c = new Date(created_at);
    var u = new Date(updated_at);
    let months = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[c.getMonth()] + ' ' + c.getFullYear() + '    -    ' + months[u.getMonth()] + ' ' + u.getFullYear();
}
// fetch('https://api.github.com/users/shreekrishnalamichhane/repos')
fetch('/data/projects.json')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((d) => {
            card_wrapper.innerHTML += `
            <card class="card cus-theme-background cus-theme-border p-4 my-5">
                        <div class="card-body">
                            <div class="row">
                                <img class="col-lg-4 col-md-4 col-sm-12 " src="${d.image}"
                                    height="185px" alt=""></img>
                                <div class="col-lg-8 col-md-8 col-sm-12">
                                    <h2 class="cus-color-complement text-decoration-none">${d.name}</h2>
                                    <p class="pt-2 cus-color-complement-accent-2">${d.description ? d.description : ''}                                    </p>
                                    <p class="cus-color-complement d-flex gap-5">
                                    ${d.technology != null ? '<strong class="cus-language">' + d.technology + '</strong>' : ""}
                                    ${d.language != null ? '<strong class="cus-language">' + d.language + '</strong>' : ""}
                                    <strong class="">${renderDate(d.date.created_at, d.date.updated_at)}</strong>
                                    </p>
                                    <div class="py-2 d-flex gap-2">
                                    ${d.source.disabled ? '' : '<a href="' + d.source.link + '" target="' + d.source.target + '}" class="btn btn-sm cus-theme-btn">Source Code</a>'}
                                    ${d.demo.disabled ? '' : '<a href="' + d.demo.link + '" target="' + d.demo.target + '}" class="btn btn-sm cus-theme-btn">Watch Demo</a>'}
                                    </div >
                                </div >
                            </div >
                        </div >
                    </card > `;
        });
    });