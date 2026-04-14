/* ============================================
   Malé Mosque Directory — Shared JS
   ============================================ */

// -------- API Config --------
const API_BASE_URL = "https://mosque-dir.onrender.com";

// -------- Data Cache --------
let cachedMosques = null;

async function fetchAllMosques() {
  if (cachedMosques) return cachedMosques;
  const res = await fetch(API_BASE_URL + "/api/all");
  if (!res.ok) throw new Error("Failed to fetch mosques");
  cachedMosques = await res.json();
  return cachedMosques;
}

function getAtolls(mosques) {
  return [...new Set(mosques.map(m => m.atoll))].sort();
}

function getIslands(mosques) {
  return [...new Set(mosques.map(m => m.island))].sort();
}

// -------- Modal --------
function openModal(mosque) {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay) return;

  var img = "";
  if (mosque.picture) {
    img = '<img class="modal-img" src="' + mosque.picture + '" alt="' + mosque.name + '" onerror="this.style.display=\'none\'">';
  }

  var tags = "";
  if (mosque.friday) tags += '<span class="modal-tag modal-tag-green">Friday Prayer</span>';
  if (mosque.ladies) tags += '<span class="modal-tag modal-tag-gold">Ladies Section</span>';
  if (mosque.capacity > 0) tags += '<span class="modal-tag modal-tag-gray">Capacity: ' + mosque.capacity + '</span>';

  var desc = mosque.description ? '<p class="desc">' + mosque.description + '</p>' : "";
  var built = mosque.buildDate ? '<p class="meta">Built: ' + new Date(mosque.buildDate).getFullYear() + '</p>' : "";
  var contact = mosque.contact ? '<p class="meta">Contact: ' + mosque.contact + '</p>' : "";
  var dhivehi = mosque.dhivehi && mosque.dhivehi.name ? '<p class="dhivehi">' + mosque.dhivehi.name + '</p>' : "";

  overlay.querySelector(".modal-content").innerHTML =
    '<button class="modal-close" onclick="closeModal()">✕</button>' +
    img +
    '<div class="modal-body">' +
      '<h2>' + mosque.name + '</h2>' +
      dhivehi +
      '<p class="loc">' + mosque.island + ', ' + mosque.atoll + '</p>' +
      '<div class="modal-tags">' + tags + '</div>' +
      desc + built + contact +
      '<div class="modal-actions">' +
        '<a href="https://www.google.com/maps/dir/?api=1&destination=' + mosque.latitude + ',' + mosque.longitude + '" target="_blank" rel="noopener" class="btn btn-primary">Get Directions</a>' +
        '<button class="btn btn-outline" onclick="copyLink(\'' + mosque.id + '\')">Share</button>' +
      '</div>' +
    '</div>';

  overlay.classList.add("open");
}

function closeModal() {
  var overlay = document.getElementById("modal-overlay");
  if (overlay) overlay.classList.remove("open");
}

function copyLink(id) {
  navigator.clipboard.writeText(window.location.origin + "/directory.html?mosque=" + id);
  alert("Link copied!");
}

// -------- Card Renderer --------
function renderMosqueCard(mosque) {
  var imgHtml;
  if (mosque.picture) {
    imgHtml = '<img src="' + mosque.picture + '" alt="' + mosque.name + '" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\'">' +
      '<div class="card-placeholder" style="display:none"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 12h3v8h4v-5h6v5h4v-8h3L12 3z"/></svg></div>';
  } else {
    imgHtml = '<div class="card-placeholder"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 12h3v8h4v-5h6v5h4v-8h3L12 3z"/></svg></div>';
  }

  var badges = "";
  if (mosque.friday) badges += '<span class="badge badge-friday">Friday</span>';
  if (mosque.ladies) badges += '<span class="badge badge-ladies">Ladies</span>';

  var dhivehi = mosque.dhivehi && mosque.dhivehi.name ? '<p class="dhivehi">' + mosque.dhivehi.name + '</p>' : "";
  var cap = mosque.capacity > 0 ? '<div class="capacity">👥 ' + mosque.capacity + '</div>' : "";

  var card = document.createElement("div");
  card.className = "mosque-card";
  card.innerHTML =
    '<div class="card-img">' + imgHtml + '<div class="card-badges">' + badges + '</div></div>' +
    '<div class="card-body">' +
      '<h3>' + mosque.name + '</h3>' +
      dhivehi +
      '<p class="location">' + mosque.island + ', ' + mosque.atoll + '</p>' +
      cap +
      '<div class="card-actions">' +
        '<button class="btn btn-primary" data-action="details">Details</button>' +
        '<button class="btn btn-outline" data-action="map">Map</button>' +
      '</div>' +
    '</div>';

  card.querySelector('[data-action="details"]').addEventListener("click", function () {
    openModal(mosque);
  });
  card.querySelector('[data-action="map"]').addEventListener("click", function () {
    window.location.href = "map.html?lat=" + mosque.latitude + "&lng=" + mosque.longitude + "&id=" + mosque.id;
  });

  return card;
}

// -------- Skeleton Cards --------
function renderSkeletons(container, count) {
  container.innerHTML = "";
  for (var i = 0; i < count; i++) {
    var sk = document.createElement("div");
    sk.className = "mosque-card";
    sk.innerHTML =
      '<div class="shimmer" style="height:176px"></div>' +
      '<div style="padding:1rem">' +
        '<div class="shimmer" style="height:16px;width:75%;margin-bottom:8px"></div>' +
        '<div class="shimmer" style="height:12px;width:50%;margin-bottom:8px"></div>' +
        '<div class="shimmer" style="height:12px;width:33%;margin-bottom:12px"></div>' +
        '<div style="display:flex;gap:8px"><div class="shimmer" style="height:36px;flex:1"></div><div class="shimmer" style="height:36px;flex:1"></div></div>' +
      '</div>';
    container.appendChild(sk);
  }
}

// -------- Populate Select --------
function populateSelect(selectEl, options, placeholder) {
  selectEl.innerHTML = '<option value="">' + placeholder + '</option>';
  options.forEach(function (opt) {
    var o = document.createElement("option");
    o.value = opt;
    o.textContent = opt;
    selectEl.appendChild(o);
  });
}

// -------- Init on DOM ready --------
document.addEventListener("DOMContentLoaded", function () {

  // Close modal on overlay click
  var overlay = document.getElementById("modal-overlay");
  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });
  }
});
