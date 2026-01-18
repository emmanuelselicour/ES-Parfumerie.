// Gestion de l'authentification
function initAuth() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const userBtn = document.getElementById('userBtn');
    
    // Vérifier l'état de connexion au chargement
    checkAuthState();
    
    // Gérer la soumission du formulaire de connexion
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            try {
                // Appel API de connexion
                const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    // Sauvegarder le token et les infos utilisateur
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    
                    // Fermer la modale
                    document.getElementById('login-modal').classList.remove('active');
                    document.body.style.overflow = '';
                    
                    // Mettre à jour l'interface
                    updateAuthUI(data.user);
                    
                    // Afficher une notification
                    showNotification('Connexion réussie !', 'success');
                } else {
                    throw new Error(data.message || 'Erreur de connexion');
                }
            } catch (error) {
                console.error('Erreur de connexion:', error);
                showNotification(error.message || 'Erreur de connexion', 'error');
            }
        });
    }
    
    // Gérer la soumission du formulaire d'inscription
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm').value;
            
            // Validation
            if (password !== confirmPassword) {
                showNotification('Les mots de passe ne correspondent pas', 'error');
                return;
            }
            
            try {
                // Appel API d'inscription
                const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, password })
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    // Sauvegarder le token et les infos utilisateur
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    
                    // Fermer la modale
                    document.getElementById('login-modal').classList.remove('active');
                    document.body.style.overflow = '';
                    
                    // Mettre à jour l'interface
                    updateAuthUI(data.user);
                    
                    // Afficher une notification
                    showNotification('Inscription réussie !', 'success');
                } else {
                    throw new Error(data.message || 'Erreur d\'inscription');
                }
            } catch (error) {
                console.error('Erreur d\'inscription:', error);
                showNotification(error.message || 'Erreur d\'inscription', 'error');
            }
        });
    }
    
    // Gérer la déconnexion
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Supprimer les données d'authentification
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            
            // Mettre à jour l'interface
            updateAuthUI(null);
            
            // Afficher une notification
            showNotification('Déconnexion réussie', 'info');
            
            // Rediriger vers la page d'accueil
            window.location.href = 'index.html';
        });
    }
}

// Vérifier l'état d'authentification
function checkAuthState() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (token && user) {
        updateAuthUI(user);
    } else {
        updateAuthUI(null);
    }
}

// Mettre à jour l'interface en fonction de l'état d'authentification
function updateAuthUI(user) {
    const userBtn = document.getElementById('userBtn');
    const userDropdown = document.querySelector('.user-dropdown');
    
    if (user) {
        // Utilisateur connecté
        userBtn.innerHTML = `<i class="fas fa-user-check"></i>`;
        userBtn.title = `Connecté en tant que ${user.name}`;
        
        // Mettre à jour les liens dans le dropdown
        const profileLink = userDropdown.querySelector('.user-link:first-child span');
        if (profileLink) {
            profileLink.textContent = user.name;
        }
    } else {
        // Utilisateur non connecté
        userBtn.innerHTML = `<i class="fas fa-user"></i>`;
        userBtn.title = 'Mon compte';
        
        // Rétablir le texte par défaut
        const profileLink = userDropdown.querySelector('.user-link:first-child span');
        if (profileLink) {
            profileLink.textContent = 'Mon profil';
        }
    }
}

// Vérifier si l'utilisateur est connecté (pour les pages protégées)
function requireAuth() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!token || !user) {
        // Rediriger vers la page d'accueil avec la modale de connexion ouverte
        window.location.href = 'index.html#login-modal';
        return null;
    }
    
    return user;
}

// Exposer les fonctions globalement
window.checkAuthState = checkAuthState;
window.requireAuth = requireAuth;
