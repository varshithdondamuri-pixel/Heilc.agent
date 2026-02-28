const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="font-display font-bold text-primary text-xs">H</span>
            </div>
            <span className="font-display font-bold text-foreground tracking-tight">HEILC</span>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-muted-foreground">
            <span>heilc.agen@gmail.com</span>
            <span className="hidden sm:inline">·</span>
            <span>+91 83093 24612</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">Terms of Service</a>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} HEILC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
