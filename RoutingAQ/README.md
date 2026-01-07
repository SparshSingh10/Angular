# RoutingAQ - Angular Routing Application

This Angular application demonstrates advanced routing concepts including lazy loading, route guards, and authentication.

## Features Implemented

### 1. Login & Registration System
- **Login Component**: Standalone component with form validation
- **Register Component**: Standalone component for user registration
- **User Service**: Manages user authentication and state
- **Mock API**: JSON Server for user data persistence

### 2. Routing Implementation
- **Default Route**: Redirects to dashboard component
- **Lazy Loading**: Login and Register components are lazy-loaded
- **Dynamic Loading**: Lavorazioni and Amministrazione modules are lazy-loaded
- **Route Guards**: AdminGuard restricts access based on user role

### 3. Route Guards with RxJS
- **AdminGuard**: Uses `filter` operator to check user role
- **Access Control**: Non-admin users are redirected to dashboard
- **RxJS Operators**: Implements `filter`, `map`, `take`, and `tap`

### 4. Dashboard Component
- **Welcome Message**: Displays user name and role
- **Role-based UI**: Shows different content based on user permissions

### 5. Header Navigation
- **Dynamic Menu**: Shows/hides menu items based on user role
- **User Info**: Displays current user name and role
- **Login/Logout**: Authentication state management
- **Role Toggle**: For testing purposes (toggle between admin/user)

## Setup Instructions

### 1. Install Dependencies
```bash
cd RoutingAQ
npm install
```

### 2. Install JSON Server (if not already installed globally)
```bash
npm install -g json-server
```

### 3. Start the Mock API Server
```bash
npm run json-server
```
This will start the JSON server on http://localhost:3000

### 4. Start the Angular Application
```bash
npm start
```
This will start the Angular app on http://localhost:4200

## Usage

### Default Users
The application comes with pre-configured users in `db.json`:

1. **Admin User**:
   - Email: sparsh262002@gmail.com
   - Password: arsh
   - Role: Admin

2. **Regular User**:
   - Email: sparshss262002@gmail.com
   - Password: arshs
   - Role: Call Center

### Testing the Application

1. **Access Control Testing**:
   - Login as admin to access all menu items
   - Login as regular user to see restricted access
   - Try accessing `/lavorazioni` or `/amministrazione` as non-admin

2. **Lazy Loading Testing**:
   - Check Network tab in browser dev tools
   - Navigate to different routes to see modules loading on demand

3. **Route Guards Testing**:
   - Login as non-admin user
   - Try to access admin-only routes
   - Observe redirection to dashboard

## Architecture

### Lazy Loading Implementation
- **Login/Register**: Standalone components with `loadComponent`
- **Feature Modules**: Lavorazioni and Amministrazione modules with `loadChildren`
- **Route Guards**: Applied to protected routes

### RxJS Integration
- **UserService**: Uses BehaviorSubject for state management
- **AdminGuard**: Implements multiple RxJS operators
- **Authentication Flow**: Observable-based user state

### Security Features
- **Role-based Access Control**: Admin vs User permissions
- **Route Protection**: Guards prevent unauthorized access
- **State Persistence**: User state saved in localStorage

## File Structure
```
src/app/
├── login/                 # Login component (standalone)
├── register/              # Register component (standalone)
├── dashboard/             # Dashboard component
├── services/              # User service
├── guards/                # Route guards
├── shared/                # Shared components (header)
├── lavorazioni/           # Lazy-loaded module
├── amministrazione/       # Lazy-loaded module
└── app-routing.module.ts  # Main routing configuration
```

## Key Technologies
- Angular 15
- RxJS Operators
- Reactive Forms
- Angular Router
- JSON Server
- TypeScript
- CSS3