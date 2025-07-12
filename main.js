// ===== DATOS DE VETERINARIAS =====
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
    lat: 19.3467,
    lng: -99.1903,
    emergencia24h: true,
    descripcion: "Clínica veterinaria con más de 15 años de experiencia en el cuidado de mascotas. Contamos con equipo de última generación y un equipo de profesionales altamente capacitados.",
    comentarios: [
      {
        id: 1,
        usuario: "María González",
        rating: 5,
        fecha: "2024-06-15",
        comentario: "Excelente atención, muy profesionales. Mi perro salió muy bien de la cirugía y el seguimiento fue perfecto.",
        mascota: "Perro"
      },
      {
        id: 2,
        usuario: "Carlos Mendoza",
        rating: 4,
        fecha: "2024-06-10",
        comentario: "Buena atención, aunque tuve que esperar un poco. Los precios son justos y el doctor muy amable.",
        mascota: "Gato"
      },
      {
        id: 3,
        usuario: "Ana Rodríguez",
        rating: 5,
        fecha: "2024-06-05",
        comentario: "Mi gata estaba muy enferma y aquí la salvaron. Estoy muy agradecida con todo el equipo médico.",
        mascota: "Gato"
      }
    ]
  },
  {
    id: 2,
    nombre: "Hospital Veterinario Roma Norte",
    direccion: "Calle Orizaba 45, Roma Norte, CDMX",
    telefono: "+52 55 2345-6789",
    horario: "24 horas",
    rating: 4.9,
    reviews: 89,
    servicios: ["Consulta General", "Radiología", "Laboratorio", "Emergencias", "UCI"],
    imagen: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Ciudad de México",
    zona: "Roma Norte",
    lat: 19.4126,
    lng: -99.1576,
    emergencia24h: true,
    descripcion: "Hospital veterinario de especialidades con atención 24 horas. Especialistas en medicina interna, cirugía y cuidados intensivos.",
    comentarios: [
      {
        id: 1,
        usuario: "Jorge Pérez",
        rating: 5,
        fecha: "2024-06-20",
        comentario: "Salvaron a mi perrito en una emergencia nocturna. Personal muy capacitado y instalaciones excelentes.",
        mascota: "Perro"
      },
      {
        id: 2,
        usuario: "Laura Martínez",
        rating: 5,
        fecha: "2024-06-18",
        comentario: "La mejor atención que he recibido. El equipo de emergencias es increíble.",
        mascota: "Gato"
      }
    ]
  },
  {
    id: 3,
    nombre: "Veterinaria Condesa",
    direccion: "Av. Tamaulipas 123, Condesa, CDMX",
    telefono: "+52 55 3456-7890",
    horario: "Lun-Dom 9:00-19:00",
    rating: 4.7,
    reviews: 156,
    servicios: ["Consulta General", "Vacunación", "Estética", "Nutrición"],
    imagen: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Ciudad de México",
    zona: "Condesa",
    lat: 19.4103,
    lng: -99.1711,
    emergencia24h: false,
    descripcion: "Veterinaria familiar con enfoque integral en el bienestar de tu mascota. Servicios de medicina preventiva y estética canina.",
    comentarios: [
      {
        id: 1,
        usuario: "Patricia López",
        rating: 5,
        fecha: "2024-06-12",
        comentario: "Excelente servicio de estética. Mi golden retriever quedó hermoso y muy relajado.",
        mascota: "Perro"
      },
      {
        id: 2,
        usuario: "Roberto Sánchez",
        rating: 4,
        fecha: "2024-06-08",
        comentario: "Buen servicio y precios accesibles. La doctora es muy cariñosa con los animales.",
        mascota: "Conejo"
      }
    ]
  },
  {
    id: 4,
    nombre: "Clínica Veterinaria Polanco",
    direccion: "Av. Presidente Masaryk 567, Polanco, CDMX",
    telefono: "+52 55 4567-8901",
    horario: "Lun-Vie 8:00-21:00, Sáb-Dom 9:00-17:00",
    rating: 4.6,
    reviews: 203,
    servicios: ["Consulta General", "Cirugía", "Hospitalización", "Spa", "Cardiología"],
    imagen: "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Ciudad de México",
    zona: "Polanco",
    lat: 19.4326,
    lng: -99.1909,
    emergencia24h: false,
    descripcion: "Clínica de lujo con servicios premium para mascotas. Especialistas en medicina interna y servicios de spa.",
    comentarios: [
      {
        id: 1,
        usuario: "Isabella García",
        rating: 5,
        fecha: "2024-06-14",
        comentario: "Instalaciones de primera clase. El spa para mascotas es increíble, mi poodle salió como nuevo.",
        mascota: "Perro"
      },
      {
        id: 2,
        usuario: "Fernando Castro",
        rating: 4,
        fecha: "2024-06-11",
        comentario: "Excelente atención médica, aunque los precios son elevados. Vale la pena por la calidad.",
        mascota: "Gato"
      }
    ]
  },
  {
    id: 5,
    nombre: "Hospital Veterinario Guadalajara Centro",
    direccion: "Av. Juárez 890, Centro, Guadalajara, Jal.",
    telefono: "+52 33 1234-5678",
    horario: "Lun-Vie 7:00-22:00, Sáb-Dom 8:00-20:00",
    rating: 4.5,
    reviews: 98,
    servicios: ["Consulta General", "Cirugía", "Oncología", "Rehabilitación"],
    imagen: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Guadalajara",
    zona: "Centro",
    lat: 20.6597,
    lng: -103.3496,
    emergencia24h: true,
    descripcion: "Hospital veterinario especializado en oncología y rehabilitación animal. Más de 20 años de experiencia.",
    comentarios: [
      {
        id: 1,
        usuario: "Miguel Hernández",
        rating: 5,
        fecha: "2024-06-16",
        comentario: "Salvaron a mi perrita de cáncer. El tratamiento de oncología es excelente.",
        mascota: "Perro"
      }
    ]
  },
  {
    id: 6,
    nombre: "Veterinaria Monterrey Norte",
    direccion: "Av. Constitución 456, Monterrey, N.L.",
    telefono: "+52 81 2345-6789",
    horario: "Lun-Sáb 8:00-20:00",
    rating: 4.4,
    reviews: 67,
    servicios: ["Consulta General", "Vacunación", "Desparasitación", "Cirugía Menor"],
    imagen: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Monterrey",
    zona: "Norte",
    lat: 25.6866,
    lng: -100.3161,
    emergencia24h: false,
    descripcion: "Veterinaria familiar con atención personalizada. Especialistas en medicina preventiva y cuidado general.",
    comentarios: [
      {
        id: 1,
        usuario: "Carmen Ruiz",
        rating: 4,
        fecha: "2024-06-13",
        comentario: "Muy buena atención y precios accesibles. El doctor es muy paciente con los animales nerviosos.",
        mascota: "Gato"
      }
    ]
  },
  {
    id: 7,
    nombre: "Clínica Veterinaria Coyoacán",
    direccion: "Av. Universidad 789, Coyoacán, CDMX",
    telefono: "+52 55 5678-9012",
    horario: "Lun-Vie 9:00-19:00, Sáb 10:00-16:00",
    rating: 4.3,
    reviews: 142,
    servicios: ["Consulta General", "Dermatología", "Nutrición", "Vacunación"],
    imagen: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Ciudad de México",
    zona: "Coyoacán",
    lat: 19.3426,
    lng: -99.1574,
    emergencia24h: false,
    descripcion: "Clínica especializada en dermatología veterinaria y nutrición animal. Ambiente tranquilo y familiar.",
    comentarios: [
      {
        id: 1,
        usuario: "David Torres",
        rating: 4,
        fecha: "2024-06-09",
        comentario: "Excelente para problemas de piel. Mi gato tenía dermatitis y aquí lo curaron completamente.",
        mascota: "Gato"
      }
    ]
  },
  {
    id: 8,
    nombre: "Hospital Veterinario Zapopan",
    direccion: "Av. López Mateos 321, Zapopan, Jal.",
    telefono: "+52 33 3456-7890",
    horario: "24 horas",
    rating: 4.7,
    reviews: 76,
    servicios: ["Consulta General", "Emergencias", "Cirugía", "Rehabilitación", "Imagenología"],
    imagen: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ciudad: "Guadalajara",
    zona: "Zapopan",
    lat: 20.7214,
    lng: -103.3918,
    emergencia24h: true,
    descripcion: "Hospital veterinario de especialidades con servicio 24/7. Centro de rehabilitación animal más moderno de Jalisco.",
    comentarios: [
      {
        id: 1,
        usuario: "Sandra Morales",
        rating: 5,
        fecha: "2024-06-17",
        comentario: "La rehabilitación de mi perro después de la cirugía fue excelente. Personal muy profesional.",
        mascota: "Perro"
      }
    ]
  }
];

// ===== VARIABLES GLOBALES =====
let filteredVeterinarias = [...veterinarias];
let userLocation = null;
let lastPage = 'landing'; // Para recordar de dónde venimos

// ===== FUNCIONES DE NAVEGACIÓN =====
function showDirectory() {
  document.getElementById("landing-page").classList.add("hidden");
  document.getElementById("directory-page").classList.remove("hidden");
  document.getElementById("detail-page").classList.add("hidden");
  lastPage = 'directory';
  initializeDirectory();
}

function showLanding() {
  document.getElementById("directory-page").classList.add("hidden");
  document.getElementById("detail-page").classList.add("hidden");
  document.getElementById("landing-page").classList.remove("hidden");
  lastPage = 'landing';
}

function showVetDetail(vetId) {
  const vet = veterinarias.find(v => v.id === vetId);
  if (!vet) return;

  // Ocultar otras pantallas
  document.getElementById("landing-page").classList.add("hidden");
  document.getElementById("directory-page").classList.add("hidden");
  document.getElementById("detail-page").classList.remove("hidden");

  // Renderizar detalle
  renderVetDetail(vet);
  
  // Scroll to top
  window.scrollTo(0, 0);
}

function goBackToDirectory() {
  document.getElementById("detail-page").classList.add("hidden");
  if (lastPage === 'directory') {
    document.getElementById("directory-page").classList.remove("hidden");
  } else {
    showDirectory();
  }
}

// ===== INICIALIZAR DIRECTORIO =====
function initializeDirectory() {
  getUserLocation();
  renderVeterinarias();
  setupEventListeners();
}

// ===== GEOLOCALIZACIÓN =====
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        applyFilters();
      },
      (error) => {
        console.log("Error obteniendo ubicación:", error);
        // Ubicación por defecto (CDMX)
        userLocation = { lat: 19.4326, lng: -99.1332 };
        applyFilters();
      }
    );
  } else {
    // Ubicación por defecto si no hay geolocalización
    userLocation = { lat: 19.4326, lng: -99.1332 };
    applyFilters();
  }
}

// ===== CALCULAR DISTANCIA =====
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Radio de la Tierra en km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * 
    Math.cos((lat2 * Math.PI) / 180) * 
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// ===== APLICAR FILTROS =====
function applyFilters() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const selectedCity = document.getElementById("cityFilter").value;
  const sortBy = document.getElementById("sortBy").value;

  // Filtrar veterinarias
  filteredVeterinarias = veterinarias.filter((vet) => {
    const matchesSearch = 
      vet.nombre.toLowerCase().includes(searchTerm) || 
      vet.zona.toLowerCase().includes(searchTerm);
    const matchesCity = selectedCity === "todas" || vet.ciudad === selectedCity;
    return matchesSearch && matchesCity;
  });

  // Agregar distancia si tenemos ubicación del usuario
  if (userLocation) {
    filteredVeterinarias = filteredVeterinarias.map((vet) => ({
      ...vet,
      distancia: calculateDistance(userLocation.lat, userLocation.lng, vet.lat, vet.lng),
    }));
  }

  // Ordenar según criterio seleccionado
  filteredVeterinarias.sort((a, b) => {
    switch (sortBy) {
      case "distancia":
        return (a.distancia || 0) - (b.distancia || 0);
      case "rating":
        return b.rating - a.rating;
      case "nombre":
        return a.nombre.localeCompare(b.nombre);
      default:
        return 0;
    }
  });

  renderVeterinarias();
}

// ===== RENDERIZAR VETERINARIAS =====
function renderVeterinarias() {
  const grid = document.getElementById("veterinariasGrid");
  const noResults = document.getElementById("noResults");
  const resultsCount = document.getElementById("resultsCount");

  // Actualizar contador de resultados
  const countText = `Mostrando ${filteredVeterinarias.length} veterinarias`;
  const locationText = userLocation ? " ordenadas por distancia" : "";
  resultsCount.textContent = countText + locationText;

  if (filteredVeterinarias.length === 0) {
    grid.classList.add("hidden");
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");
  grid.classList.remove("hidden");

  grid.innerHTML = filteredVeterinarias
    .map((vet) => `
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
             <i data-lucide="star"></i>
             <span>${vet.rating}</span>
             <span style="color: #9ca3af;">(${vet.reviews})</span>
           </div>
         </div>
         <div class="vet-info">
           <div class="vet-info-item">
             <i data-lucide="map-pin"></i>
             <span>${vet.direccion}</span>
           </div>
           <div class="vet-info-item">
             <i data-lucide="phone"></i>
             <span>${vet.telefono}</span>
           </div>
           <div class="vet-info-item">
             <i data-lucide="clock"></i>
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
             <i data-lucide="phone"></i>
             Llamar
           </button>
           <button class="btn btn-directions" onclick="getDirections(${vet.lat}, ${vet.lng})">
             <i data-lucide="navigation"></i>
             Cómo llegar
           </button>
           <button class="btn btn-details" onclick="showVetDetail(${vet.id})">
             <i data-lucide="info"></i>
             Ver Detalles
           </button>
         </div>
       </div>
     </div>
   `)
   .join("");

 // Reinicializar iconos de Lucide después de renderizar
 lucide.createIcons();
}

// ===== RENDERIZAR DETALLE DE VETERINARIA =====
function renderVetDetail(vet) {
 const detailContainer = document.getElementById("vetDetailContent");
 
 // Calcular distancia si tenemos ubicación
 const distanceText = vet.distancia ? `${vet.distancia.toFixed(1)} km de distancia` : '';
 
 // Generar estrellas para rating
 const stars = Array.from({length: 5}, (_, i) => {
   const filled = i < Math.floor(vet.rating);
   return `<i data-lucide="star" ${filled ? 'style="fill: #fbbf24; color: #fbbf24;"' : 'style="color: #d1d5db;"'}></i>`;
 }).join('');

 detailContainer.innerHTML = `
   <div class="vet-detail-header">
     <div class="vet-detail-image">
       <img src="${vet.imagen}" alt="${vet.nombre}">
       ${vet.emergencia24h ? '<div class="badge badge-24h">24h</div>' : ''}
       ${vet.distancia ? `<div class="badge badge-distance">${vet.distancia.toFixed(1)} km</div>` : ''}
     </div>
     
     <div class="vet-detail-info">
       <div class="vet-detail-title">
         <div>
           <h1 class="vet-detail-name">${vet.nombre}</h1>
           <div class="vet-detail-rating">
             ${stars}
             <span>${vet.rating}</span>
             <span style="color: #9ca3af;">(${vet.reviews} reseñas)</span>
           </div>
         </div>
       </div>
       
       <p class="vet-detail-description">${vet.descripcion}</p>
       
       <div class="vet-detail-meta">
         <div class="vet-meta-item">
           <i data-lucide="map-pin"></i>
           <span>${vet.direccion}</span>
         </div>
         <div class="vet-meta-item">
           <i data-lucide="phone"></i>
           <span>${vet.telefono}</span>
         </div>
         <div class="vet-meta-item">
           <i data-lucide="clock"></i>
           <span>${vet.horario}</span>
         </div>
         ${distanceText ? `
           <div class="vet-meta-item">
             <i data-lucide="navigation"></i>
             <span>${distanceText}</span>
           </div>
         ` : ''}
       </div>
       
       <div class="vet-detail-actions">
         <button class="btn btn-primary" onclick="callVet('${vet.telefono}')">
           <i data-lucide="phone"></i>
           Llamar Ahora
         </button>
         <button class="btn btn-outline" onclick="getDirections(${vet.lat}, ${vet.lng})">
           <i data-lucide="navigation"></i>
           Cómo Llegar
         </button>
       </div>
     </div>
   </div>
   
   <div class="vet-detail-services">
     <h3>Servicios Disponibles</h3>
     <div class="services-list">
       ${vet.servicios.map(servicio => `<span class="service-tag">${servicio}</span>`).join('')}
     </div>
   </div>
   
   <div class="comments-section">
     <div class="comments-header">
       <h3 class="comments-title">Reseñas de Usuarios</h3>
       <div class="comments-summary">
         <i data-lucide="star"></i>
         <span>${vet.rating} • ${vet.reviews} reseñas</span>
       </div>
     </div>
     
     <div class="comments-list">
       ${renderComments(vet.comentarios)}
     </div>
     
     <div style="text-align: center; margin-top: 24px;">
       <button class="add-comment-btn" onclick="showAddCommentForm(${vet.id})">
         <i data-lucide="plus"></i>
         Agregar Reseña
       </button>
     </div>
   </div>
 `;

 // Reinicializar iconos
 lucide.createIcons();
}

// ===== RENDERIZAR COMENTARIOS =====
function renderComments(comentarios) {
 if (!comentarios || comentarios.length === 0) {
   return `
     <div style="text-align: center; padding: 40px; color: var(--text-light);">
       <i data-lucide="message-square" style="width: 48px; height: 48px; margin-bottom: 16px; color: #9ca3af;"></i>
       <p>No hay reseñas aún. ¡Sé el primero en compartir tu experiencia!</p>
     </div>
   `;
 }

 return comentarios.map(comentario => {
   const stars = Array.from({length: 5}, (_, i) => {
     const filled = i < comentario.rating;
     return `<i data-lucide="star" ${filled ? 'style="fill: #fbbf24; color: #fbbf24;"' : 'style="color: #d1d5db;"'}></i>`;
   }).join('');

   // Formatear fecha
   const fecha = new Date(comentario.fecha).toLocaleDateString('es-ES', {
     year: 'numeric',
     month: 'long',
     day: 'numeric'
   });

   return `
     <div class="comment-card">
       <div class="comment-header">
         <div class="comment-user">
           <div class="comment-name">${comentario.usuario}</div>
           <div class="comment-meta">
             <span class="comment-mascota">${comentario.mascota}</span>
             <span>•</span>
             <span>${fecha}</span>
           </div>
         </div>
         <div class="comment-rating">
           ${stars}
         </div>
       </div>
       <p class="comment-text">${comentario.comentario}</p>
     </div>
   `;
 }).join('');
}

// ===== CONFIGURAR EVENT LISTENERS =====
function setupEventListeners() {
 const searchInput = document.getElementById("searchInput");
 const cityFilter = document.getElementById("cityFilter");
 const sortBy = document.getElementById("sortBy");

 searchInput.addEventListener("input", debounce(applyFilters, 300));
 cityFilter.addEventListener("change", applyFilters);
 sortBy.addEventListener("change", applyFilters);
}

// ===== FUNCIÓN DEBOUNCE =====
function debounce(func, wait) {
 let timeout;
 return function executedFunction(...args) {
   const later = () => {
     clearTimeout(timeout);
     func(...args);
   };
   clearTimeout(timeout);
   timeout = setTimeout(later, wait);
 };
}

// ===== FUNCIONES DE ACCIÓN =====
function callVet(telefono) {
 window.open(`tel:${telefono}`, "_self");
}

function getDirections(lat, lng) {
 const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
 window.open(url, "_blank");
}

function showAddCommentForm(vetId) {
 // Por ahora, solo mostrar una alerta
 // Más adelante puedes implementar un modal para agregar comentarios
 alert('Funcionalidad de agregar reseña próximamente. ¡Gracias por tu interés!');
}

// ===== MENÚ MÓVIL =====
function setupMobileMenu() {
 const mobileToggle = document.getElementById('mobileMenuToggle');
 const navMenu = document.getElementById('navMenu');
 
 if (!mobileToggle || !navMenu) {
   console.error('Elementos del menú móvil no encontrados');
   return;
 }

 // Toggle del menú
 mobileToggle.addEventListener('click', function(e) {
   e.stopPropagation();
   navMenu.classList.toggle('active');
   
   // Cambiar icono
   const icon = mobileToggle.querySelector('i');
   if (navMenu.classList.contains('active')) {
     icon.setAttribute('data-lucide', 'x');
   } else {
     icon.setAttribute('data-lucide', 'menu');
   }
   lucide.createIcons();
 });

 // Cerrar menú al hacer click fuera
 document.addEventListener('click', function(e) {
   if (navMenu.classList.contains('active') && 
       !navMenu.contains(e.target) && 
       !mobileToggle.contains(e.target)) {
     navMenu.classList.remove('active');
     const icon = mobileToggle.querySelector('i');
     icon.setAttribute('data-lucide', 'menu');
     lucide.createIcons();
   }
 });

 // Cerrar menú al hacer click en enlaces
 navMenu.querySelectorAll('a, button').forEach(function(element) {
   element.addEventListener('click', function() {
     navMenu.classList.remove('active');
     const icon = mobileToggle.querySelector('i');
     icon.setAttribute('data-lucide', 'menu');
     lucide.createIcons();
   });
 });
}

// ===== SMOOTH SCROLL =====
function setupSmoothScroll() {
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
     e.preventDefault();
     const target = document.querySelector(this.getAttribute('href'));
     if (target) {
       target.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
       });
     }
   });
 });
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
 // Inicializar iconos de Lucide
 lucide.createIcons();
 
 // Configurar menú móvil
 setupMobileMenu();
 
 // Configurar smooth scroll
 setupSmoothScroll();
 
 console.log('VetFinder inicializado correctamente');
});