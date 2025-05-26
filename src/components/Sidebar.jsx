
import {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart3,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings,
  Plus,
} from "lucide-react"
import "./Sidebar.css"

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: History, label: "History" },
  { icon: Calendar, label: "Calendar" },
  { icon: Clock, label: "Appointments" },
  { icon: BarChart3, label: "Statistics" },
  { icon: TestTube, label: "Tests" },
  { icon: MessageCircle, label: "Chat" },
  { icon: HelpCircle, label: "Support" },
  { icon: Settings, label: "Setting" },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
         <h2 className="logo"><span className="highlight">Health</span>care.</h2>
        <h2 className="sidebar-title">General</h2>
        <nav className="navigation">
          {navigationItems.map((item, index) => (
            <a key={index} href="#" className={`nav-item ${item.active ? "nav-item-active" : ""}`}>
              <item.icon className="nav-icon" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        <button className="add-new-btn">
          <Plus className="add-icon" />
          <span>Add new</span>
        </button>
      </div>
    </aside>
  )
}
