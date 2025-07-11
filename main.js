// datos
const veterinarias = [
  {
    id: 1,
    nombre: "Clínica Veterinaria San Ángel",
    direccion: "Av. Revolución 1234, San Ángel, CDMX",
    telefono: "+52 55 1234-5678",
    horario: "Lun-Vie 8:00-20:00, Sáb 9:00-18:00",
    rating: 4.8,
    reviews: 124,
    servicios: ["Consulta General", "Cirugía", "Emergencias", "Radiología"],
    imagen: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Ciudad de México",
    zona: "San Ángel",
    emergencia24h: true
  },
  {
    id: 2,
    nombre: "Hospital Veterinario Roma Norte",
    direccion: "Calle Orizaba 45, Roma Norte, CDMX",
    telefono: "+52 55 2345-6789",
    horario: "24 horas",
    rating: 4.9,
    reviews: 89,
    servicios: ["Consulta General", "Radiología", "Laboratorio"],
    imagen: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Ciudad de México",
    zona: "Roma Norte",
    emergencia24h: true
  },
  {
    id: 3,
    nombre: "Veterinaria Condesa",
    direccion: "Av. Tamaulipas 123, Condesa, CDMX",
    telefono: "+52 55 3456-7890",
    horario: "Lun-Dom 9:00-19:00",
    rating: 4.7,
    reviews: 156,
    servicios: ["Consulta General", "Vacunación", "Estética"],
    imagen: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Ciudad de México",
    zona: "Condesa",
    emergencia24h: false
  }
];

let filteredVeterinarias = [...veterinarias];

// navegacion
function showDirectory() {
  document.getElementById("landing-page").classList.add("hidden");
  document.getElementById("directory-page").classList.remove("hidden");
  document.getElementById("detail-page").classList.add("hidden");
  renderVeterinarias();
}

function showLanding() {
  document.getElementById("landing-page").classList.remove("hidden");
  document.getElementById("directory-page").classList.add("hidden");
  document.getElementById("detail-page").classList.add("hidden");
}

function showVetDetail(vetId) {
  document.getElementById("landing-page").classList.add("hidden");
  document.getElementById("directory-page").classList.add("hidden");
  document.getElementById("detail-page").classList.remove("hidden");
}

function goBackToDirectory() {
  showDirectory();
}

// renderizado
function renderVeterinarias() {
  const container = document.getElementById("veterinariasGrid");
  const resultsCount = document.getElementById("resultsCount");
  
  if (!container) return;
  
  resultsCount.textContent = `${filteredVeterinarias.length} veterinarias encontradas`;
  
  container.innerHTML = filteredVeterinarias.map(vet => `
    <div class="vet-card" onclick="showVetDetail(${vet.id})">
      <div class="vet-image">
        <img src="${vet.imagen}" alt="${vet.nombre}">
        ${vet.emergencia24h ? '<div class="badge badge-emergency">24H</div>' : ''}
      </div>
      <div class="vet-content">
        <div class="vet-header">
          <h3>${vet.nombre}</h3>
          <div class="vet-rating">
            <span class="rating-stars">★ ${vet.rating}</span>
            <span class="rating-count">(${vet.reviews})</span>
          </div>
        </div>
        <div class="vet-info">
          <p><i data-lucide="map-pin"></i> ${vet.direccion}</p>
          <p><i data-lucide="clock"></i> ${vet.horario}</p>
          <p><i data-lucide="phone"></i> ${vet.telefono}</p>
        </div>
        <div class="vet-services">
          ${vet.servicios.slice(0, 3).map(servicio => `<span class="service-tag">${servicio}</span>`).join("")}
          ${vet.servicios.length > 3 ? `<span class="service-tag">+${vet.servicios.length - 3} más</span>` : ''}
        </div>
        <div class="vet-actions">
          <button class="btn btn-outline" onclick="event.stopPropagation(); callVet('${vet.telefono}')">
            <i data-lucide="phone"></i> Llamar
          </button>
          <button class="btn btn-primary" onclick="event.stopPropagation(); showVetDetail(${vet.id})">
            <i data-lucide="info"></i> Ver más
          </button>
        </div>
      </div>
    </div>
  `).join("");
  
  // reinicializar iconos
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function callVet(telefono) {
  if (confirm(`¿Deseas llamar a ${telefono}?`)) {
    window.open(`tel:${telefono}`, '_self');
  }
}

// filtros y busqueda
function applyFilters() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const cityFilter = document.getElementById("cityFilter").value;
  const sortBy = document.getElementById("sortBy").value;
  
  // filtrar por busqueda y ciudad
  filteredVeterinarias = veterinarias.filter(vet => {
    const matchesSearch = vet.nombre.toLowerCase().includes(searchTerm) || 
                         vet.zona.toLowerCase().includes(searchTerm) ||
                         vet.direccion.toLowerCase().includes(searchTerm);
    
    const matchesCity = cityFilter === "todas" || vet.ciudad === cityFilter;
    
    return matchesSearch && matchesCity;
  });
  
  // ordenar
  if (sortBy === "rating") {
    filteredVeterinarias.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "nombre") {
    filteredVeterinarias.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }
  
  renderVeterinarias();
}

// busqueda en tiempo real
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
  
  const cityFilter = document.getElementById("cityFilter");
  if (cityFilter) {
    cityFilter.addEventListener('change', applyFilters);
  }
  
  const sortBy = document.getElementById("sortBy");
  if (sortBy) {
    sortBy.addEventListener('change', applyFilters);
  }
});