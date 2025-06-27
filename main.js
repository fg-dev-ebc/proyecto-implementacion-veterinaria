// Datos de veterinarias
const veterinarias = [
  {
    id: 1,
    nombre: "Clínica Veterinaria San Ángel",
    direccion: "Av. Revolución 1234, San Ángel, CDMX",
    telefono: "+52 55 1234-5678",
    horario: "Lun-Vie 8:00-20:00, Sáb 9:00-18:00",
    rating: 4.8,
    reviews: 124,
    servicios: ["Consulta General", "Cirugía", "Emergencias"],
    imagen:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Ciudad de México",
    zona: "San Ángel",
    lat: 19.3467,
    lng: -99.1903,
    emergencia24h: true,
  },
  {
    id: 2,
    nombre: "Hospital Veterinario Roma Norte",
    direccion: "Calle Orizaba 45, Roma Norte, CDMX",
    telefono: "+52 55 2345-6789",
    horario: "24 horas",
    rating: 4.9,
    reviews: 89,
    servicios: ["Consulta General", "Radiología", "Laboratorio", "Emergencias"],
    imagen:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Ciudad de México",
    zona: "Roma Norte",
    lat: 19.4126,
    lng: -99.1576,
    emergencia24h: true,
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
    imagen:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Ciudad de México",
    zona: "Condesa",
    lat: 19.4103,
    lng: -99.1711,
    emergencia24h: false,
  },
  {
    id: 4,
    nombre: "Clínica Veterinaria Polanco",
    direccion: "Av. Presidente Masaryk 567, Polanco, CDMX",
    telefono: "+52 55 4567-8901",
    horario: "Lun-Vie 8:00-21:00, Sáb-Dom 9:00-17:00",
    rating: 4.6,
    reviews: 203,
    servicios: ["Consulta General", "Cirugía", "Hospitalización", "Spa"],
    imagen:
      "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Ciudad de México",
    zona: "Polanco",
    lat: 19.4326,
    lng: -99.1909,
    emergencia24h: false,
  },
  {
    id: 5,
    nombre: "Hospital Veterinario Guadalajara Centro",
    direccion: "Av. Juárez 890, Centro, Guadalajara, Jal.",
    telefono: "+52 33 1234-5678",
    horario: "Lun-Vie 7:00-22:00, Sáb-Dom 8:00-20:00",
    rating: 4.5,
    reviews: 98,
    servicios: ["Consulta General", "Cirugía", "Oncología"],
    imagen:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Guadalajara",
    zona: "Centro",
    lat: 20.6597,
    lng: -103.3496,
    emergencia24h: true,
  },
  {
    id: 6,
    nombre: "Veterinaria Monterrey Norte",
    direccion: "Av. Constitución 456, Monterrey, N.L.",
    telefono: "+52 81 2345-6789",
    horario: "Lun-Sáb 8:00-20:00",
    rating: 4.4,
    reviews: 67,
    servicios: ["Consulta General", "Vacunación", "Desparasitación"],
    imagen:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Monterrey",
    zona: "Norte",
    lat: 25.6866,
    lng: -100.3161,
    emergencia24h: false,
  },
  {
    id: 7,
    nombre: "Clínica Veterinaria Coyoacán",
    direccion: "Av. Universidad 789, Coyoacán, CDMX",
    telefono: "+52 55 5678-9012",
    horario: "Lun-Vie 9:00-19:00, Sáb 10:00-16:00",
    rating: 4.3,
    reviews: 142,
    servicios: ["Consulta General", "Dermatología", "Nutrición"],
    imagen:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Ciudad de México",
    zona: "Coyoacán",
    lat: 19.3426,
    lng: -99.1574,
    emergencia24h: false,
  },
  {
    id: 8,
    nombre: "Hospital Veterinario Zapopan",
    direccion: "Av. López Mateos 321, Zapopan, Jal.",
    telefono: "+52 33 3456-7890",
    horario: "24 horas",
    rating: 4.7,
    reviews: 76,
    servicios: ["Consulta General", "Emergencias", "Cirugía", "Rehabilitación"],
    imagen:
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Guadalajara",
    zona: "Zapopan",
    lat: 20.7214,
    lng: -103.3918,
    emergencia24h: true,
  },
]

// Variables globales
let filteredVeterinarias = [...veterinarias]
let userLocation = null

// Funciones de navegación
function showDirectory() {
  document.getElementById("landing-page").classList.add("hidden")
  document.getElementById("directory-page").classList.remove("hidden")
  initializeDirectory()
}

function showLanding() {
  document.getElementById("directory-page").classList.add("hidden")
  document.getElementById("landing-page").classList.remove("hidden")
}

// Inicializar directorio
function initializeDirectory() {
  getUserLocation()
  renderVeterinarias()
  setupEventListeners()
}

// Obtener ubicación del usuario
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        applyFilters()
      },
      (error) => {
        console.log("Error obteniendo ubicación:", error)
        // Ubicación por defecto (CDMX)
        userLocation = { lat: 19.4326, lng: -99.1332 }
        applyFilters()
      },
    )
  } else {
    // Ubicación por defecto si no hay geolocalización
    userLocation = { lat: 19.4326, lng: -99.1332 }
    applyFilters()
  }
}

// Calcular distancia entre dos puntos
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371 // Radio de la Tierra en km
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

// Aplicar filtros
function applyFilters() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase()
  const selectedCity = document.getElementById("cityFilter").value
  const sortBy = document.getElementById("sortBy").value

  // Filtrar veterinarias
  filteredVeterinarias = veterinarias.filter((vet) => {
    const matchesSearch = vet.nombre.toLowerCase().includes(searchTerm) || vet.zona.toLowerCase().includes(searchTerm)
    const matchesCity = selectedCity === "todas" || vet.ciudad === selectedCity
    return matchesSearch && matchesCity
  })

  // Agregar distancia si tenemos ubicación del usuario
  if (userLocation) {
    filteredVeterinarias = filteredVeterinarias.map((vet) => ({
      ...vet,
      distancia: calculateDistance(userLocation.lat, userLocation.lng, vet.lat, vet.lng),
    }))
  }

  // Ordenar según criterio seleccionado
  filteredVeterinarias.sort((a, b) => {
    switch (sortBy) {
      case "distancia":
        return (a.distancia || 0) - (b.distancia || 0)
      case "rating":
        return b.rating - a.rating
      case "nombre":
        return a.nombre.localeCompare(b.nombre)
      default:
        return 0
    }
  })

  renderVeterinarias()
}

// Renderizar veterinarias
function renderVeterinarias() {
  const grid = document.getElementById("veterinariasGrid")
  const noResults = document.getElementById("noResults")
  const resultsCount = document.getElementById("resultsCount")

  // Actualizar contador de resultados
  const countText = `Mostrando ${filteredVeterinarias.length} veterinarias`
  const locationText = userLocation ? " ordenadas por distancia" : ""
  resultsCount.textContent = countText + locationText

  if (filteredVeterinarias.length === 0) {
    grid.classList.add("hidden")
    noResults.classList.remove("hidden")
    return
  }

  noResults.classList.add("hidden")
  grid.classList.remove("hidden")

  grid.innerHTML = filteredVeterinarias
    .map(
      (vet) => `
        <div class="vet-card">
            <div class="vet-image">
                <img src="${vet.imagen}" alt="${vet.nombre}" loading="lazy">
                ${vet.emergencia24h ? '<div class="badge badge-24h">24h</div>' : ""}
                ${vet.distancia ? `<div class="badge badge-distance">${vet.distancia.toFixed(1)} km</div>` : ""}
            </div>
            <div class="vet-content">
                <div class="vet-header">
                    <h3 class="vet-name">${vet.nombre}</h3>
                    <div class="vet-rating">
                        <i class="fas fa-star"></i>
                        <span>${vet.rating}</span>
                        <span style="color: #9ca3af;">(${vet.reviews})</span>
                    </div>
                </div>
                <div class="vet-info">
                    <div class="vet-info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${vet.direccion}</span>
                    </div>
                    <div class="vet-info-item">
                        <i class="fas fa-phone"></i>
                        <span>${vet.telefono}</span>
                    </div>
                    <div class="vet-info-item">
                        <i class="fas fa-clock"></i>
                        <span>${vet.horario}</span>
                    </div>
                </div>
                <div class="vet-services">
                    ${vet.servicios
                      .slice(0, 3)
                      .map((servicio) => `<span class="service-badge">${servicio}</span>`)
                      .join("")}
                    ${
                      vet.servicios.length > 3
                        ? `<span class="service-badge">+${vet.servicios.length - 3} más</span>`
                        : ""
                    }
                </div>
                <div class="vet-actions">
                    <button class="btn btn-call" onclick="callVet('${vet.telefono}')">
                        <i class="fas fa-phone"></i>
                        Llamar
                    </button>
                    <button class="btn btn-directions" onclick="getDirections(${vet.lat}, ${vet.lng})">
                        <i class="fas fa-directions"></i>
                        Cómo llegar
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Configurar event listeners
function setupEventListeners() {
  const searchInput = document.getElementById("searchInput")
  const cityFilter = document.getElementById("cityFilter")
  const sortBy = document.getElementById("sortBy")

  searchInput.addEventListener("input", debounce(applyFilters, 300))
  cityFilter.addEventListener("change", applyFilters)
  sortBy.addEventListener("change", applyFilters)
}

// Función debounce para optimizar búsqueda
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Funciones de acción
function callVet(telefono) {
  window.open(`tel:${telefono}`, "_self")
}

function getDirections(lat, lng) {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
  window.open(url, "_blank")
}

// Inicializar aplicación
document.addEventListener("DOMContentLoaded", () => {
  // Configurar navegación móvil
  const mobileToggle = document.querySelector(".mobile-menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  }

  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})