<script>
    // Configuration API
    const API_BASE_URL = 'https://es-parfumerie-backend.onrender.com';
    
    // État admin
    const AdminState = {
        isAuthenticated: false,
        adminToken: null,
        currentUser: null,
        currentSection: 'dashboard'
    };
    
    // Données de démonstration avec gestion locale
    let DEMO_DATA = {
        products: [
            {
                id: 1,
                name: 'Parfum Élégance',
                description: 'Un parfum élégant et raffiné pour les occasions spéciales',
                price: 89.99,
                stock: 50,
                category: 'unisex',
                image_url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                is_active: true,
                created_at: '2023-10-01'
            },
            {
                id: 2,
                name: 'Essence de Nuit',
                description: 'Un parfum mystérieux et envoûtant pour la soirée',
                price: 75.50,
                stock: 30,
                category: 'men',
                image_url: 'https://images.unsplash.com/photo-1590736969956-6d9c2a8d6977?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                is_active: true,
                created_at: '2023-10-02'
            },
            {
                id: 3,
                name: 'Fleur de Printemps',
                description: 'Un parfum frais et floral pour le quotidien',
                price: 65.00,
                stock: 100,
                category: 'women',
                image_url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                is_active: true,
                created_at: '2023-10-03'
            }
        ],
        orders: [
            {
                id: 1,
                order_number: 'ES2023001',
                customer_name: 'Jean Dupont',
                date: '2023-10-15',
                items: 2,
                total: 165.49,
                status: 'delivered'
            },
            {
                id: 2,
                order_number: 'ES2023002',
                customer_name: 'Marie Martin',
                date: '2023-10-16',
                items: 1,
                total: 89.99,
                status: 'processing'
            }
        ],
        users: [
            {
                id: 1,
                name: 'Admin System',
                email: 'admin@esparfumerie.com',
                role: 'admin',
                registered: '2023-01-01',
                last_login: '2023-10-16'
            },
            {
                id: 2,
                name: 'Jean Dupont',
                email: 'jean@email.com',
                role: 'user',
                registered: '2023-10-01',
                last_login: '2023-10-15'
            }
        ]
    };
    
    // Initialisation
    document.addEventListener('DOMContentLoaded', function() {
        // Charger les données depuis localStorage
        loadDataFromStorage();
        
        checkAdminAuth();
        setupEventListeners();
        loadDemoData();
    });
    
    // Charger les données depuis localStorage
    function loadDataFromStorage() {
        const savedProducts = localStorage.getItem('admin-products');
        if (savedProducts) {
            DEMO_DATA.products = JSON.parse(savedProducts);
        }
        
        const savedOrders = localStorage.getItem('admin-orders');
        if (savedOrders) {
            DEMO_DATA.orders = JSON.parse(savedOrders);
        }
        
        const savedUsers = localStorage.getItem('admin-users');
        if (savedUsers) {
            DEMO_DATA.users = JSON.parse(savedUsers);
        }
    }
    
    // Sauvegarder les produits dans localStorage
    function saveProductsToStorage() {
        localStorage.setItem('admin-products', JSON.stringify(DEMO_DATA.products));
    }
    
    // Vérifier l'authentification
    function checkAdminAuth() {
        const token = localStorage.getItem('admin-token');
        const expiry = localStorage.getItem('admin-token-expiry');
        
        if (token && expiry && new Date().getTime() < parseInt(expiry)) {
            AdminState.isAuthenticated = true;
            AdminState.adminToken = token;
            AdminState.currentUser = {
                name: 'Administrateur',
                email: 'admin@esparfumerie.com',
                role: 'admin'
            };
            showAdminPanel();
        } else {
            showLoginPanel();
        }
    }
    
    // Afficher le login
    function showLoginPanel() {
        document.getElementById('login-container').style.display = 'block';
        document.getElementById('admin-container').style.display = 'none';
    }
    
    // Afficher le panel admin
    function showAdminPanel() {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('admin-container').style.display = 'block';
        
        // Mettre à jour le nom de l'utilisateur
        if (AdminState.currentUser) {
            document.getElementById('admin-user-name').textContent = AdminState.currentUser.name;
        }
        
        // Charger les données
        if (AdminState.currentSection === 'dashboard') {
            loadDashboardData();
        }
    }
    
    // Configurer les événements
    function setupEventListeners() {
        // Formulaire de connexion
        const loginForm = document.getElementById('admin-login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', handleAdminLogin);
        }
        
        // Déconnexion
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleAdminLogout);
        }
        
        // Navigation du menu
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', function() {
                const section = this.getAttribute('data-section');
                showSection(section);
            });
        });
        
        // Formulaire paramètres
        const settingsForm = document.getElementById('settings-form');
        if (settingsForm) {
            settingsForm.addEventListener('submit', handleSettingsSubmit);
        }
        
        // Ajouter un produit via le bouton "Nouveau produit"
        document.querySelector('.btn-add')?.addEventListener('click', function(e) {
            e.preventDefault();
            showProductModal();
        });
        
        // Sauvegarder produit avec le bouton du modal
        document.querySelector('.modal-footer .btn-primary')?.addEventListener('click', function(e) {
            e.preventDefault();
            saveProduct();
        });
    }
    
    // Gérer la connexion admin
    async function handleAdminLogin(e) {
        e.preventDefault();
        
        const email = document.getElementById('admin-email').value;
        const password = document.getElementById('admin-password').value;
        const alert = document.getElementById('login-alert');
        
        // Cacher toute alerte précédente
        alert.style.display = 'none';
        
        try {
            // Essayer de se connecter via l'API
            const response = await fetch(`${API_BASE_URL}/api/auth/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            
            if (response.ok) {
                const data = await response.json();
                
                // Sauvegarder le token
                const expiry = new Date().getTime() + (24 * 60 * 60 * 1000); // 24h
                localStorage.setItem('admin-token', data.token);
                localStorage.setItem('admin-token-expiry', expiry.toString());
                
                // Mettre à jour l'état
                AdminState.isAuthenticated = true;
                AdminState.adminToken = data.token;
                AdminState.currentUser = data.user;
                
                // Afficher le panel admin
                showAdminPanel();
                
            } else {
                // Vérifier les identifiants par défaut
                if (email === 'admin@esparfumerie.com' && password === 'admin123') {
                    // Mode démo - créer un token local
                    const token = 'demo_admin_token_' + Date.now();
                    const expiry = new Date().getTime() + (24 * 60 * 60 * 1000);
                    
                    localStorage.setItem('admin-token', token);
                    localStorage.setItem('admin-token-expiry', expiry.toString());
                    
                    AdminState.isAuthenticated = true;
                    AdminState.adminToken = token;
                    AdminState.currentUser = {
                        name: 'Administrateur',
                        email: email,
                        role: 'admin'
                    };
                    
                    showAdminPanel();
                } else {
                    showAlert(alert, 'Identifiants incorrects', 'error');
                }
            }
        } catch (error) {
            console.error('Erreur de connexion:', error);
            // Mode démo avec identifiants par défaut
            if (email === 'admin@esparfumerie.com' && password === 'admin123') {
                const token = 'demo_admin_token_' + Date.now();
                const expiry = new Date().getTime() + (24 * 60 * 60 * 1000);
                
                localStorage.setItem('admin-token', token);
                localStorage.setItem('admin-token-expiry', expiry.toString());
                
                AdminState.isAuthenticated = true;
                AdminState.adminToken = token;
                AdminState.currentUser = {
                    name: 'Administrateur',
                    email: email,
                    role: 'admin'
                };
                
                showAdminPanel();
            } else {
                showAlert(alert, 'Erreur de connexion au serveur. Mode démo activé avec identifiants par défaut.', 'error');
            }
        }
    }
    
    // Gérer la déconnexion
    function handleAdminLogout() {
        localStorage.removeItem('admin-token');
        localStorage.removeItem('admin-token-expiry');
        AdminState.isAuthenticated = false;
        AdminState.adminToken = null;
        AdminState.currentUser = null;
        showLoginPanel();
    }
    
    // Afficher une section
    function showSection(sectionId) {
        // Mettre à jour le menu actif
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === sectionId) {
                item.classList.add('active');
            }
        });
        
        // Cacher toutes les sections
        document.querySelectorAll('.admin-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Afficher la section demandée
        const section = document.getElementById(sectionId + '-section');
        if (section) {
            section.classList.add('active');
            AdminState.currentSection = sectionId;
            
            // Charger les données si nécessaire
            switch(sectionId) {
                case 'dashboard':
                    loadDashboardData();
                    break;
                case 'products':
                    loadProducts();
                    break;
                case 'orders':
                    loadOrders();
                    break;
                case 'users':
                    loadUsers();
                    break;
            }
        }
    }
    
    // Charger les données de démonstration
    function loadDemoData() {
        // Calculer le chiffre d'affaires
        const revenue = DEMO_DATA.products.reduce((total, product) => {
            return total + (product.price * (product.stock || 0) * 0.1); // Simulation de vente
        }, 0);
        
        // Statistiques
        document.getElementById('total-products').textContent = DEMO_DATA.products.length;
        document.getElementById('total-orders').textContent = DEMO_DATA.orders.length;
        document.getElementById('total-users').textContent = DEMO_DATA.users.length;
        document.getElementById('total-revenue').textContent = revenue.toFixed(2) + ' €';
        
        // Commandes récentes
        updateRecentOrders(DEMO_DATA.orders);
        
        // Produits
        updateProductsTable(DEMO_DATA.products);
        
        // Commandes
        updateOrdersTable(DEMO_DATA.orders);
        
        // Utilisateurs
        updateUsersTable(DEMO_DATA.users);
    }
    
    // Charger les données du dashboard
    async function loadDashboardData() {
        try {
            // Essayer de charger depuis l'API
            const response = await fetch(`${API_BASE_URL}/api/products`);
            
            if (response.ok) {
                const data = await response.json();
                
                // Mettre à jour les statistiques
                document.getElementById('total-products').textContent = data.count || data.products?.length || 0;
                
                // Pour les autres stats, utiliser des valeurs par défaut
                document.getElementById('total-orders').textContent = DEMO_DATA.orders.length;
                document.getElementById('total-users').textContent = DEMO_DATA.users.length;
                
                const revenue = (data.products || []).reduce((total, product) => {
                    return total + (product.price * (product.stock || 0) * 0.1);
                }, 0);
                
                document.getElementById('total-revenue').textContent = revenue.toFixed(2) + ' €';
                
            } else {
                // Utiliser les données de démonstration
                loadDemoData();
            }
        } catch (error) {
            console.error('Erreur API:', error);
            // Utiliser les données de démonstration
            loadDemoData();
        }
    }
    
    // Mettre à jour les commandes récentes
    function updateRecentOrders(orders) {
        const tbody = document.getElementById('recent-orders-body');
        
        if (!orders || orders.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; padding: 40px; color: var(--gray-color);">
                        <i class="fas fa-shopping-cart" style="font-size: 32px; margin-bottom: 10px; display: block;"></i>
                        Aucune commande récente
                    </td>
                </tr>
            `;
            return;
        }
        
        // Limiter à 5 commandes pour le dashboard
        const recentOrders = orders.slice(0, 5);
        
        tbody.innerHTML = recentOrders.map(order => `
            <tr>
                <td><strong>${order.order_number}</strong></td>
                <td>${order.customer_name}</td>
                <td>${order.date}</td>
                <td><strong>${order.total} €</strong></td>
                <td>
                    <span class="status-badge ${order.status === 'delivered' ? 'status-active' : 'status-pending'}">
                        ${order.status === 'delivered' ? 'Livré' : 
                          order.status === 'processing' ? 'En traitement' : 
                          order.status === 'pending' ? 'En attente' : order.status}
                    </span>
                </td>
            </tr>
        `).join('');
    }
    
    // Charger les produits
    async function loadProducts() {
        try {
            const response = await fetch(`${API_BASE_URL}/api/products`);
            
            if (response.ok) {
                const data = await response.json();
                updateProductsTable(data.products);
            } else {
                updateProductsTable(DEMO_DATA.products);
            }
        } catch (error) {
            console.error('Erreur API produits:', error);
            updateProductsTable(DEMO_DATA.products);
        }
    }
    
    // Mettre à jour la table des produits
    function updateProductsTable(products) {
        const tbody = document.getElementById('products-body');
        
        if (!products || products.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; padding: 40px; color: var(--gray-color);">
                        <i class="fas fa-box-open" style="font-size: 32px; margin-bottom: 10px; display: block;"></i>
                        Aucun produit disponible
                    </td>
                </tr>
            `;
            return;
        }
        
        tbody.innerHTML = products.map(product => `
            <tr>
                <td>${product.id}</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="width: 40px; height: 40px; background: #f0f0f0; border-radius: 4px; 
                             background-image: url('${product.image_url || 'https://via.placeholder.com/40'}');
                             background-size: cover; background-position: center;">
                        </div>
                        <div>
                            <div style="font-weight: 500;">${product.name}</div>
                            <div style="font-size: 12px; color: var(--gray-color);">
                                ${(product.description || '').substring(0, 50)}...
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    ${product.category === 'men' ? 'Homme' : 
                      product.category === 'women' ? 'Femme' : 'Unisex'}
                </td>
                <td><strong>${product.price} €</strong></td>
                <td>
                    <span style="padding: 4px 10px; border-radius: 12px; font-size: 12px; 
                          background: ${product.stock > 10 ? 'rgba(46, 204, 113, 0.1)' : 
                                     product.stock > 0 ? 'rgba(243, 156, 18, 0.1)' : 
                                     'rgba(231, 76, 60, 0.1)'};
                          color: ${product.stock > 10 ? '#2ecc71' : 
                                  product.stock > 0 ? '#f39c12' : '#e74c3c'};">
                        ${product.stock}
                    </span>
                </td>
                <td>
                    <span class="status-badge ${product.is_active ? 'status-active' : 'status-inactive'}">
                        ${product.is_active ? 'Actif' : 'Inactif'}
                    </span>
                </td>
                <td>
                    <div class="table-actions">
                        <button class="btn-action btn-edit" onclick="editProduct(${product.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-action btn-delete" onclick="deleteProduct(${product.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }
    
    // Charger les commandes
    function loadOrders() {
        updateOrdersTable(DEMO_DATA.orders);
        document.getElementById('orders-count').textContent = `${DEMO_DATA.orders.length} commandes`;
    }
    
    // Mettre à jour la table des commandes
    function updateOrdersTable(orders) {
        const tbody = document.getElementById('orders-body');
        
        if (!orders || orders.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; padding: 40px; color: var(--gray-color);">
                        <i class="fas fa-shopping-cart" style="font-size: 32px; margin-bottom: 10px; display: block;"></i>
                        Aucune commande
                    </td>
                </tr>
            `;
            return;
        }
        
        tbody.innerHTML = orders.map(order => `
            <tr>
                <td><strong>${order.order_number}</strong></td>
                <td>${order.customer_name}</td>
                <td>${order.date}</td>
                <td>${order.items} article(s)</td>
                <td><strong>${order.total} €</strong></td>
                <td>
                    <span class="status-badge ${order.status === 'delivered' ? 'status-active' : 'status-pending'}">
                        ${order.status === 'delivered' ? 'Livré' : 
                          order.status === 'processing' ? 'En traitement' : 
                          order.status === 'pending' ? 'En attente' : order.status}
                    </span>
                </td>
                <td>
                    <div class="table-actions">
                        <button class="btn-action btn-edit" onclick="viewOrder(${order.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }
    
    // Charger les utilisateurs
    function loadUsers() {
        updateUsersTable(DEMO_DATA.users);
        document.getElementById('users-count').textContent = `${DEMO_DATA.users.length} utilisateurs`;
    }
    
    // Mettre à jour la table des utilisateurs
    function updateUsersTable(users) {
        const tbody = document.getElementById('users-body');
        
        if (!users || users.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; padding: 40px; color: var(--gray-color);">
                        <i class="fas fa-users" style="font-size: 32px; margin-bottom: 10px; display: block;"></i>
                        Aucun utilisateur
                    </td>
                </tr>
            `;
            return;
        }
        
        tbody.innerHTML = users.map(user => `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <span style="padding: 4px 10px; border-radius: 12px; font-size: 12px; 
                          background: ${user.role === 'admin' ? 'rgba(138, 109, 59, 0.1)' : 'rgba(52, 152, 219, 0.1)'};
                          color: ${user.role === 'admin' ? 'var(--primary-color)' : 'var(--info-color)'};">
                        ${user.role === 'admin' ? 'Administrateur' : 'Utilisateur'}
                    </span>
                </td>
                <td>${user.registered}</td>
                <td>${user.last_login}</td>
                <td>
                    <div class="table-actions">
                        ${user.role !== 'admin' ? `
                            <button class="btn-action btn-edit" onclick="editUser(${user.id})">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn-action btn-delete" onclick="deleteUser(${user.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        ` : `
                            <span style="color: var(--gray-color); font-size: 12px;">Administrateur</span>
                        `}
                    </div>
                </td>
            </tr>
        `).join('');
    }
    
    // Gestion du modal produit
    function showProductModal(product = null) {
        const modal = document.getElementById('product-modal');
        const title = document.getElementById('product-modal-title');
        
        if (product) {
            title.textContent = 'Modifier le produit';
            document.getElementById('product-id').value = product.id;
            document.getElementById('product-name').value = product.name;
            document.getElementById('product-description').value = product.description || '';
            document.getElementById('product-price').value = product.price;
            document.getElementById('product-stock').value = product.stock || 0;
            document.getElementById('product-category').value = product.category || '';
            document.getElementById('product-image').value = product.image_url || '';
            document.getElementById('product-active').checked = product.is_active !== false;
        } else {
            title.textContent = 'Ajouter un produit';
            document.getElementById('product-form').reset();
            document.getElementById('product-id').value = '';
            document.getElementById('product-active').checked = true;
            document.getElementById('product-stock').value = 0;
        }
        
        modal.classList.add('active');
    }
    
    function hideProductModal() {
        document.getElementById('product-modal').classList.remove('active');
    }
    
    // Sauvegarder un produit
    async function saveProduct() {
        const productId = document.getElementById('product-id').value;
        const productData = {
            name: document.getElementById('product-name').value,
            description: document.getElementById('product-description').value,
            price: parseFloat(document.getElementById('product-price').value),
            stock: parseInt(document.getElementById('product-stock').value),
            category: document.getElementById('product-category').value,
            image_url: document.getElementById('product-image').value || '',
            is_active: document.getElementById('product-active').checked
        };
        
        // Validation
        if (!productData.name || !productData.description || !productData.price || !productData.category) {
            showAlert(document.getElementById('product-alert'), 'Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }
        
        if (isNaN(productData.price) || productData.price <= 0) {
            showAlert(document.getElementById('product-alert'), 'Le prix doit être un nombre positif', 'error');
            return;
        }
        
        if (isNaN(productData.stock) || productData.stock < 0) {
            showAlert(document.getElementById('product-alert'), 'Le stock doit être un nombre positif ou zéro', 'error');
            return;
        }
        
        try {
            let response;
            const headers = {
                'Content-Type': 'application/json'
            };
            
            // Ajouter le token si disponible
            if (AdminState.adminToken) {
                headers['Authorization'] = `Bearer ${AdminState.adminToken}`;
            }
            
            if (productId) {
                // Mise à jour - essayer d'abord avec l'API
                response = await fetch(`${API_BASE_URL}/api/products/${productId}`, {
                    method: 'PUT',
                    headers: headers,
                    body: JSON.stringify(productData)
                });
            } else {
                // Création - essayer d'abord avec l'API
                response = await fetch(`${API_BASE_URL}/api/products`, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(productData)
                });
            }
            
            if (response && response.ok) {
                // Succès API
                hideProductModal();
                showAlert(document.getElementById('product-alert'), 
                         'Produit enregistré avec succès', 'success');
                
                // Recharger les produits
                setTimeout(() => loadProducts(), 500);
                
            } else {
                // Échec API - utiliser le mode démo
                useDemoMode(productId, productData);
            }
        } catch (error) {
            console.error('Erreur API:', error);
            // Mode démo
            useDemoMode(productId, productData);
        }
    }
    
    // Fonction pour gérer le mode démo
    function useDemoMode(productId, productData) {
        if (productId) {
            // Mise à jour en mode démo
            const index = DEMO_DATA.products.findIndex(p => p.id == productId);
            if (index !== -1) {
                productData.id = parseInt(productId);
                productData.created_at = DEMO_DATA.products[index].created_at;
                DEMO_DATA.products[index] = productData;
            }
        } else {
            // Création en mode démo
            const newId = DEMO_DATA.products.length > 0 ? 
                Math.max(...DEMO_DATA.products.map(p => p.id)) + 1 : 1;
            
            productData.id = newId;
            productData.created_at = new Date().toISOString().split('T')[0];
            DEMO_DATA.products.push(productData);
        }
        
        // Sauvegarder dans localStorage
        saveProductsToStorage();
        
        hideProductModal();
        showAlert(document.getElementById('product-alert'), 
                 'Produit enregistré en mode démo', 'success');
        
        // Recharger les produits
        setTimeout(() => {
            updateProductsTable(DEMO_DATA.products);
            loadDashboardData(); // Mettre à jour les stats
        }, 500);
    }
    
    // Éditer un produit
    async function editProduct(productId) {
        try {
            // Essayer d'abord avec l'API
            const response = await fetch(`${API_BASE_URL}/api/products/${productId}`);
            
            if (response.ok) {
                const data = await response.json();
                showProductModal(data.product);
            } else {
                // Mode démo - trouver le produit dans les données de démo
                const product = DEMO_DATA.products.find(p => p.id == productId);
                if (product) {
                    showProductModal(product);
                } else {
                    showAlert(document.getElementById('product-alert'), 
                             'Produit non trouvé', 'error');
                }
            }
        } catch (error) {
            console.error('Erreur API:', error);
            // Mode démo
            const product = DEMO_DATA.products.find(p => p.id == productId);
            if (product) {
                showProductModal(product);
            } else {
                showAlert(document.getElementById('product-alert'), 
                         'Produit non trouvé', 'error');
            }
        }
    }
    
    // Supprimer un produit
    async function deleteProduct(productId) {
        if (!confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
            return;
        }
        
        try {
            const headers = {};
            if (AdminState.adminToken) {
                headers['Authorization'] = `Bearer ${AdminState.adminToken}`;
            }
            
            // Essayer d'abord avec l'API
            const response = await fetch(`${API_BASE_URL}/api/products/${productId}`, {
                method: 'DELETE',
                headers: headers
            });
            
            if (response.ok) {
                showAlert(document.getElementById('product-alert'), 
                         'Produit supprimé avec succès', 'success');
                
                // Recharger les produits
                setTimeout(() => loadProducts(), 500);
                
            } else {
                // Mode démo
                useDemoDeleteMode(productId);
            }
        } catch (error) {
            console.error('Erreur API:', error);
            // Mode démo
            useDemoDeleteMode(productId);
        }
    }
    
    // Fonction pour gérer la suppression en mode démo
    function useDemoDeleteMode(productId) {
        const index = DEMO_DATA.products.findIndex(p => p.id == productId);
        if (index !== -1) {
            DEMO_DATA.products.splice(index, 1);
            saveProductsToStorage();
            
            showAlert(document.getElementById('product-alert'), 
                     'Produit supprimé en mode démo', 'success');
            
            // Recharger les produits
            setTimeout(() => {
                updateProductsTable(DEMO_DATA.products);
                loadDashboardData(); // Mettre à jour les stats
            }, 500);
        } else {
            showAlert(document.getElementById('product-alert'), 
                     'Produit non trouvé', 'error');
        }
    }
    
    // Gérer les paramètres
    function handleSettingsSubmit(e) {
        e.preventDefault();
        showAlert(document.getElementById('settings-alert'), 
                 'Paramètres enregistrés avec succès', 'success');
    }
    
    // Fonctions auxiliaires
    function viewOrder(orderId) {
        alert(`Voir les détails de la commande #${orderId}\n\nMode démo : cette fonctionnalité est en cours de développement.`);
    }
    
    function editUser(userId) {
        alert(`Éditer l'utilisateur #${userId}\n\nMode démo : cette fonctionnalité est en cours de développement.`);
    }
    
    function deleteUser(userId) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
            alert(`Utilisateur #${userId} supprimé (mode démo)`);
        }
    }
    
    function showAlert(container, message, type = 'success') {
        if (!container) return;
        
        container.textContent = message;
        container.className = 'alert';
        container.classList.add(`alert-${type}`);
        container.style.display = 'block';
        
        // Masquer après 5 secondes
        setTimeout(() => {
            container.style.display = 'none';
        }, 5000);
    }
</script>
