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
  },
  {
    id: 4,
    nombre: "Clínica Veterinaria Polanco",
    direccion: "Av. Presidente Masaryk 567, Polanco, CDMX",
    telefono: "+52 55 4567-8901",
    horario: "Lun-Vie 8:00-21:00",
    rating: 4.6,
    reviews: 203,
    servicios: ["Consulta General", "Cirugía", "Spa"],
    imagen: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Ciudad de México",
    zona: "Polanco",
    emergencia24h: false
  },
  {
    id: 5,
    nombre: "Hospital Veterinario Guadalajara Centro",
    direccion: "Av. Juárez 456, Centro, Guadalajara, Jal.",
    telefono: "+52 33 1234-5678",
    horario: "24 horas",
    rating: 4.8,
    reviews: 167,
    servicios: ["Consulta General", "Urgencias", "Hospitalización"],
    imagen: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Guadalajara",
    zona: "Centro",
    emergencia24h: true
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
  
  const vet = veterinarias.find(v => v.id === vetId);
  if (vet) {
    renderVetDetail(vet);
  }
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

function renderVetDetail(vet) {
  const container = document.getElementById("vetDetailContent");
  if (!container) return;
  
  container.innerHTML = `
    <div class="vet-detail-header">
      <div class="vet-detail-image">
        <img src="${vet.imagen}" alt="${vet.nombre}">
        ${vet.emergencia24h ? '<div class="badge badge-emergency">24H</div>' : ''}
      </div>
      <div class="vet-detail-info">
        <h1>${vet.nombre}</h1>
        <div class="vet-rating">
          <span class="rating-stars">★ ${vet.rating}</span>
          <span class="rating-count">(${vet.reviews} reseñas)</span>
        </div>
        <div class="vet-detail-meta">
          <div class="meta-item">
            <i data-lucide="map-pin"></i>
            <span>${vet.direccion}</span>
          </div>
          <div class="meta-item">
            <i data-lucide="clock"></i>
            <span>${vet.horario}</span>
          </div>
          <div class="meta-item">
            <i data-lucide="phone"></i>
            <span>${vet.telefono}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="vet-detail-services">
      <h3>Servicios</h3>
      <div class="services-grid">
        ${vet.servicios.map(servicio => `<span class="service-tag">${servicio}</span>`).join("")}
      </div>
    </div>
    
    <div class="vet-detail-actions">
      <button class="btn btn-primary btn-large" onclick="callVet('${vet.telefono}')">
        <i data-lucide="phone"></i> Llamar Ahora
      </button>
      <button class="btn btn-outline btn-large" onclick="getDirections()">
        <i data-lucide="navigation"></i> Cómo Llegar
      </button>
    </div>
  `;
  
  // reinicializar iconos
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function getDirections() {
  alert('Función de direcciones próximamente');
}

// menu responsive
function setupMobileMenu() {
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const navMenu = document.getElementById("navMenu");
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // cambiar icono
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
      } else {
        icon.setAttribute('data-lucide', 'menu');
      }
      
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    });
    
    // cerrar menu al hacer click fuera
    document.addEventListener('click', function(event) {
      if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.setAttribute('data-lucide', 'menu');
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }
    });
  }
}

// busqueda en tiempo real
document.addEventListener('DOMContentLoaded', function() {
  setupMobileMenu();
  
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