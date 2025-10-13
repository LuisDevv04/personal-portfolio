import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}

      <ThemeToggle />

      {/* Background Effect */}
      <StarBackground />

      {/* Navbar */}

      {/* Main Content */}

      {/* Footer */}
    </div>
  );
}
