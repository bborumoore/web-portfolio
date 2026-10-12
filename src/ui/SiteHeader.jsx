const navItems = [
  { href: "#about", label: "About" },
  { href: "#timeline", label: "History" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader({ name, headline }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#main-content">
          <span className="brand-name">{name}</span>
          <span className="brand-headline">{headline}</span>
        </a>

        <nav aria-label="Primary">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
