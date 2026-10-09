const members = [
  { name: "RM", role: "Leader · Rapper", number: "01", hue: "#53475f", light: "#b4a0ca", bio: "Kim Namjoon is BTS's leader and a rapper known for thoughtful lyricism, a love of language, and a curious, reflective point of view." },
  { name: "Jin", role: "Vocalist", number: "02", hue: "#514759", light: "#c5a7bb", bio: "Kim Seokjin is a vocalist whose warm tone and bright humor bring a distinct color to BTS's music and the group's shared moments." },
  { name: "SUGA", role: "Rapper · Producer", number: "03", hue: "#514b5c", light: "#acb1c7", bio: "Min Yoongi is a rapper, songwriter, and producer whose candid writing and precise musical instincts shape many shades of BTS's sound." },
  { name: "j-hope", role: "Rapper · Dancer", number: "04", hue: "#65503e", light: "#dfbb89", bio: "Jung Hoseok is a rapper and dancer celebrated for expressive performance, rhythmic precision, and an unmistakable sense of brightness." },
  { name: "Jimin", role: "Vocalist · Dancer", number: "05", hue: "#614b59", light: "#d6a9bd", bio: "Park Jimin is a vocalist and dancer whose expressive voice and fluid movement bring an emotional, graceful presence to the stage." },
  { name: "V", role: "Vocalist", number: "06", hue: "#4b5362", light: "#a7bad1", bio: "Kim Taehyung is a vocalist known for his distinctive, rich tone, artistic curiosity, and quietly magnetic performance style." },
  { name: "Jung Kook", role: "Vocalist · Performer", number: "07", hue: "#43525a", light: "#a2c0bc", bio: "Jeon Jungkook is a vocalist and performer whose versatility, focused craft, and adventurous spirit have grown alongside BTS." }
];

const albums = [
  { title: "2 Cool 4 Skool", date: "2013.06.12", type: "single", format: "Single album", source: "https://bts.ibighit.com/eng/discography/detail/2_cool_4_school.html" },
  { title: "O!RUL8,2?", date: "2013.09.11", type: "ep", format: "EP", source: "https://bts.ibighit.com/eng/discography/detail/o_rul8_2.html" },
  { title: "Skool Luv Affair", date: "2014.02.12", type: "ep", format: "EP", source: "https://bts.ibighit.com/eng/discography/detail/skool_luv_affair.html" },
  { title: "Dark & Wild", date: "2014.08.20", type: "studio", format: "Studio album", source: "https://bts.ibighit.com/eng/discography/detail/dark_and_wild.html" },
  { title: "The Most Beautiful Moment in Life: Young Forever", date: "2016.05.02", type: "special", format: "Special album", source: "https://bts.ibighit.com/eng/discography/detail/hwayangyeonhwa-young_forever.html" },
  { title: "WINGS", date: "2016.10.10", type: "studio", format: "Studio album", source: "https://bts.ibighit.com/eng/discography/detail/wings.html" },
  { title: "You Never Walk Alone", date: "2017.02.13", type: "special", format: "Special album", source: "https://bts.ibighit.com/eng/discography/detail/you_never_walk_alone.html" },
  { title: "LOVE YOURSELF 轉 'Tear'", date: "2018.05.18", type: "studio", format: "Studio album", source: "https://bts.ibighit.com/eng/discography/detail/love_yourself-tear.html" },
  { title: "LOVE YOURSELF 結 'Answer'", date: "2018.08.24", type: "studio", format: "Repackage", source: "https://bts.ibighit.com/eng/discography/detail/love_yourself-answer.html" },
  { title: "MAP OF THE SOUL: 7", date: "2020.02.21", type: "studio", format: "Studio album", source: "https://bts.ibighit.com/eng/discography/detail/map_of_the_soul-7.html" },
  { title: "BE", date: "2020.11.20", type: "studio", format: "Studio album", source: "https://bts.ibighit.com/eng/discography/detail/be.html" },
  { title: "Butter", date: "2021.07.09", type: "single", format: "Single", source: "https://twitter.com/BIGHIT_MUSIC/status/1410614221088329732" },
  { title: "Proof", date: "2022.06.10", type: "studio", format: "Anthology", source: "https://shop.weverse.io/en/shop/USD/artists/2/sales/8375" },
  { title: "ARIRANG", date: "2026.03.20", type: "studio", format: "Studio album", source: "https://bts-official.jp/discography/d1984a2f3946" }
];

const milestones = [
  { year: "2013", title: "A first step", text: "BTS make their debut with the single album 2 Cool 4 Skool." },
  { year: "2015", title: "A new chapter", text: "The Most Beautiful Moment in Life era begins, opening a story that resonates around the world." },
  { year: "2017", title: "Beyond borders", text: "BTS receive the Top Social Artist award at the Billboard Music Awards." },
  { year: "2018", title: "A global conversation", text: "LOVE YOURSELF 轉 'Tear' becomes the group's first album to top the Billboard 200." },
  { year: "2020", title: "A song of hope", text: "“Dynamite” becomes BTS's first all-English single and their first Billboard Hot 100 No. 1." },
  { year: "2021", title: "A moment together", text: "BTS return to live audiences in Los Angeles with the PERMISSION TO DANCE ON STAGE concerts." },
  { year: "2022", title: "Looking back, moving forward", text: "The anthology album Proof is released, celebrating the group's story to date." },
  { year: "2023", title: "Ten years of BTS", text: "BTS mark a decade since their debut, with members continuing their paths as a group and individually." }
];

const memberGrid = document.querySelector("#member-grid");
const albumGrid = document.querySelector("#album-grid");
const timelineTrack = document.querySelector("#timeline-track");
const dialog = document.querySelector("#member-dialog");

memberGrid.innerHTML = members.map(member => `
  <button class="member-card" type="button" data-member="${member.number}" aria-label="Meet ${member.name}, ${member.role}">
    <span class="member-portrait" style="--portrait-bg:${member.hue};--portrait-light:${member.light}">
      <span class="member-number">${member.number}</span><span class="member-symbol" aria-hidden="true">${member.name === "Jung Kook" ? "JK" : member.name === "j-hope" ? "jh" : member.name}</span><span class="member-caption" aria-hidden="true">A VOICE IN SEVEN</span>
    </span>
    <span class="member-meta"><span class="member-name">${member.name}</span><span class="member-role">${member.role}</span></span>
  </button>`).join("");

function renderAlbums() {
  const query = document.querySelector("#album-search").value.trim().toLowerCase();
  const filter = document.querySelector(".filter-button.is-active").dataset.filter;
  const shown = albums.filter(album => (filter === "all" || album.type === filter) && `${album.title} ${album.date} ${album.format}`.toLowerCase().includes(query));
  albumGrid.innerHTML = shown.map(album => `
    <article class="album-card">
      <div class="album-cover album-text-card" aria-hidden="true"><span class="album-ornament"></span><span class="cover-kicker">BTS · RELEASE ARCHIVE</span><span class="cover-word">${album.title}</span><span class="cover-year">${album.date.slice(0, 4)} <i>✳</i> ${album.format.toUpperCase()}</span></div>
      <div class="album-info"><span class="album-title">${album.title}</span><span class="album-type">${album.format}</span></div>
      <p class="album-date">${album.date} <a class="album-source" href="${album.source}" target="_blank" rel="noopener noreferrer">Release details ↗</a></p>
    </article>`).join("");
  document.querySelector("#album-count").textContent = `Showing ${shown.length} of ${albums.length} albums`;
  document.querySelector("#empty-state").hidden = shown.length !== 0;
}

timelineTrack.innerHTML = milestones.map(item => `<article class="milestone"><span class="milestone-year">${item.year}</span><h3>${item.title}</h3><p>${item.text}</p></article>`).join("");
renderAlbums();

memberGrid.addEventListener("click", event => {
  const card = event.target.closest(".member-card");
  if (!card) return;
  const member = members.find(item => item.number === card.dataset.member);
  document.querySelector("#dialog-number").textContent = member.number;
  document.querySelector("#dialog-name").textContent = member.name;
  document.querySelector("#dialog-role").textContent = member.role;
  document.querySelector("#dialog-bio").textContent = member.bio;
  dialog.showModal();
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.querySelector("#album-search").addEventListener("input", renderAlbums);
document.querySelectorAll(".filter-button").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter-button").forEach(item => { item.classList.toggle("is-active", item === button); item.setAttribute("aria-pressed", item === button ? "true" : "false"); });
  renderAlbums();
}));

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  nav.classList.toggle("is-open", open);
});
nav.addEventListener("click", event => {
  if (event.target.closest("a")) { nav.classList.remove("is-open"); menuToggle.setAttribute("aria-expanded", "false"); menuToggle.setAttribute("aria-label", "Open navigation"); }
});

const messageField = document.querySelector("#fan-message");
messageField.addEventListener("input", () => { document.querySelector("#character-count").textContent = `${messageField.value.length} / 240`; });
document.querySelector("#message-form").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#fan-name").value.trim();
  const message = messageField.value.trim();
  if (!name || !message) return;
  const empty = document.querySelector(".wall-empty");
  if (empty) empty.remove();
  const card = document.createElement("article");
  card.className = "fan-note";
  const note = document.createElement("p");
  note.textContent = message;
  const author = document.createElement("span");
  author.textContent = `— ${name}`;
  card.append(note, author);
  document.querySelector("#message-list").prepend(card);
  event.currentTarget.reset();
  document.querySelector("#character-count").textContent = "0 / 240";
  document.querySelector("#fan-name").focus();
});

document.querySelector("#year").textContent = new Date().getFullYear();
