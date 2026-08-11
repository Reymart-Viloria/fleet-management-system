# 🚚 Vanguard - Fleet Management System

**Professional, Responsive Fleet Management Dashboard**

A complete offline-first fleet management system built with vanilla HTML/CSS/JavaScript, designed for admins and drivers with a modern, production-ready interface.

## ✨ Features

### Admin Dashboard
- **Real-time KPI Stats**: Active drivers, vehicles, pending transits, budget tracking
- **Transit Management**: Create, view, track, and complete transits
- **Driver Management**: Add, edit, delete drivers with full profiles
- **Vehicle Management**: Manage fleet with capacity and status tracking
- **Analytics & Reporting**: View all historical data and export CSV

### Driver Dashboard
- **Personal Stats**: Hours worked, completed trips, earnings
- **Transit Requests**: Accept/reject/view assigned transits
- **History**: Complete record of all transits
- **Profile**: Manage personal information

### Technical Features
- **Offline-First**: Works completely offline, syncs when connected
- **localStorage Persistence**: All data stored locally
- **Fully Responsive**: Desktop, tablet, mobile optimized
- **Professional UI**: Modern design with smooth animations
- **Role-Based Access**: Separate admin and driver interfaces
- **CSV Export**: Download transit records for analysis

## 📱 Responsive Design

### Desktop (1200px+)
- 2-column layout with persistent sidebar
- Full-width content area
- Optimized stat grids

### Tablet (768px - 1024px)
- Collapsible sidebar
- 2-column stat grid
- Touch-friendly buttons

### Mobile (< 768px)
- Single column layout
- Hamburger-style navigation
- Stacked forms and grids
- Optimized touch targets

## 🔐 Login Credentials

### Admin Account
- **Username**: `admin`
- **Password**: `admin123`

### Driver Accounts
- **Username**: `robert` | **Password**: `driver123`
- **Username**: `emma` | **Password**: `driver123`
- **Username**: `liam` | **Password**: `driver123`

## 🚀 Quick Start

1. Open `index.html` in any modern browser
2. Login with admin or driver credentials
3. Start creating transits and managing operations

## 📊 Admin Features

### Dashboard
View real-time fleet metrics:
- Active drivers and vehicles
- Pending transits count
- Total budget allocated
- Recent activity feed

### Transit Management
- **Create Transit**: Select date, destination, driver, vehicle, and budget
- **View Transits**: See all active transits with status
- **Complete Transit**: Mark transits as done (moves to history)
- **Budget Tracking**: Gas, food, and miscellaneous expense tracking

### Driver Management
- **Add Driver**: Input driver details, phone, emergency contact, service areas
- **View Drivers**: Card-based layout showing availability and location
- **Edit/Delete**: Modify or remove driver records
- **Auto-Credentials**: System generates username/password for each driver

### Vehicle Management
- **Add Vehicle**: Enter plate number, model, passenger capacity
- **View Vehicles**: See all vehicles with availability status
- **Edit/Delete**: Manage vehicle details
- **Capacity Matching**: Only shows vehicles that fit passenger count

### Data & Analytics
- **View All Records**: Complete history of transits
- **CSV Export**: Download data for external analysis
- **Filter Options**: View individual driver performance

## 👤 Driver Features

### Dashboard
- Total hours worked (calculated from completed trips)
- Number of completed trips
- Total earnings from all trips
- Pending transit requests

### Transits
- View active transit assignments
- Accept/decline requests
- Track passenger count and budget
- View transit status

### History
- Complete record of all completed transits
- Date, destination, and earnings per trip
- Performance tracking

### Profile
- Update personal information
- Edit phone and emergency contacts
- Manage LTO and service areas

## 💾 Data Storage

All data is stored in **browser localStorage** as JSON:

- `drivers`: Driver profiles and availability
- `vehicles`: Vehicle fleet details
- `transits`: Active transit assignments
- `history`: Completed transit records
- `userId`, `role`, `userName`: Session info

**No internet required** - Works completely offline!

## 🛠️ Technical Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript ES6+
- **Storage**: localStorage (offline-first)
- **Architecture**: Single-page application (SPA)
- **Styling**: CSS Grid & Flexbox, CSS variables
- **No dependencies**: Pure vanilla implementation

## 📋 Transit Lifecycle

```
[New Transit]
    ↓
  Pending → [Admin marks complete] → Completed
    ↓
  History
```

### Creating a Transit
1. Click "+ Create" on Transit Management
2. Select trip type (one-way or round-trip)
3. Choose date and destination
4. Select vehicle (auto-filtered by capacity)
5. Assign driver (auto-suggests by destination)
6. Set budget (gas, food, misc)
7. Submit to create

### Completing a Transit
1. View active transits
2. Check the completion checkbox
3. Transit moves to history
4. Driver earnings updated

## 🎨 Color Scheme

| Color | RGB | Usage |
|-------|-----|-------|
| Primary Red | #c41e3a | Buttons, accents, primary action |
| Secondary Green | #6b8e23 | Secondary actions, links |
| Success Green | #10b981 | Positive status, available |
| Warning Amber | #f59e0b | Pending status, alerts |
| Info Blue | #3b82f6 | Information, secondary stats |
| Light Gray | #f3f4f6 | Backgrounds |

## 🔍 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Debugging

Console logs are prefixed with `[v0]` for easy filtering:

```javascript
// Check browser console for debug info
// Filter by "[v0]" to see system logs
```

## 📝 Notes

- **Offline-First Design**: Perfect for field operations with unreliable connectivity
- **No Backend Required**: Runs entirely in the browser
- **Data Sync Ready**: Easy to integrate with backend when needed
- **Professional UI**: Production-ready design inspired by YachtSys
- **Fully Responsive**: Tested across all device sizes

## 🚀 Future Enhancements

- Backend API integration
- Real-time map tracking
- Photo uploads for transits
- SMS notifications
- Advanced reporting
- Multi-language support

---

**Built with ❤️ for efficient fleet management**
